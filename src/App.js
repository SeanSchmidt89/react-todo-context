import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SearchInput from "./components/SearchInput";
import SearchList from "./components/SearchList";
import { TodoProvider } from "./context/todo-context";
import Modal from "./modal/Modal";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Modal />
        <h1>Seans Todo App</h1>
        <div className="todoContainer">
          <div>
            <TodoForm />
            <TodoList />
          </div>
          <div>
            <SearchInput />
            <SearchList />
          </div>
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
