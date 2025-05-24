import {
  FINISH_TODO,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "../constrants/action";

export const todoFinished = (todo, isFinished) => ({
  type: FINISH_TODO,
  payload: { todo,  isFinished },
});
export const addTodo = (input) => ({
  type: ADD_TODO,
  payload: { todoText: input },
});
export const deleteTodo = (todo) => ({
     type: DELETE_TODO,
      payload: { todo }
     });
export const editTodo = (todo, todoText) => ({
  type: EDIT_TODO,
  payload: { todo, todoText },
});
