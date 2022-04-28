import { useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useModal } from "../../hooks/useModal";
import { useTaskList } from "../../hooks/useTasksList";
import { Box, Checkbox, HiddenCheckbox, StyledCheckbox, Text } from "./styles";

interface TaskProps {
  id: number;
  task: string;
}

export function Task({ id, task }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);
  const {list, setList} = useTaskList();

  const {handleOpenModal, handleFormInModal, handleItemInEdit} = useModal();

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  function handleDeleteTask(){
    const newList = list.filter((task)=> task.id !== id);
    setList(newList);
  }
  return (
    <Box id={`${id}`} aria-checked={isChecked} >
      <Checkbox onClick={handleCheckboxChange}>
        <HiddenCheckbox
        onChange={handleCheckboxChange}
        aria-checked={isChecked} />
        <StyledCheckbox aria-checked={isChecked}>
        <img
              alt="chek icon"
              style={{width: '15px'}}
              src='/images/check.png'
          />
        </StyledCheckbox>
        <Text aria-checked={isChecked}> {task} </Text>
      </Checkbox>
      <div className="actions">
        <button onClick={handleDeleteTask}>
          <BsTrash />
        </button>
        <button>
          <BsPencil onClick={()=>{
            handleItemInEdit(id)
            handleOpenModal()
            handleFormInModal('editTask')
          }} />
        </button>
      </div>
    </ Box>
  );
}