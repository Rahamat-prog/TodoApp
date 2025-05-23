import { useState } from "react";

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {

  // const [finished, setFinished] = useState(isFinished);
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
