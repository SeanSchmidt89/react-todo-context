import React, { useContext } from "react";
import TodoContext from "../context/todo-context";

const SearchList = () => {
  const { filteredList } = useContext(TodoContext);
  return (
    <div>
      <h3>Todos:</h3>
      <hr/>
      {filteredList.map((todo) => (
        <p key={todo.id} className={todo.complete ? "complete" : ""}>
          {todo.title}
        </p>
      ))}
    </div>
  );
};

export default SearchList;
