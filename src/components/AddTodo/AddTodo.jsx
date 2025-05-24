import {  useState } from "react";


function AddTodo({addTodo}) {
  const [input, setInput] = useState("");

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
          addTodo(input)
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
