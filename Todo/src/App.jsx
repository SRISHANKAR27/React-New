import React, { useState } from "react";
import MainRouter from "./MainRouter/MainRouter"; 

import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>To-Do List</h1>
        <input
          type="text"
          value={task}
          placeholder="Enter your task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <hr />

      <ul style={{ textAlign: "center", listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {task}
            <button
              style={{
                marginLeft: "10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "4px 8px",
                cursor: "pointer",
              }}
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <hr style={{ margin: "30px 0" }} />

    
      <MainRouter />
    </>
  );
}

export default App;
