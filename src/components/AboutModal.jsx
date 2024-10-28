// About the Todo Page
import React from "react";

export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 modal-content">
      <div className="rounded-lg shadow-lg max-w-[800px] w-full text-white">
        <div className="bg-gray-700 w-full p-3 max-w-[800] mx-auto my-auto">
          <button
            onClick={onClose}
            className="p-2 text-red-600 font-bold bg-none outline-none relative float-right text-2xl ml-5 hover:text-white"
          >
            X
          </button>
          <h1 className="text-4xl font-bold text-center mb-2 text-gray-200">
            Simple. Effective. Todo List.
          </h1>
          <h1 className="text-xl text-gray-200">
            Organize your day, effortlessly.
          </h1>
          <p className="text-sm bg-indigo-700 p-2">
            Organize your tasks with ease. Clean design, intuitive interface.
            Boost productivity, reduce stress. Elevate your productivity with
            our clean, intuitive, and user-friendly Todo List. Designed to make
            task management a breeze, our simple yet powerful tool helps you
            stay focused and on track.
          </p>

          <ul className="list-decimal list-inside">
            <p className="text-3xl font-bold text-gray-200">Key Features:</p>
            <li>Easy task addition and editing</li>
            <li>Clear categorization and prioritization</li>
            <li>Seamless task completion tracking</li>
            <li>Uncluttered and visually appealing interface</li>
          </ul>
          <ul className="list-decimal list-inside">
            <p className="text-3xl font-bold text-gray-200">Key Benefits:</p>
            <li>Boost productivity and efficiency</li>
            <li>Reduce stress and mental clutter</li>
            <li>Enhance organization and clarity</li>
            <li>Accessible anywhere, anytime</li>
          </ul>

          <div>
            <h1 className="text-center text-2xl text-gray-400 font-bold">
              Start streamlining your tasks today! Try it now and experience the
              simplicity of our Todo List.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
