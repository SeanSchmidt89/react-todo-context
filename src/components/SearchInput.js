import React, { useContext } from "react";
import TodoContext from "../context/todo-context";

const SearchInput = ({}) => {
  const { filteredList, setFilteredList } = useContext(TodoContext);

  useEffect(() => {
    const searchHandler = (e) => {
      setFilteredList();
    };
  }, []);
  return (
    <div>
      <h3>Search Input</h3>
      <input onChange={searchHandler} type="search" />
    </div>
  );
};

export default SearchInput;
