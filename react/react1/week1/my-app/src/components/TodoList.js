import React from "react";
import TodoItem from "./TaskItemDetails.js";

function TodoList(props) {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {props.tasks.map((task) => {
          return <TodoItem todo={task.todo} time={task.time} key={task.id} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
