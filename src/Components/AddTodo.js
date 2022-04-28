import React, { useState } from "react";
import "./AddTodo.css";
const TodoInput = (props) => {
  const [enterValue, setEnterValue] = useState(" ");

  const TodoInputChangeHandler = (event) => {
    setEnterValue(event.target.value);
  };

  const formAddHandler = (event) => {
    event.preventDefault() 

    props.onAddTodo(enterValue);
    setEnterValue("")
  };
  //   };

  return (
    <form onSubmit={formAddHandler}>
      <div className="Structure-Input">
        <input
          placeholder="Add Your Todo Here"
          className="Main-Input"
          type="text"
          value={enterValue}
          onChange={TodoInputChangeHandler}
        ></input>
      </div>
      <button className="Structure-Button" type="submit">
        Add-Todo
      </button>
    </form>
  );
};

export default TodoInput;
