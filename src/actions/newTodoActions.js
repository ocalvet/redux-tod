import { RESET_NEW_TODO, CHANGE_NEW_TODO_TITLE } from './actionTypes';
export const resetTodo = () => ({ type: RESET_NEW_TODO });
export const changeNewTodoTitle = (title) => ({ type: CHANGE_NEW_TODO_TITLE, title });