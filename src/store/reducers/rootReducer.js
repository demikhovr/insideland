import { combineReducers } from 'redux';
import catalogReducer from './catalog';
import createReducer from './create';

export default combineReducers({
  catalog: catalogReducer,
  create: createReducer,
});
