// Updated survey service with user-based query
import { Survey } from "@/lib/types";
const STORAGE_KEY = "surveys";
const Surveys = [
  {
    _id: "1",
    userId: "dummyUserId",
    title: "Product Survey",
    date: "2024-08-27",
    questions: [
      { id: "q1", text: "What do you think about our product?", type: "text" },
      { id: "q2", text: "Rate our product from 1 to 5", type: "number" },
      { id: "q3", text: "Would you recommend our product?", type: "single-choice", options: ["Yes", "No"] },
    ],
  },
  {
    _id: "2",
    userId: "dummyUserId",
    title: "Medical Questionnaire",
    date: "2024-09-13",
    questions: [
      { id: "q1", text: "Do you have any allergies?", type: "text" },
      { id: "q2", text: "Rate your overall health from 1 to 10", type: "number" },
      { id: "q3", text: "Are you currently taking any medication?", type: "single-choice", options: ["Yes", "No"] },
    ],
  },
];
export const surveyService = {
  query,
  getById,
  remove,
  save,
};

function query(filterBy: FilterBy = {}) {
  const surveys = _loadFromStorage();
  console.log("From query function:", surveys); // Ensure surveys are being loaded
  
  // Apply user-specific filter
  let filteredSurveys = surveys;
  if (filterBy.userId) {
    filteredSurveys = filteredSurveys.filter((survey) => survey.userId === filterBy.userId);
  }

  if (filterBy.title) {
    filteredSurveys = filteredSurveys.filter((survey) => survey.title.includes(filterBy.title));
  }

  return filteredSurveys; // Ensure this function returns the filtered results
}

function getById(surveyId: string) {
  const surveys = _loadFromStorage();
return surveys.find((survey: Survey) => survey._id === surveyId);
}

function remove(surveyId: string) {
  let surveys = _loadFromStorage();
  surveys = surveys.filter((survey: Survey) => survey._id !== surveyId);
  _saveToStorage(surveys);
}

function save(survey: Survey) {
  const surveys = _loadFromStorage() || [];

  if (survey._id) {
    const idx = surveys.findIndex((s) => s._id === survey._id);
    if (idx !== -1) {
      surveys[idx] = survey;
    }
  } else {
    survey._id = _makeId();
    surveys.push(survey);
  }

  _saveToStorage(surveys);
  return survey;
}

// Load and save functions remain the same
function _loadFromStorage() {
  if (!localStorage.getItem(STORAGE_KEY)) _saveToStorage(Surveys);
  
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

function _saveToStorage(surveys: Survey[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(surveys));
}

function _makeId(length = 6) {
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let txt = "";
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
