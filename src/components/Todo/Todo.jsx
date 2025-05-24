import { useState } from "react";

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {


  const [isEditing, setEdiiting] = useState(false);
  const [editText, setEditText] = useState(todoData);
  return (
    <div>
      <input
        type="checkbox"
        checked={isFinished}
        onChange={(e) => {
          // setFinished(e.target.checked);
          changeFinished(e.target.checked);
          console.log("after click", e.target.checked);
          
        }}
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span>{todoData}</span>
      )}
      <button
        onClick={() => {
          if (isEditing) {
            onEdit(editText);
          }
          setEdiiting(!isEditing);
        }}
      >
        {!isEditing ? "Edit" : " Save"}
      </button>
      <button onClick={onDelete}>delete</button>
    </div>
  );
}

export default Todo;
