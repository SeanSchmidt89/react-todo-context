import React, { useContext } from "react";
import ReactDom from "react-dom";
import TodoContext from "../context/todo-context";

const Modal = () => {
  const { openModal, setOpenModal, inputHandler, updateHandler, inputText } = useContext(TodoContext);
  const modalHandler = () => {
    setOpenModal(false);
  };

  if (!openModal) return null;
  return ReactDom.createPortal(
    <div className="modalOverlay">
      <div className="modalContainer">
        <h3>Edit Todo:</h3>
        <input onChange={inputHandler} value={inputText} type='text'/>
        <button onClick={updateHandler}>Update</button>
        <button onClick={modalHandler}>Cancel</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
