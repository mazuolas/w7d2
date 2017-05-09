import * as APIUtil from '../util/todo_api_util';
import {receiveErrors} from './error_actions';
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function receiveTodos(todos){
  return {
    type: RECEIVE_TODOS,
    todos
  };
}

export function receiveTodo(todo){
  return {
    type: RECEIVE_TODO,
    todo
  };
}

export function removeTodo(todo){
  return {
    type: REMOVE_TODO,
    todo
  };
}

export function updateTodo(todo){
  return {
    type: UPDATE_TODO,
    todo
  };
}

export const fetchTodos = () => dispatch => {
  return APIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)));
};
export const addTodo = (todo) => dispatch => {
  return APIUtil.addTodo(todo).then(newTodo => dispatch(receiveTodo(newTodo)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

export const editTodo = (todo) => dispatch => {
  return APIUtil.updateTodo(todo).then(newtodo => dispatch(updateTodo(newtodo)),
    err => dispatch(receiveErrors(err.responseJSON)));
};
export const deleteTodo = (todo) => dispatch => {
  return APIUtil.deleteTodo(todo).then(newtodo => dispatch(removeTodo(newtodo)),
    err => dispatch(receiveErrors(err.responseJSON)));
};
