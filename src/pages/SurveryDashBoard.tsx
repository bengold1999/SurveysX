import Header from '@/components/header';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { surveyService } from '@/services/survery.service';

const SurveyDashboard: React.FC = () => {
  const [surveys, setSurveys] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch surveys for the specific user (assuming a dummy user)
    async function loadSurveys() {
      const userSurveys = await surveyService.query({ userId: 'dummyUserId' });
      setSurveys(userSurveys);
    }
    loadSurveys();
  }, []);

  const handleSurveyClick = (surveyId: string) => {
    navigate(`/FormBuilder/${surveyId}`);
  };

  return (
    <>
      <Header />
      <article className="p-4 flex flex-col items-center gap-4">
        <h1>Survey Dashboard</h1>
        <div className="flex gap-4">
          {surveys.length > 0 ? (
            surveys.map((survey) => (
              <div
                key={survey._id}
                className="border p-4 cursor-pointer"
                onClick={() => handleSurveyClick(survey._id)}
              >
                <h2>{survey.title}</h2>
                <p>Date: {survey.date}</p>
              </div>
            ))
          ) : (
            <p>No surveys found</p>
          )}
        </div>
      </article>
    </>
  );
};

export default SurveyDashboard;

