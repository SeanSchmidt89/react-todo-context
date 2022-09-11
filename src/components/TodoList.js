import React, { useContext } from "react";
import Todo from "./Todo";
import TodoContext from "../context/todo-context";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <h3>Todos:</h3>
      <hr/>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
