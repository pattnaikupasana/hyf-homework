import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import tasks from "./TaskArray";

const App = () => {
  return (
    <div>
      <TodoList tasks={tasks} />
    </div>
  );
};
export default App;
