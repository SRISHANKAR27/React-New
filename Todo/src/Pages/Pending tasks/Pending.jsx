import React, { useState } from "react";
import Navbar from "../../Components/Nav bar/Navbar";

function Pending() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  return (
    <>
      <Navbar />
      <div className="pending-container">
        <h2>Pending Tasks</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add</button>

        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              onClick={() => toggleTask(index)}
              className={task.completed ? "completed" : ""}
            >
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Pending;
