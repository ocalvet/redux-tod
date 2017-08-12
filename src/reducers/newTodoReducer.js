import { RESET_NEW_TODO, CHANGE_NEW_TODO_TITLE } from '../actions/actionTypes';

const resetedTodo = { title: '', completed: false };

const newTodo = (state = resetedTodo, action) => {
  switch (action.type) {
    case RESET_NEW_TODO:
      return {...resetedTodo};
    case CHANGE_NEW_TODO_TITLE:
      return {...state, title: action.title};
    default:
      return state;
  }
}

export default newTodo;