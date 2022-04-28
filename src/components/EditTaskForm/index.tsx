import { FormEvent, useState } from "react";
import { useModal } from "../../hooks/useModal";
import { useTaskList } from "../../hooks/useTasksList";
import { Form } from "./style";


export function EditTaskForm(){
  const [newTask, setNewTask] = useState('');
  const {list, setList} = useTaskList();
  const {handleCloseModal, itemInEdit} =useModal();

  function handleEditTask(event: FormEvent){
    event.preventDefault();
    
    list.map((task) => {
      if(task.id === itemInEdit){
        task.task = newTask;
      }
    });
    

    setNewTask('');
    handleCloseModal();
}
  return(
    <Form onSubmit={handleEditTask}>
      <legend>Editar tarefa</legend>
      <div className="box-input">
        <label>
          Nova tarefa:
        </label>
        <input type='text' maxLength={30} placeholder='Máximo de 30 caracteres' value={newTask} onChange={event => setNewTask(event.target.value)} required />
      </div>

      <button type="submit">Editar Tarefa</button>
    </Form>
  )
}