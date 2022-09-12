import React, { useContext } from "react";
import ReactDom from "react-dom";
import TodoContext from "../context/todo-context";

const Modal = () => {
  const {
    openModal,
    setOpenModal,
    modalInputHandler,
    updateHandler,
    modalText,
  } = useContext(TodoContext);
  const modalHandler = () => {
    setOpenModal(false);
  };

  if (!openModal) return null;
  return ReactDom.createPortal(
    <div className="modalOverlay">
      <div className="container">
        <div className="spacer">
          <div className="row justify-content-center">
            <div className="col-sm-4">
              <h3>Edit Todo:</h3>
              <input
                onChange={modalInputHandler}
                value={modalText}
                type="text"
                className="modalInput"
              />
              <button onClick={updateHandler}>Update</button>
              <button onClick={modalHandler}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
