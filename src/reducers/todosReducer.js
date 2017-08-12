import { persistentReducer } from 'redux-pouchdb-plus';
import { ADD_TODO, REMOVE_TODO, MARK_COMPLETE } from '../actions/actionTypes';
import uuid from 'uuid/v4';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ id: uuid(), ...action.todo }, ...state];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case MARK_COMPLETE:
      return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo);
    default:
      console.log(`No reducer for ${action.type}`, state, action);
  };

  return state;
}

export default persistentReducer(todos);