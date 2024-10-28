import React, { useState } from "react";
import plus from "../icons/plus.png";

// Todo's Main form for adding task in Local Storage.

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue("");
      setError("");
    } else {
      setError("Please enter a task.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="TodoForm flex justify-evenly max-w-[800px]"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input w-11/12 p-1 text-sm rounded-lg outline outline-1"
        placeholder="What is the task today?"
        aria-label="Task input"
      />
      <button type="submit" className="todo-btn mx-1">
        <img
          className="w-9 p-1 hover:cursor-pointer hover:scale-105"
          src={plus}
          alt="Add Task"
        />
      </button>
      {error && <p className="error-message text-red-700">{error}</p>}
    </form>
  );
};
