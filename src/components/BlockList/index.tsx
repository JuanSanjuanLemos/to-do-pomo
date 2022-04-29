import Cookies from "js-cookie";
import { useEffect } from "react";
import { useModal } from "../../hooks/useModal";
import { useTaskList } from "../../hooks/useTasksList";
import { Task } from "../Task";
import { Block } from "./style";

export function BlockList() {
  const {list, setList} = useTaskList();
  useEffect(()=>{
    const listStr = Cookies.get('list');
    if(listStr){
      setList(JSON.parse(listStr));
    }
  },[])
  // const listCookies = JSON.parse(Cookies.get('list'));
  // listCookies && setList(JSON.parse(listCookies));
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
