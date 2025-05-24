import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import {
  addTodo,
  deleteTodo,
  editTodo,
  todoFinished,
} from "./action/TodoAction,";

function App() {
  const dispatch = useDispatch();
  const action = bindActionCreators(
    {
      addTodo,
      deleteTodo,
      editTodo,
      todoFinished,
    },
    dispatch
  );

  return (
    <>
      <AddTodo addTodo={action.addTodo} />
      <TodoList
        deleteTodo={action.deleteTodo}
        addTodo={action.addTodo}
        editTodo={action.editTodo}
        todoFinished={action.todoFinished}
      />
    </>
  );
}

export default App;
