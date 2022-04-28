import { FormEvent, useState } from "react";
import { useModal } from "../../hooks/useModal";
import { useTaskList } from "../../hooks/useTasksList";
import { Form } from "./style";

export function NewTaskForm(){
  const [task, setTask] = useState('');
  const {list, setList} = useTaskList();
  const {handleCloseModal} =useModal();
  
  function handleCreateNewTask(event: FormEvent){
    event.preventDefault();
    const newTask = {
      id: list.length + 1,
      task: task
    }
    
    setList([...list, newTask]);
    setTask('');
    
    handleCloseModal();
}
  return(
    <Form onSubmit={handleCreateNewTask}>
      <legend>Adicionar nova tarefa</legend>
      <div className="box-input">
        <label>
          Nova tarefa:
        </label>
        <input type='text' maxLength={30} placeholder='Máximo de 30 caracteres' value={task} onChange={event => setTask(event.target.value)} required />
      </div>

      <button type="submit">Adicionar Tarefa</button>
    </Form>
  )
}