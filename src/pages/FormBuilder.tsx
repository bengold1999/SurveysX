import React, { useState } from 'react';
import { PlusCircle, Save, Trash2, GripVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

type QuestionType = 'text' | 'number' | 'multiple-choice' | 'single-choice';

interface Option {
  id: string;
  text: string;
}

interface Question {
  id: string;
  text: string;
  type: QuestionType;
  options?: Option[];
  required: boolean;
}

const FormBuilder: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [currentType, setCurrentType] = useState<QuestionType>('text');

  const addQuestion = () => {
    if (currentQuestion.trim() !== '') {
      const newQuestion: Question = {
        id: Date.now().toString(),
        text: currentQuestion,
        type: currentType,
        required: false,
        options: (currentType === 'multiple-choice' || currentType === 'single-choice') 
          ? [{ id: '1', text: 'Option 1' }] 
          : undefined,
      };
      setQuestions([...questions, newQuestion]);
      setCurrentQuestion('');
      setCurrentType('text');
    }
  };

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, ...updates } : q));
  };

  const addOption = (questionId: string) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId && q.options) {
        const newOptionId = (q.options.length + 1).toString();
        return { ...q, options: [...q.options, { id: newOptionId, text: `Option ${newOptionId}` }] };
      }
      return q;
    }));
  };

  const updateOption = (questionId: string, optionId: string, newText: string) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId && q.options) {
        return { ...q, options: q.options.map(o => o.id === optionId ? { ...o, text: newText } : o) };
      }
      return q;
    }));
  };

  const removeOption = (questionId: string, optionId: string) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId && q.options && q.options.length > 1) {
        return { ...q, options: q.options.filter(o => o.id !== optionId) };
      }
      return q;
    }));
  };

  const removeQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Form Builder</h1>
      
      <div className="space-y-6">
        {questions.map((question) => (
          <div key={question.id} className="p-6 border rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <Input
                value={question.text}
                onChange={(e) => updateQuestion(question.id, { text: e.target.value })}
                className="text-lg font-semibold bg-transparent border-none shadow-none"
                placeholder="Question"
              />
              <Select
                value={question.type}
                onValueChange={(value: QuestionType) => updateQuestion(question.id, { type: value })}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Question type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text">Short answer</SelectItem>
                  <SelectItem value="number">Number</SelectItem>
                  <SelectItem value="multiple-choice">Multiple choice</SelectItem>
                  <SelectItem value="single-choice">Single choice</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {(question.type === 'multiple-choice' || question.type === 'single-choice') && question.options && (
              <div className="space-y-2 ml-6">
                {question.options.map((option, index) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    {question.type === 'multiple-choice' ? (
                      <Checkbox disabled />
                    ) : (
                      <RadioGroup>
                        <RadioGroupItem value={option.id} id={`${question.id}-${option.id}`} disabled />
                      </RadioGroup>
                    )}
                    <Input
                      value={option.text}
                      onChange={(e) => updateOption(question.id, option.id, e.target.value)}
                      className="flex-grow"
                      placeholder={`Option ${index + 1}`}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeOption(question.id, option.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addOption(question.id)}
                  className="mt-2"
                >
                  Add option
                </Button>
              </div>
            )}

            {question.type === 'number' && (
              <Input type="number" placeholder="Number" className="mt-2" disabled />
            )}

            {question.type === 'text' && (
              <Input type="text" placeholder="Short answer" className="mt-2" disabled />
            )}

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`required-${question.id}`}
                  checked={question.required}
                  onCheckedChange={(checked) => updateQuestion(question.id, { required: checked as boolean })}
                />
                <Label htmlFor={`required-${question.id}`}>Required</Label>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeQuestion(question.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 space-y-4">
        <Input
          type="text"
          value={currentQuestion}
          onChange={(e) => setCurrentQuestion(e.target.value)}
          placeholder="Enter your question"
          className="w-full"
        />
        
        <Select value={currentType} onValueChange={(value: QuestionType) => setCurrentType(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select question type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text">Short answer</SelectItem>
            <SelectItem value="number">Number</SelectItem>
            <SelectItem value="multiple-choice">Multiple choice</SelectItem>
            <SelectItem value="single-choice">Single choice</SelectItem>
          </SelectContent>
        </Select>
        
        <Button onClick={addQuestion} className="w-full">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Question
        </Button>
        
        <Button variant="outline" className="w-full">
          <Save className="mr-2 h-4 w-4" /> Save Form
        </Button>
      </div>
    </div>
  );
};

export default FormBuilder;