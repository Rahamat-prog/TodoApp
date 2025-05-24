// Extract the main logic using reducers

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  FINISH_TODO,
} from "../constrants/action";

function ToodReducers(state = [], action) {
  // reducer take two parameter state and action
  if (action.type == ADD_TODO) {
    let todoText = action.payload.todoText; // pauload is a object of the reducer
    return [
      ...state,
      { id: Date.now(), todoData: todoText, isFinished: false },
    ];
  } else if (action.type == EDIT_TODO) {
    let todo = action.payload.todo;
    let todoText = action.payload.todoText;

    const updatedList = state.map((t) =>
      t.id === todo.id ? { ...t, todoData: todoText } : t
    );
    return updatedList;
  } else if (action.type == DELETE_TODO) {
    let todo = action.payload.todo;
    const updatedList = state.filter((t) => t.id !== todo.id);
    return updatedList;
  } else if (action.type == FINISH_TODO) {
    let todo = action.payload.todo;
    let isFinished = action.payload.isFinished;
    console.log("ckeckBox mark", isFinished);
    
    const updatedList = state.map((t) =>
      t.id === todo.id ? { ...t, isFinished } : t
    );
    return updatedList;
  } else {
    return state;
  }
}

export default ToodReducers;





