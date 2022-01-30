import React from "react";

const TODOList = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.delete(props.id);
          }}
        />
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default TODOList;
