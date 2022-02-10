export const Form = ({inputTask,setInputTask,addTask}) => {

    return(
        <>
          <input
            placeholder='Escreva sua tarefa'
            value={inputTask}
            type="text"
            onChange={(event)=>setInputTask(event.target.value)}
          />
          <button onClick={()=>addTask(inputTask)}>Criar Tarefa</button>
        </>
    )
}