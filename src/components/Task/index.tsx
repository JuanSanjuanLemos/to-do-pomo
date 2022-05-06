import Cookies from "js-cookie";
import Image from "next/image";
import { useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useModal } from "../../hooks/useModal";
import { useTaskList } from "../../hooks/useTasksList";
import { Box, Checkbox, HiddenCheckbox, StyledCheckbox, Text } from "./styles";

interface TaskProps {
  id: number;
  task: string;
  isComplete: boolean;
}

export function Task({ id, task, isComplete }: TaskProps) {
  const [isChecked, setIsChecked] = useState(isComplete);
  const { list, setList } = useTaskList();

  const { handleOpenModal, handleFormInModal, handleItemInEdit } = useModal();

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
    toggleStatus(isChecked)
  }

  function toggleStatus(isChecked:boolean){
    const taskToToogle = list.find(t => t.id === id);
    if(taskToToogle){
      taskToToogle.isComplete = !isChecked;

      Cookies.set('list',JSON.stringify(list))
    }
  }

  function handleDeleteTask() {
    const newList = list.filter((t) => t.id !== id);
    setList(newList);
    Cookies.set('list',JSON.stringify(newList));
  }
  return (
    <Box id={`${id}`} aria-checked={isChecked}>
      <Checkbox onClick={handleCheckboxChange}>
        <HiddenCheckbox
          onChange={handleCheckboxChange}
          aria-checked={isChecked}
        />
        <StyledCheckbox aria-checked={isChecked}>
          <div className="wrapper-img">
            <Image
              alt="chek icon"
              width={15}
              height={15}
              src="/images/check.png"
            />
          </div>
        </StyledCheckbox>
        <Text aria-checked={isChecked} className='text-task'> {task} </Text>
      </Checkbox>
      <div className="actions">
        <button onClick={handleDeleteTask}>
          <BsTrash />
        </button>
        <button>
          <BsPencil
            onClick={() => {
              handleItemInEdit(id);
              handleOpenModal();
              handleFormInModal("editTask");
            }}
          />
        </button>
      </div>
    </Box>
  );
}
