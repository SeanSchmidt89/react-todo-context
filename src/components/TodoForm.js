import React, { useContext } from "react";
import TodoContext from "../context/todo-context";

const TodoForm = () => {
    const {inputText, inputHandler, todoFormHandler} = useContext(TodoContext);
  return (
    <div>
      <h2>-Add-</h2>
      <form onSubmit={todoFormHandler}>
        <input onChange={inputHandler} value={inputText} type="text" placeholder="add a todo"/>
        <button className="btn btn-outline-light btn-sm">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
