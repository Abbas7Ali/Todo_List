import React from "react";
import trash from "../icons/trash.png";
import edit from "../icons/note.png";
import complete from "../icons/completed.png";

// Todo Component with it's props getting from local storage.

export const Todo = ({
  task,
  deleteTodo,
  editTodo,
  toggleComplete,
  createdAt,
  updatedAt,
}) => {
  return (
    <div className="Todo flex flex-wrap w-64 h-fit p-2 m-2 bg-slate-700 rounded-l shadow-black shadow-sm">
      <div className="text-white text-lg ">
        <p className={`${task.completed ? "completed" : "incompleted"}`}>
          {task.task}
        </p>
      </div>
      <hr className="w-full border " />
      <div className="w-fit flex flex-wrap rounded-lg px-2 my-1 mx-auto bg-slate-500">
        <span
          className="edit-icon ml-1 hover:cursor-pointer hover:scale-105"
          onClick={() => editTodo(task.id)}
        >
          <img className="w-8 p-1" src={edit} alt="Edit Task" />
        </span>
        <span
          className="delete-icon ml-1 hover:cursor-pointer hover:scale-105"
          onClick={() => toggleComplete(task.id)}
        >
          <img className="w-8 p-1" src={complete} alt="Add to Complete" />
        </span>
        <span
          className="delete-icon ml-1 mr-1 hover:cursor-pointer hover:scale-105"
          onClick={() => deleteTodo(task.id)}
        >
          <img className="w-8 p-1" src={trash} alt="Delete Task" />
        </span>
      </div>
      <p className="text-xs text-yellow-100">
        {task.updatedAt
          ? `Updated At: ${new Date(task.updatedAt).toLocaleString()}`
          : `Created At: ${new Date(task.createdAt).toLocaleString()}`}
      </p>
    </div>
  );
};
