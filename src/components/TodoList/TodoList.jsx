import { useContext, useState } from "react";
import Todo from "../Todo/Todo"
import TodoContext from "../../context/TodoContext";
import TodoDispatchContext from "../../context/TodoDispatchContext";


function TodoList() {

  const { list, setList } = useContext(TodoContext);
  const {dispatch} = useContext(TodoDispatchContext)

  function changeFinished(todo, isFinished) {
    dispatch({ type: "onchange_todo", payload: { todo, isFinished } });

  }

  function onDelete(todo) {
    dispatch({ type: "delete_todo", payload: { todo } });

  }

  function onEdit(todo, todoText) {
    dispatch({ type: "edit_todo", payload: { todo, todoText } });

  }

  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            todoData={todo.todoData}
            isFinished={todo.isFinished ?? false}
            id={todo.id}

            changeFinished={ (isFinished) =>  changeFinished(todo, isFinished)}

            onDelete={() => onDelete(todo)}

            onEdit={(todoText) => onEdit(todo, todoText)}
          />
        ))}
    </div>
  );
}

export default TodoList;