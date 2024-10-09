import { compose, legacy_createStore as createStore, combineReducers } from 'redux';
import { surveyReducer } from './reducers/surveyReducer'; // Ensure this path is correct

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Combine all reducers
const rootReducer = combineReducers({
  surveyModule: surveyReducer // Use 'surveyModule' consistently across the app
});

// Setup Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store
export const store = createStore(rootReducer, composeEnhancers());
