import { combineReducers } from 'redux';
import todos from './todosReducer';
import filter from './filterReducer';

const reducers = combineReducers({
  todos,
  filter
});

export default reducers;