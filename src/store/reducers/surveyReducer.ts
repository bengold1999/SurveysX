// import { surveyService } from "../services/survey.service"

export const SET_SURVEYS = 'SET_SURVEYS'
export const REMOVE_SURVEY = 'REMOVE_SURVEY'
export const ADD_SURVEY = 'ADD_SURVEY'
export const UPDATE_SURVEY = 'UPDATE_SURVEY'
export const ADD_TO_CART = 'ADD_TO_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const UNDO_REMOVE_SURVEY = 'UNDO_REMOVE_SURVEY'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_FILTER_BY = 'SET_FILTER_BY'
export const SET_SURVEY = 'SET_SURVEY'

interface Survey {
    _id: string;
    // Add other survey properties here
}

interface FilterBy {
    // Define the structure of your filterBy object
    [key: string]: any;
}

interface SurveyState {
    surveys: Survey[];
    survey: Survey | null;
}

const searchParams = new URLSearchParams(window.location.search)
const initialState: SurveyState = {
    surveys: [],
    survey: null,
    // lastRemovedSurvey: null,
    // filterBy: surveyService.getFilterFromParams(searchParams),
    // cart: []
}

interface SetSurveysAction {
    type: typeof SET_SURVEYS;
    surveys: Survey[];
}

interface SetSurveyAction {
    type: typeof SET_SURVEY;
    survey: Survey;
}

interface RemoveSurveyAction {
    type: typeof REMOVE_SURVEY;
    surveyId: string;
}

interface AddSurveyAction {
    type: typeof ADD_SURVEY;
    survey: Survey;
}

interface UpdateSurveyAction {
    type: typeof UPDATE_SURVEY;
    survey: Survey;
}

interface AddToCartAction {
    type: typeof ADD_TO_CART;
    survey: Survey;
}

interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    surveyId: string;
}

interface ClearCartAction {
    type: typeof CLEAR_CART;
}

interface UndoRemoveSurveyAction {
    type: typeof UNDO_REMOVE_SURVEY;
}

interface SetFilterByAction {
    type: typeof SET_FILTER_BY;
    filterBy: FilterBy;
}

type SurveyAction =
    | SetSurveysAction
    | RemoveSurveyAction
    | AddSurveyAction
    | UpdateSurveyAction
    | AddToCartAction
    | RemoveFromCartAction
    | ClearCartAction
    | UndoRemoveSurveyAction
    | SetFilterByAction
    | SetSurveyAction

export function surveyReducer(state: SurveyState = initialState, action: SurveyAction): SurveyState {
    let surveys: Survey[];

    switch (action.type) {
        case SET_SURVEYS:
            return { ...state, surveys: action.surveys }

        case SET_SURVEY:
            return { ...state, survey: action.survey }

        case REMOVE_SURVEY: {
            const lastRemovedSurvey = state.surveys.find(survey => survey._id === action.surveyId) || null;
            surveys = state.surveys.filter(survey => survey._id !== action.surveyId)
            return { ...state, surveys, lastRemovedSurvey }
        }

        case ADD_SURVEY:
            return { ...state, surveys: [...state.surveys, action.survey] }

        case UPDATE_SURVEY:
            surveys = state.surveys.map(survey => (survey._id === action.survey._id) ? action.survey : survey)
            return { ...state, surveys }

        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.survey] }

        case REMOVE_FROM_CART: {
            const cart = state.cart.filter(survey => survey._id !== action.surveyId)
            return { ...state, cart }
        }

        case CLEAR_CART:
            return { ...state, cart: [] }

        case UNDO_REMOVE_SURVEY:
            if (state.lastRemovedSurvey) {
                return {
                    ...state,
                    surveys: [...state.surveys, state.lastRemovedSurvey],
                    lastRemovedSurvey: null
                }
            }
            return state;

        case SET_FILTER_BY:
            return {
                ...state,
                filterBy: { ...state.filterBy, ...action.filterBy },
            }

        default:
            return state
    }
}
