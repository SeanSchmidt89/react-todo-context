import React, { useContext } from "react";
import TodoContext from "../context/todo-context";

const TodoForm = () => {
    const {inputText, inputHandler, todoFormHandler} = useContext(TodoContext);
  return (
    <div>
      <h3>Todo Form</h3>
      <form onSubmit={todoFormHandler}>
        <input onChange={inputHandler} value={inputText} type="text" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
