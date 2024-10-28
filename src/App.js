import "./App.css";
import React, { useState } from "react";
import { TodoWrapperLocalStorage } from "./components/TodoWrapperLocalStorage";
import { Footer } from "./components/Footer";
import { Modal } from "./components/AboutModal";
import Information from "./icons/information.png";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full max-w-[1600px] mx-auto my-auto">
      <h1 className="text-white text-4xl font-bold text-center bg-gray-800 p-1 w-full">
        JUST DO IT
      </h1>
      <TodoWrapperLocalStorage />
      <div className="flex flex-wrap justify-end w-full max-w-[1200px] mx-auto">
        <button
          className="hover:rotate-6 fixed top-3/4 right-10"
          onClick={openModal}
        >
          <img src={Information} alt="About Todo" className="w-14" />
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <Footer />

    </div>
  );
}

export default App;
