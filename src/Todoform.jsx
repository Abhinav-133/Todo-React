import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

function Todoform({ addtodo }) {
  const [title, setTitle] = useState("");
  function handlesubmit(e) {
    e.preventDefault();
    if (title.trim().length !== 0) {
      const newtodo = {
        title: title,
        completed: false,
        id: uuid(),
      };
      addtodo(newtodo);
      setTitle("");
    }
    else{
      toast.info("Please Fill input", {
        autoClose: 2000,
    });

    }
  }

  return (
    <form onSubmit={handlesubmit} className="todoForm">
    <input
        className="todoForm__input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
    />
    <button type="submit" className="todoForm__btn">
        Add
    </button>
</form>
  );
}

export default Todoform;
