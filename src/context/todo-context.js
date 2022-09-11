import React, { createContext, useState, useEffect } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [modalText, setModalText] = useState("");
  const [todos, setTodos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [updateTodoId, setUpdateTodoId] = useState(null);
  const [searchText, setSearchText] = useState(null);
  const [filteredList, setFilteredList] = useState([]);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const modalInputHandler = (e) => {
    setModalText(e.target.value);
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
        return { ...todo, title: modalText };
      }
      return todo;
    });
    setTodos(updatedList);
    setModalText("");
    setUpdateTodoId(null);
    setOpenModal(false);
  };

  useEffect(() => {
    const newFilteredList = todos.filter((todo) => {
      return todo.title.toLowerCase().includes(searchText);
    });
    setFilteredList(newFilteredList);
  }, [todos, searchText]);

  const searchHandler = (e) => {
    if (e.target.value === "") {
      setSearchText(null);
    } else {
      setSearchText(e.target.value.toLowerCase());
    }
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
        filteredList,
        searchHandler,
        modalInputHandler,
        modalText
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
