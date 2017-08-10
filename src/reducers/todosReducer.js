import { ADD_TODO } from '../actions/actionTypes';
let id = 1;
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ id: id++, ...action.todo }, ...state];
    default:
      console.log('No reducer for ', state, action);
  };

  return state;
}

export default todos;