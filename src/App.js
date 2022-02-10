import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Form } from './components/Form';
import { ToDoList } from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([])
  const [inputTask, setInputTask] = useState()

  const rmTask = (task) => {
    setTasks(tasks.filter((item)=> item !== task))
  }

  const addTask = (task) => {
    setTasks([...tasks,task])
  }
  console.log(typeof tasks)

  return (
    <div className="App">
      <header className="App-header">
        <Form inputTask={inputTask} setInputTask={setInputTask} addTask={addTask}/>
        <ToDoList rmTask={rmTask} tasks={tasks}/>
      </header>
    </div>
  );
}

export default App;
