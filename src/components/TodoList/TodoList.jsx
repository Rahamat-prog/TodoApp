import { useSelector} from "react-redux";
import Todo from "../Todo/Todo"
function TodoList({ editTodo, deleteTodo, todoFinished }) {
  const list = useSelector((state) => state.todo);

  function changeFinished(todo, isFinished) {
    todoFinished(todo, isFinished);
    // console.log("todo status ", isFinished);
    
  }

  function onDelete(todo) {
    deleteTodo(todo);
  }

  function onEdit(todo, todoText) {
    editTodo(todo, todoText);
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
            changeFinished={(isFinished) => changeFinished(todo, isFinished)}
            onDelete={() => onDelete(todo)}
            onEdit={(todoText) => onEdit(todo, todoText)}
          />
        ))}
    </div>
  );
}

export default TodoList;