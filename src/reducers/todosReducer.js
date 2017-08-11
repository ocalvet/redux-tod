import { persistentReducer } from 'redux-pouchdb-plus';
import { ADD_TODO, REMOVE_TODO } from '../actions/actionTypes';
let id = 1;
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ id: id++, ...action.todo }, ...state];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      console.log('No reducer for ', state, action);
  };

  return state;
}

export default persistentReducer(todos);