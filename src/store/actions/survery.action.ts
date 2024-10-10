// import { surveyService } from '../services/survey.service'
// import { userService } from '../services/user.service'
import { store } from '../store'
// import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import {
  ADD_SURVEY,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_SURVEY,
  REMOVE_FROM_CART,
  SET_SURVEYS,
  UNDO_REMOVE_SURVEY,
  UPDATE_SURVEY,
  SET_FILTER_BY,
  SET_SURVEY
} from './../reducers/surveyReducer'
// import { SET_SCORE } from './user.reducer'

// import { LOADING_DONE, LOADING_START } from './system.reducer'
import { surveyService } from '@/services/survery.service'

// Define interfaces for Survey and FilterBy if not already defined
interface Survey {
  _id: string
  // Add other survey properties here
}

interface FilterBy {
  // Define the structure of your filterBy object
  [key: string]: any
}
interface RemoveSurveyAction {
  type: typeof REMOVE_SURVEY
  surveyId: string
}
// Action Creators:
export function getActionRemoveSurvey(surveyId: string) {
  return {
    type: REMOVE_SURVEY,
    surveyId
  }
}

export function getActionAddSurvey(survey: Survey) {
  return {
    type: ADD_SURVEY,
    survey
  }
}

export function getActionUpdateSurvey(survey: Survey) {
  return {
    type: UPDATE_SURVEY,
    survey
  }
}

export function loadSurvey(surveyId: string) {
  // Indicate that loading has started
  // store.dispatch({ type: LOADING_START, isLoading: true });
  // console.log("From loadSurvey function:", surveyId);

  try {
    const survey = surveyService.getById(surveyId);
    // console.log("From loadSurvey function:", survey); // No need for await here since localStorage is synchronous
    // Ensure survey is properly logged

    // Dispatch the loaded survey to Redux
    store.dispatch({
      type: SET_SURVEY,
      survey,
    });
  } catch (err) {
    console.error('Cannot load survey:', err); // Log any errors during the load process
    throw err;
  } finally {
    // Indicate that loading has finished
    // store.dispatch({ type: LOADING_DONE, isLoading: false });
  }

}

export function loadSurveys(filterBy: FilterBy = {}) {
  // Indicate that loading has started
  // store.dispatch({ type: LOADING_START, isLoading: true });

  try {
    const surveys = surveyService.query(filterBy); // No need for await here since localStorage is synchronous
    console.log('Loaded surveys:', surveys); // Ensure surveys are properly logged

    // Dispatch the loaded surveys to Redux
    store.dispatch({
      type: SET_SURVEYS,
      surveys,
    });
  } catch (err) {
    console.error('Cannot load surveys:', err); // Log any errors during the load process
    throw err;
  } finally {
    // Indicate that loading has finished
    // store.dispatch({ type: LOADING_DONE, isLoading: false });
  }
}

export function setFilterBy(filterBy: FilterBy) {
  store.dispatch({ type: SET_FILTER_BY, filterBy })
}

export async function removeSurvey(surveyId: string) {
  try {
    await surveyService.remove(surveyId)
    store.dispatch(getActionRemoveSurvey(surveyId))
  } catch (err) {
    console.log('Cannot remove survey', err)
    throw err
  }
}

export async function addSurvey(survey: Survey) {
  try {
    const savedSurvey = await surveyService.save(survey)
    console.log('Added survey', savedSurvey)
    store.dispatch(getActionAddSurvey(savedSurvey))
    return savedSurvey
  } catch (err) {
    console.log('Cannot add survey', err)
    throw err
  }
}

export async function updateSurvey(survey: Survey) {
  try {
    const savedSurvey = await surveyService.save(survey)
    console.log(savedSurvey, 'heyyyyyy')
    store.dispatch(getActionUpdateSurvey(savedSurvey))
    return savedSurvey
  } catch (err) {
    console.log('Survey action -> Cannot save survey', err)
    throw err
  }
}

export function addToCart(survey: Survey) {
  store.dispatch({
    type: ADD_TO_CART,
    survey
  })
}

export function removeFromCart(surveyId: string) {
  store.dispatch({
    type: REMOVE_FROM_CART,
    surveyId
  })
}

export async function checkout(total: number) {
  try {
    const score = await userService.changeScore(-total)
    store.dispatch({ type: SET_SCORE, score })
    store.dispatch({ type: CLEAR_CART })
    return score
  } catch (err) {
    console.log('Survey actions: error in checkout', err)
    throw err
  }
}

// Demo for Optimistic Mutation
// (Assuming the server call will work, so updating the UI first)
export function onRemoveSurveyOptimistic(surveyId: string) {
  store.dispatch({
    type: REMOVE_SURVEY,
    surveyId
  })
  showSuccessMsg('Survey removed')

  surveyService.remove(surveyId)
    .then(() => {
      console.log('Server reported - Deleted successfully')
    })
    .catch(err => {
      showErrorMsg('Cannot remove survey')
      console.log('Cannot load surveys', err)
      store.dispatch({
        type: UNDO_REMOVE_SURVEY,
      })
    })
}
