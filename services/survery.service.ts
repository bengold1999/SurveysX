// import { httpService } from './http.service' // Assuming you have a generic HTTP service for API requests

// // Define the Survey type if it's not globally available
// interface Survey {
//   _id: string
//   // Add other survey properties like title, description, etc.
//   title: string
//   description: string
//   // Add other relevant fields here
// }

// interface FilterBy {
//   // Define the filter criteria structure (e.g., by title, date, etc.)
//   [key: string]: any
// }

// // Service object to manage surveys
// export const surveyService = {
//   query,
//   getById,
//   remove,
//   save
// }

// // Fetch surveys based on filter criteria
// async function query(filterBy: FilterBy = {}) {
//   try {
//     const surveys = await httpService.get('survey', filterBy)
//     return surveys
//   } catch (err) {
//     console.error('Failed to query surveys', err)
//     throw err
//   }
// }

// // Get a specific survey by ID
// async function getById(surveyId: string) {
//   try {
//     const survey = await httpService.get(`survey/${surveyId}`)
//     return survey
//   } catch (err) {
//     console.error(`Failed to get survey with ID: ${surveyId}`, err)
//     throw err
//   }
// }

// // Remove a specific survey by ID
// async function remove(surveyId: string) {
//   try {
//     await httpService.delete(`survey/${surveyId}`)
//     return true
//   } catch (err) {
//     console.error(`Failed to remove survey with ID: ${surveyId}`, err)
//     throw err
//   }
// }

// // Save a new or updated survey
// async function save(survey: Survey) {
//   try {
//     if (survey._id) {
//       const updatedSurvey = await httpService.put(`survey/${survey._id}`, survey)
//       return updatedSurvey
//     } else {
//       const newSurvey = await httpService.post('survey', survey)
//       return newSurvey
//     }
//   } catch (err) {
//     console.error('Failed to save survey', err)
//     throw err
//   }
// }
const STORAGE_KEY = 'surveys' // Key to store surveys in localStorage

export const surveyService = {
  query,
  getById,
  remove,
  save,
}

interface Survey {
    _id: string
    // Add other survey properties like title, description, etc.
    title: string
    description: string
    // Add other relevant fields here
  }
  
  interface FilterBy {
    // Define the filter criteria structure (e.g., by title, date, etc.)
    [key: string]: any
  }

// Fetch surveys based on filter criteria from localStorage
async function query(filterBy: FilterBy = {}) {
  const surveys = _loadFromStorage()
  if (!surveys) return []
  
  // Apply filter logic (basic example, can be more complex)
  if (filterBy.title) {
    return surveys.filter(survey => survey.title.includes(filterBy.title))
  }
  return surveys
}

// Get a specific survey by ID from localStorage
async function getById(surveyId: string) {
  const surveys = _loadFromStorage()
  return surveys.find(survey => survey._id === surveyId) || null
}

// Remove a specific survey by ID from localStorage
async function remove(surveyId: string) {
  let surveys = _loadFromStorage()
  surveys = surveys.filter(survey => survey._id !== surveyId)
  _saveToStorage(surveys)
}

// Save a new or updated survey to localStorage
async function save(survey: Survey) {
  const surveys = _loadFromStorage() || []
  
  if (survey._id) {
    // Update existing survey
    const idx = surveys.findIndex(s => s._id === survey._id)
    if (idx !== -1) {
      surveys[idx] = survey
    }
  } else {
    // Add a new survey
    survey._id = _makeId()
    surveys.push(survey)
  }
  
  _saveToStorage(surveys)
  return survey
}

// Private function to load surveys from localStorage
function _loadFromStorage() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}

// Private function to save surveys to localStorage
function _saveToStorage(surveys: Survey[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(surveys))
}

// Utility to generate a random ID for new surveys
function _makeId(length = 6) {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let txt = ''
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}
