import React from "react";
import "./inputbar.css";

const Inputbar = (props) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="input-bar"
        placeholder="type your todo"
        value={props.detail}
        onChange={(e) => {
          console.log(e.target.value);
          props.setDetail(e.target.value);
        }}
      />
      <button
        className="add"
        onClick={() => {
          let tempArray = [...props.todos];
          let newArray = tempArray.concat(props.detail);
          props.setTodos(newArray);
          props.setDetail("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default Inputbar;
