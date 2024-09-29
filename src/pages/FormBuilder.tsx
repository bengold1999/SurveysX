import Header from '@/components/header';
import HeaderHome from '@/components/HeaderHome';
import React, { useState } from 'react';

type QuestionType = 'text' | 'number' | 'multiple-choice' | 'single-choice';

interface Question {
  id: string;
  text: string;
  type: QuestionType;
  options?: string[];
}

const FormBuilder: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = (type: QuestionType) => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      text: '',
      type: type,
      options: type === 'multiple-choice' || type === 'single-choice' ? ['Option 1'] : undefined,
    };
    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, ...updates } : q));
  };

  const addOption = (questionId: string) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId && q.options) {
        return { ...q, options: [...q.options, `Option ${q.options.length + 1}`] };
      }
      return q;
    }));
  };

  const removeQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <>
      <Header/>
    <div className="bg-bgTrue min-h-screen p-4">
      <div className="max-w-3xl mx-auto space-y-4">
        {questions.map((question) => (
          <div key={question.id} className="bg-white p-6 rounded-lg shadow">
            <input
              type="text"
              value={question.text}
              onChange={(e) => updateQuestion(question.id, { text: e.target.value })}
              placeholder="Question"
              className="w-full text-lg font-semibold mb-4 p-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
            />
            {question.type === 'text' && (
              <input type="text" placeholder="Short answer text" disabled className="w-full p-2 border border-gray-300 rounded" />
            )}
            {question.type === 'number' && (
              <input type="number" placeholder="Number" disabled className="w-full p-2 border border-gray-300 rounded" />
            )}
            {(question.type === 'multiple-choice' || question.type === 'single-choice') && question.options && (
              <div className="space-y-2">
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type={question.type === 'multiple-choice' ? 'checkbox' : 'radio'}
                      disabled
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => updateQuestion(question.id, { options: question.options?.map((opt, i) => i === index ? e.target.value : opt) })}
                      className="flex-grow p-2 border border-gray-300 rounded"
                    />
                  </div>
                ))}
                <button onClick={() => addOption(question.id)} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Add Option
                </button>
              </div>
            )}
            <button onClick={() => removeQuestion(question.id)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Remove Question
            </button>
          </div>
        ))}
      </div>
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow space-y-2">
        <button onClick={() => addQuestion('text')} className="w-full flex items-center justify-center p-2 bg-gray-200 rounded hover:bg-gray-300">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Text
        </button>
        <button onClick={() => addQuestion('number')} className="w-full flex items-center justify-center p-2 bg-gray-200 rounded hover:bg-gray-300">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
          </svg>
          Number
        </button>
        <button onClick={() => addQuestion('multiple-choice')} className="w-full flex items-center justify-center p-2 bg-gray-200 rounded hover:bg-gray-300">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          Multiple Choice
        </button>
        <button onClick={() => addQuestion('single-choice')} className="w-full flex items-center justify-center p-2 bg-gray-200 rounded hover:bg-gray-300">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Single Choice
        </button>
      </div>
    </div>
    </>
  );
};

export default FormBuilder;