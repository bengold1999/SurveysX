import Header from '@/components/header';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { surveyService } from '@/services/survery.service';

const SurveyDashboard: React.FC = () => {
  const [surveys, setSurveys] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [sortOption, setSortOption] = useState('');
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

  // Filter and Sort Surveys
  const filteredSurveys = surveys
    .filter((survey) => 
      survey.title.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortOption === 'date') {
        return new Date(a.date) > new Date(b.date) ? 1 : -1;
      }
      return 0;
    });

  return (
    <>
      <Header />
      <article className="p-4 flex flex-col items-center gap-4">
        <h1>Survey Dashboard</h1>
        
        <div className="flex gap-2 p-2">
          {/* Filter by Title */}
          <input 
            type="text" 
            placeholder="Filter by title..." 
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="border rounded p-2"
          />

          {/* Sort by Title or Date */}
          <select 
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border rounded p-2"
          >
            <option value="">Sort By</option>
            <option value="title">Title</option>
            <option value="date">Date</option>
          </select>
        </div>

        <div className="flex gap-4 p-8">
          {filteredSurveys.length > 0 ? (
            filteredSurveys.map((survey) => (
              <div
                key={survey._id}
                className="border-spacing-1 border border-gray-300 rounded-md hover:border-primary transition-all duration-300  p-4 cursor-pointer"
                onClick={() => handleSurveyClick(survey._id)}
              >
                <img className='w-3/4' src="src/assets/img/Information tab-pana 1.png" alt="" />
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
