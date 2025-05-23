
import { useReducer, useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import TodoContext from './context/TodoContext';
import ToodReducers from './reducers/TodoReducers';
import TodoDispatchContext from './context/TodoDispatchContext';

// const {list, setList} = useContext(TodoContext);

function App() {
  // const [list, setList] = useState([
  //   { id: 1, todoData: "Learn React", isFinished: false },
  //   { id: 2, todoData: "Build a todo app", isFinished: false },
  // ]);

  const [list, dispatch] = useReducer(ToodReducers, [])
  

  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{dispatch}}>
        <AddTodo />
        <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;




