import { useState } from "react";
function App() {
  const [task, setTask] = useState ("");      
  const [tasks, setTasks] = useState([]);   
  const addTask = () => {      
    setTasks([...tasks, task]);            
    setTask("");                             
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return (
    <div>
    <div style={{textAlign:"center"}}>
      <h1>To-Do List</h1>
      <input type="text" value={task} placeholder="Enter your task" onChange={(e) => setTask(e.target.value)}/>
      <button onClick={addTask}>Add</button>
      </div>
      <hr></hr>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;