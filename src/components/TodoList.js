import React, { useContext } from "react";
import Todo from "./Todo";
import TodoContext from "../context/todo-context";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
