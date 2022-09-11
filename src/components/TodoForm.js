import React, { useContext } from "react";
import TodoContext from "../context/todo-context";
import { BsPlusSquareFill } from "react-icons/bs";

const TodoForm = () => {
    const {inputText, inputHandler, todoFormHandler} = useContext(TodoContext);
  return (
    <div>
      <h2>-Add-</h2>
      <form onSubmit={todoFormHandler}>
        <input onChange={inputHandler} value={inputText} type="text" />
        <button className="addButton"><BsPlusSquareFill/></button>
      </form>
    </div>
  );
};

export default TodoForm;
