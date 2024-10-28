import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();


// This file is everything for our TODO.
// Approx Every Funcionality is coded in this component.
// UUIDV4 is used for generating unique key for task IDs.
// addTodo task function
// editTodo task function
// toggleComplete function
// updateTodo function

export const TodoWrapperLocalStorage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
        createdAt: new Date().toISOString(), // Store current date and time
      },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
            updatedAt: new Date().toISOString(),
          } // Add updatedAt property
        : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            isEditing: !todo.isEditing,
            updatedAt: new Date().toISOString(),
          } // Add updatedAt property
        : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTask = (task, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            task,
            isEditing: !todo.isEditing,
            updatedAt: new Date().toISOString(),
          } // Add updatedAt property
        : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="TodoWrapper w-full max-w-[600px] mx-auto my-6 p-1 bg-white rounded-md shadow-black shadow-md ">
      <h1 className="text-lg font-bold pt-2 pb-2">Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      <h1 className="text-xl bg-slate-500 text-white pl-1 my-2">
        Pending Tasks:
      </h1>
      <div className="w-full flex flex-wrap justify-center">
        {todos
          .filter((todo) => !todo.completed)
          .map((todo, index) =>
            todo.isEditing ? (
              <EditTodoForm editTodo={editTask} task={todo} />
            ) : (
              <Todo
                task={todo}
                key={index}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                createdAt={todo.createdAt}
                updatedAt={todo.updatedAt}
              />
            )
          )}
      </div>
      <br />
      <div>
        <h1 className="text-xl bg-slate-500 text-white pl-1 my-2">
          Completed Tasks:
        </h1>
        <div className="flex flex-wrap justify-center">
          {todos
            .filter((todo) => todo.completed)
            .map((todo, index) =>
              todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo} />
              ) : (
                <Todo
                  task={todo}
                  key={index}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                  createdAt={todo.createdAt}
                  updatedAt={todo.updatedAt}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
};
