import React, { useContext } from "react";
import TodoContext from "../context/todo-context";

const SearchInput = () => {
  const { searchHandler } = useContext(TodoContext);
  return (
    <div>
      <h2>-Search-</h2>
      <input onChange={searchHandler} type="search" placeholder="find a todo"/>
    </div>
  );
};

export default SearchInput;
