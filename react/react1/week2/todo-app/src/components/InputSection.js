import React, { useState } from "react";

function InputSection(props) {
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random(),
      description: description,
      done: false,
      time: time,
    };
    console.log(newItem);
    props.addTodoItem(newItem);
    setDescription("");
    setTime("");
  };

  const addTodoStyle = {
    position: "fixed",
    bottom: 10,
    display: "block",
    width: "100%",
  };

  return (
    <div style={addTodoStyle}>
      <form className="form-group">
        <input
          type="text"
          placeholder="Enter the task"
          className="form-control"
          value={description}
          onChange={handleChangeDescription}
        />
        <input
          type="text"
          placeholder="Enter the time"
          className="Todo-form"
          value={time}
          onChange={handleChangeTime}
          required
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
    </div>
  );
}

export default InputSection;
