import { combineReducers } from 'redux';
import todos from './todosReducer';
import filter from './filterReducer';
import newTodo from './newTodoReducer';

const reducers = combineReducers({
  todos,
  filter,
  newTodo
});

export default reducers;