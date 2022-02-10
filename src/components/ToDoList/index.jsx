export const ToDoList = ({rmTask,tasks}) => {

    return(
        <ul>
          {typeof tasks === 'object' && tasks.map((task,index)=>
            <li key={index}>
              <p>{task}</p>
              <button onClick={()=>rmTask(task)}> Finalizar Tarefa </button>
            </li>)}
          </ul>
    )
}