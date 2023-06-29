import React from "react";

function TodoItem(props) {
  return (
    <li>
      <h3>
        {props.todo}: {props.time}
      </h3>
    </li>
  );
}
export default TodoItem;
