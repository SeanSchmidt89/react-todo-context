import React, { useContext } from "react";
import TodoContext from "../context/todo-context";

const Todo = ({ todo }) => {
  const { todos, setTodos, setOpenModal, setUpdateTodoId } = useContext(TodoContext);

  const todoDeleteHandler = (e) => {
    const deleteList = todos.filter((item) => {
      if (item.id !== todo.id) {
        return item;
      }
    });
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
    setUpdateTodoId(todo.id)
  };
  
  return (
    <div>
      <li className={todo.complete ? "complete" : ""}>
        Title: {todo.title}
        <button onClick={completeHandler}>✔</button>
        <button onClick={todoDeleteHandler}>Delete</button>
        <button onClick={modalHandler}>Edit</button>
      </li>
    </div>
  );
};

export default Todo;
