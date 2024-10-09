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

interface FilterBy {
  [key: string]: any;
}

async function query(filterBy: FilterBy = {}) {
  const surveys = _loadFromStorage();
  if (!surveys) return [];

  // Apply user-specific filter
  let filteredSurveys = surveys;
  if (filterBy.userId) {
    filteredSurveys = filteredSurveys.filter((survey) => survey.userId === filterBy.userId);
  }

  if (filterBy.title) {
    filteredSurveys = filteredSurveys.filter((survey) => survey.title.includes(filterBy.title));
  }

  return filteredSurveys;
}

async function getById(surveyId: string) {
  const surveys = _loadFromStorage();
  return surveys.find((survey) => survey._id === surveyId) || null;
}

async function remove(surveyId: string) {
  let surveys = _loadFromStorage();
  surveys = surveys.filter((survey: Survey) => survey._id !== surveyId);
  _saveToStorage(surveys);
}

async function save(survey: Survey) {
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