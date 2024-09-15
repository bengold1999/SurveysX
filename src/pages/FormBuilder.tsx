import React, { useState } from 'react';
import { PlusCircle, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type QuestionType = 'text' | 'number' | 'date' | 'multiple-choice';

interface Question {
  text: string;
  type: QuestionType;
}

const FormBuilder: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [currentType, setCurrentType] = useState<QuestionType>('text');

  const addQuestion = () => {
    if (currentQuestion.trim() !== '') {
      setQuestions([...questions, { text: currentQuestion, type: currentType }]);
      setCurrentQuestion('');
      setCurrentType('text');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Form Builder</h1>
      
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={index} className="p-4 border rounded">
            <p className="font-semibold">{question.text}</p>
            <p className="text-sm text-gray-500">Type: {question.type}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 space-y-4">
        <Input
          type="text"
          value={currentQuestion}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentQuestion(e.target.value)}
          placeholder="Enter your question"
          className="w-full"
        />
        
        <Select value={currentType} onValueChange={(value: QuestionType) => setCurrentType(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select question type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text">Text</SelectItem>
            <SelectItem value="number">Number</SelectItem>
            <SelectItem value="date">Date</SelectItem>
            <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
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