import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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
        <input
          placeholder='Escreva sua tarefa'
          value={inputTask}
          type="text"
          onChange={(event)=>setInputTask(event.target.value)}
          />
        <button onClick={()=>addTask(inputTask)}>Criar Tarefa</button>
        <ul>
          {typeof tasks === 'object' && tasks.map((task,index)=>
            <li key={index}>
              <p>{task}</p>
              <button onClick={()=>rmTask(task)}> Finalizar Tarefa </button>
            </li>)}
          </ul>
      </header>
    </div>
  );
}

export default App;
