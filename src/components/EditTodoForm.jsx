import React, { useState } from "react";
import update from "../icons/update.png";

// Todo form editing Page for updating task
export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    editTodo(value, task.id);
  };
  return (
    // Todo form
    <form
      onSubmit={handleSubmit}
      className="TodoForm flex justify-evenly max-w-[800px] m-2"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input w-11/12 p-1 text-sm rounded-lg outline outline-2"
        placeholder="Update task"
      />
      {/* Todo updating button */}
      <button type="submit" className="todo-btn mx-1 hover:scale-105">
        <img className="w-10" src={update} alt="Update task" />
      </button>
    </form>
  );
};
