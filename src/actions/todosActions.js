import { ADD_TODO, REMOVE_TODO } from './actionTypes';
export const addTodo = (todo) => ({ type: ADD_TODO, todo });
export const removeTodo = (id) => ({ type: REMOVE_TODO, id });