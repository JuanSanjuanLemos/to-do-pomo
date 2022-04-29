import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

import Cookies from 'js-cookie';

interface TasksListProviderProps{
  children: ReactNode;
}

interface Task {
  id: number;
  task: string;
}

interface TasksListContextData{
  list: Task[];
  setList: React.Dispatch<SetStateAction<Task[]>>;
}

export const TasksListContext = createContext<TasksListContextData>({} as TasksListContextData);

export function TasksListProvider({children}:TasksListProviderProps){
  const [list, setList] = useState<Task[]>([]);

  useEffect(() => {
    if(list !== []){
      Cookies.set('list',JSON.stringify(list));
    }
  },[list]);

  return(
    <TasksListContext.Provider value={{list , setList}}>
      {children}
    </TasksListContext.Provider>
  )
}

export function useTaskList(){
  const context = useContext(TasksListContext);
  return context;
}
