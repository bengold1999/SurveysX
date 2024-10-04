import Header from '@/components/header';
import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const surveys = [
    { 
      id: 1, 
      title: 'Product Survey', 
      date: '2024-08-27',
      questions: [
        { id: 'q1', text: 'What do you think about our product?', type: 'text' },
        { id: 'q2', text: 'Rate our product from 1 to 5', type: 'number' },
        { id: 'q3', text: 'Would you recommend our product?', type: 'single-choice', options: ['Yes', 'No'] },
      ]
    },
    { 
      id: 2, 
      title: 'Medical Questionnaire', 
      date: '2024-09-13',
      questions: [
        { id: 'q1', text: 'Do you have any allergies?', type: 'text' },
        { id: 'q2', text: 'Rate your overall health from 1 to 10', type: 'number' },
        { id: 'q3', text: 'Are you currently taking any medication?', type: 'single-choice', options: ['Yes', 'No'] },
      ]
    },
    { 
      id: 3, 
      title: 'Feedback Survey', 
      date: '2024-08-18',
      questions: [
        { id: 'q1', text: 'How satisfied are you with our service?', type: 'number' },
        { id: 'q2', text: 'What can we improve?', type: 'text' },
      ]
    },
    { 
      id: 4, 
      title: 'Product Test', 
      date: '2024-08-27',
      questions: [
        { id: 'q1', text: 'Did the product meet your expectations?', type: 'single-choice', options: ['Yes', 'No'] },
        { id: 'q2', text: 'How would you rate the product?', type: 'number' },
        { id: 'q3', text: 'What did you like the most?', type: 'text' },
      ]
    }
  ];
  

const SurveyDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleSurveyClick = (surveyId: number) => {
    navigate(`/FormBuilder/${surveyId}`); 
  };

  return (
    <>
    <Header/>
      <article className="p-4 flex flex-col items-center gap-4">
        <h1>Survey Dashboard</h1>
        <div className="flex gap-4">
          {surveys.map((survey) => (
            <div
              key={survey.id}
              className="border p-4 cursor-pointer"
              onClick={() => handleSurveyClick(survey.id)} 
            >
              <h2>{survey.title}</h2>
              <p>Date: {survey.date}</p>
            </div>
          ))}
        </div>
      </article>
    </>
  );
};

export default SurveyDashboard;
