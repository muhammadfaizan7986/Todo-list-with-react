import React, { useEffect, useState } from "react";
import "../App.css";

const setLocalStorage = () => {
  let item = localStorage.getItem("items");
  console.log(item);
  if (item) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
};
const Todo = () => {
  const [inputData, setInPutData] = useState("");
  const [items, setitems] = useState(setLocalStorage());
  const handleClick = () => {
    if (!inputData) {
    } else {
      setitems([...items, inputData]);
      setInPutData("");
    }
  };
  const handleRemove = () => {
    setitems([]);
  };
  const handleTodo = (id) => {
    const updateItems = items.filter((todo, index) => {
      return index !== id;
    });
    setitems(updateItems);
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <div className="container">
        <div className="add__todo">
          <label htmlFor="">Add your Todo</label>
          <div className="input__feild">
            <input
              type="text"
              placeholder="Add Todo..."
              value={inputData}
              onChange={(e) => setInPutData(e.target.value)}
            />
            <i
              onClick={handleClick}
              className="bi bi-plus-lg"
              title="Add item"
            ></i>
            <button onClick={handleRemove} className="btn">
              Remove All
            </button>
          </div>
        </div>
      </div>
      {items.map((todo, index) => {
        return (
          <div className="show__items" key={index}>
            <h3>{todo}</h3>
            <i
              onClick={() => handleTodo(index)}
              className="bi bi-trash"
              title="Delete todo"
            ></i>
          </div>
        );
      })}
    </>
  );
};

export default Todo;
