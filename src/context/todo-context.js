import React, { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [updateTodoId, setUpdateTodoId] = useState(null);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const todoFormHandler = (e) => {
    e.preventDefault();
    const todo = {
      id: Math.floor(Math.random() * 10000),
      title: inputText,
      complete: false,
    };
    setTodos((prevList) => [...prevList, todo]);
    setInputText("");
    console.log(todos);
  };

  const updateHandler = () => {
    const updatedList = todos.map((todo) => {
      if (todo.id === updateTodoId) {
        return { ...todo, title: inputText };
      }
      return todo;
    });
    setTodos(updatedList);
    setInputText("");
    setUpdateTodoId(null);
    setOpenModal(false);
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        openModal,
        setOpenModal,
        setTodos,
        inputText,
        inputHandler,
        todoFormHandler,
        updateTodoId,
        setUpdateTodoId,
        updateHandler,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
