import { useModal } from "../../hooks/useModal";
import { useTaskList } from "../../hooks/useTasksList";
import { NewTaskForm } from "../NewTaskForm";
import { Task } from "../Task";
import { Block } from "./style";

export function BlockList() {
  const {list, setList} = useTaskList();
  const {handleFormInModal, handleOpenModal} = useModal();
  return (
    <Block>
      <div className="tasks">
        {list.length > 0 ? (
          list.map((task) => {
            return <Task key={task.id} id={task.id} task={task.task} />;
          })
        ) : (
          <p className="none-task">Adicione uma tarefa</p>
        )}
      </div>

      <div className="wrapper-buttons">
        <button className="list-actions" onClick={()=> {
          handleFormInModal('newTask')
          handleOpenModal()
          }}>Nova tarefa</button>

        <button
          className="list-actions -clear"
          onClick={() => setList([])}
          disabled={list.length === 0 && true}
        >
          Limpar lista
        </button>

      </div>
    </Block>
  );
}
