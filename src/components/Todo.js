import React, { useContext } from "react";
import TodoContext from "../context/todo-context";

const Todo = ({ todo, title }) => {
  const { todos, setTodos, setOpenModal, setUpdateTodoId } =
    useContext(TodoContext);

  const todoDeleteHandler = () => {
    const deleteList = todos.filter((item) => item.id !== todo.id);
    setTodos(deleteList);
  };

  const completeHandler = () => {
    const completeList = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTodos(completeList);
  };

  const modalHandler = () => {
    setOpenModal(true);
    setUpdateTodoId(todo.id);
  };

  return (
    <div>
      <p className={todo.complete ? "complete" : ""}>
        {todo.title}
          <button onClick={completeHandler} className="btn btn-outline-light btn-sm">✔</button>
          <button onClick={modalHandler} className="btn btn-outline-light btn-sm">Edit</button>
          <button onClick={todoDeleteHandler} className="btn btn-outline-light btn-sm">Delete</button>
      </p>
    </div>
  );
};

export default Todo;
