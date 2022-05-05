import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

import Cookies from 'js-cookie';

interface TasksListProviderProps{
  children: ReactNode;
}

interface Task {
  id: number;
  task: string;
  isComplete: boolean;
}

interface TasksListContextData{
  list: Task[];
  setList: React.Dispatch<SetStateAction<Task[]>>;
  setListCookie: React.Dispatch<SetStateAction<Task[]>>;
}

export const TasksListContext = createContext<TasksListContextData>({} as TasksListContextData);

export function TasksListProvider({children}:TasksListProviderProps){
  const [list, setList] = useState<Task[]>([]);
  const [listCookie, setListCookie] = useState<Task[]>([]);
  const listStr = Cookies.get("list");

  useEffect(() => {
    if (listStr){
      if(list.length>0 && list !== listCookie){
        setListCookie(JSON.parse(listStr));
        Cookies.set('list',JSON.stringify(list));
      }
    }
  },[list]);

  return(
    <TasksListContext.Provider value={{list , setList, setListCookie}}>
      {children}
    </TasksListContext.Provider>
  )
}

export function useTaskList(){
  const context = useContext(TasksListContext);
  return context;
}
