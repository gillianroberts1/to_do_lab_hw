import './App.css';
import { useState } from 'react';

function App() {

  const [toDoList, setToDoList] = useState([
    { name: "Buy Shopping", isComplete: false, priority: "low" },
    { name: "Clean Bathroom", isComplete: false, priority: "high" },
    { name: "Cars MOT", isComplete: false, priority: "low" }
  ])

  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("")



  const taskNodes = toDoList.map((task, index) => <li key={index}
    className={task.priority}> {task.name}

    {task.isComplete ? (
      <span className="complete">Job Done!</span>

    ) : (<button onClick={() => completeTask(index)}>Completed?</button>

    )}
  </li>
  );





  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const handlePrioritySelect = (event) => {
    setPriority(event.target.value);
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const toDoListCopy = [...toDoList]

    const newToDo = ({ name: newTask, isComplete: false, priority: priority })
    toDoListCopy.push(newToDo)
    setToDoList(toDoListCopy)
    setNewTask("")
  }

  const completeTask = (index) => {
    const toDoListCopy = [...toDoList]
    toDoListCopy[index].isComplete = true
    setToDoList(toDoListCopy)
  }




  return (
    <>

      <h1>To Do List</h1>




      <form onSubmit={saveNewTask}>
        <label htmlFor="new-task"></label>
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput} />

        <label htmlFor="high">High</label>
        <input type="radio" id="high" value="high" checked={priority === "high"} onChange={handlePrioritySelect} />

        <label htmlFor="low">Low</label>
        <input type="radio" id="low" value="low" checked={priority === "low"} onChange={handlePrioritySelect} />
        <input type="submit" value='Save New Task' />

      </form>

      <ul>
        {taskNodes}
      </ul>


    </>
  );


}

export default App;
