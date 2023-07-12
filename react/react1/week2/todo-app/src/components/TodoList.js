import React from "react";
import ListItem from "./ListItem";

function TodoList(props) {
  const { dataArray, handleDelete, handleComplete } = props;

  return (
    <div>
      <ul>
        {dataArray.map((input) => (
          <li
            style={{
              display: "flex",
              textDecoration: input.completed ? "line-through" : "none",
              color: input.completed ? "gray" : "inherit",
            }}
            key={input.id}
          >
            <ListItem
              description={input.description}
              time={input.time}
              completed={input.completed}
              key={input.id}
            />
            <input type="checkbox" onClick={() => handleComplete(input.id)} />
            <span
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(input.id)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
