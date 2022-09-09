import React, {useContext} from "react";
import TodoContext from "../context/todo-context";


const SearchInput = ({}) => {
    const {searchInput} = useContext(TodoContext)
  return (
    <div>
      <h3>Search Input</h3>
      <input onChange={searchInput} type='search'/>
    </div>
  );
};

export default SearchInput;
