import { compose, legacy_createStore as createStore, combineReducers } from 'redux';
import { surveyReducer } from './reducers/surveyReducer';
// import { surveyReducer } from './path/to/surveyReducer'; // Adjust the import path accordingly

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  surveysModule: surveyReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());
