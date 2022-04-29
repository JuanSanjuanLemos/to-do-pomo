import { Header } from "../components/Header";
import { MainSection } from "../components/MainSection";
import { TasksListProvider } from "../hooks/useTasksList";

import { useModal } from "../hooks/useModal";
import { NewTaskForm } from "../components/NewTaskForm";
import Modal from "react-modal";

import { IoCloseSharp } from "react-icons/io5";
import { EditTaskForm } from "../components/EditTaskForm";
import { TimerProvider } from "../hooks/useTimer";

export default function Home() {
  const { isOpenModal, handleCloseModal, formInModal } = useModal();
  return (
    <>
      <Header />
      <Modal
        isOpen={isOpenModal}
        onRequestClose={handleCloseModal}
        className="modal"
      >
        {formInModal === "newTask" ? <NewTaskForm /> : <EditTaskForm />}
        <button className="close-modal" onClick={handleCloseModal}>
          <IoCloseSharp />
        </button>
      </Modal>
      <TimerProvider>
        <MainSection />
      </TimerProvider>
    </>
  );
}
