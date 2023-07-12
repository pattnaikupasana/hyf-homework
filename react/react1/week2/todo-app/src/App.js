import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import InputSection from "./components/InputSection";
import dataArray from "./components/ArrayData";
import Counter from "./components/Counter";

function App() {
  const [data, setData] = useState(dataArray);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleComplete = (id) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const addTodoItem = (newItem) => {
    if (newItem.description.trim() !== "") {
      setData([...data, newItem]);
    }
  };

  return (
    <div>
      <Header />
      <TodoList
        dataArray={data}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
      <p>
        You have used <Counter /> seconds on this website
      </p>
      <InputSection addTodoItem={addTodoItem} />
    </div>
  );
}

export default App;
