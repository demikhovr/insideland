import { combineReducers } from 'redux';
import quizReducer from './quiz-reducer';
import catalogReducer from './catalog-reducer';
import createReducer from './create-quiz-reducer';

export default combineReducers({
  quiz: quizReducer,
  catalog: catalogReducer,
  create: createReducer,
});
