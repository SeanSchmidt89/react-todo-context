import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/todo-context";
import Modal from "./modal/Modal";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Modal />
        <h1>Seans Todo App</h1>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
