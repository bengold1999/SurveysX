import Header from '@/components/header';
import React from 'react';

const surveys = [
  { id: 1, title: 'Product Survey', date: '2024-08-27' },
  { id: 2, title: 'Medical Questionnaire', date: '2024-09-13' },
  { id: 3, title: 'Feedback Survey', date: '2024-08-18' },
  { id: 4, title: 'Product Test', date: '2024-08-27' },
  // Add more survey objects as needed
];

const SurveyDashboard: React.FC = () => {
  return (
   <>
   <Header></Header>
    <article className='p-4 flex flex-col items-center gap-4'>
   <h1>Survey Dashboard</h1>
   <div className='flex  gap-4 ite'>
   {surveys.map((survey) => (
     <div key={survey.id} className='border p-4 '>
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
