import Cookies from "js-cookie";
import { useEffect } from "react";
import { useModal } from "../../hooks/useModal";
import { useTaskList } from "../../hooks/useTasksList";
import { Task } from "../Task";
import { Block } from "./style";

export function BlockList() {
  const { list, setList, setListCookie } = useTaskList();
  const listStr = Cookies.get("list");

  useEffect(() => {
    if(listStr !== undefined && JSON.parse(listStr).length > 0 ){
      if(JSON.parse(listStr) !== list){
        setList(JSON.parse(listStr));
        console.log(list);
        setListCookie(JSON.parse(listStr))
      }
    }
  }, [listStr]);

  const { handleFormInModal, handleOpenModal } = useModal();
  return (
    <Block>
      <div className="tasks">
        {list.length > 0 ? (
          list.map((task) => {
            return <Task key={task.id} id={task.id} task={task.task} isComplete={task.isComplete} />;
          })
        ) : (
          <p className="none-task">Adicione uma tarefa</p>
        )}
      </div>

      <div className="wrapper-buttons">
        <button
          className="list-actions"
          onClick={() => {
            handleFormInModal("newTask");
            handleOpenModal();
          }}
        >
          Nova tarefa
        </button>

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
