import React from 'react'
import { MdDelete } from "react-icons/md";

function Todo1({id,title,completed,toggleCompleted,removeTodo}) {
  return (
    <div className="todo">
    <div className="todo-title">
        <input
            type="checkbox"
            checked={completed}
            onChange={() => {
                toggleCompleted(id);
            }}
        />
        <p className={`${completed ? "completed" : ""}`}>{title}</p>
    </div>
    <div className="cross-btn" onClick={() => removeTodo(id)}>
    <MdDelete />
    </div>
</div>
  )
}

export default Todo1
