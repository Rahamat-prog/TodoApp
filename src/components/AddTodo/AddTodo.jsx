import { useContext, useState } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function AddTodo() {
  const [input, setInput] = useState("");
  const {dispatch} = useContext(TodoDispatchContext)
  return (
    <div>
      <input
        type="text"
        placeholder="Add your next todo"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "add_todo", payload: { todoText: input } });
          setInput("");
        }}
        disabled={!input.trim()}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
