import { createContext, ReactNode, useContext, useState } from "react";

interface ModalProviderProps{
  children: ReactNode;
}

interface ModalContextData{
  isOpenModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleFormInModal: (form:string) => void;
  handleItemInEdit: (id:number) => void;
  formInModal: string;
  itemInEdit: number;
}

export const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export function ModalProvider({children}:ModalProviderProps){
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formInModal, setFormInModal] = useState('');
  const [itemInEdit, setItemInEdit] = useState(0);

  function handleFormInModal(form:string){
    setFormInModal(form)
  }

  function handleItemInEdit(id:number){
    setItemInEdit(id);
  }

  function handleOpenModal() {
    setIsOpenModal(true);
  }
  function handleCloseModal() {
    setIsOpenModal(false);
  }

  return(
    <ModalContext.Provider value={{isOpenModal, itemInEdit, handleOpenModal, handleCloseModal, handleFormInModal, formInModal, handleItemInEdit}}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal(){
  const context = useContext(ModalContext);
  return context;
}