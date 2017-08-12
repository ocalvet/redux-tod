import { ADD_TODO, REMOVE_TODO, MARK_COMPLETE } from './actionTypes';
export const addTodo = (todo) => ({ type: ADD_TODO, todo });
export const removeTodo = (id) => ({ type: REMOVE_TODO, id });
export const completeTodo = (id) => ({ type: MARK_COMPLETE, id });