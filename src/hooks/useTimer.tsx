import { SetStateAction, useContext } from "react";
import { createContext, ReactNode, useEffect, useState } from "react";

interface TimeProviderProps{
  children: ReactNode;
}

interface TimerContextData{
  setTimeCurrent: React.Dispatch<SetStateAction<number>>;
  setIsActive: React.Dispatch<SetStateAction<boolean>>;
  setIsTimerOpen:  React.Dispatch<SetStateAction<boolean>>;
  isTimerOpen: boolean;
  timeCurrent: number;
  isActive: boolean;
  minuteLeft: string;
  minuteRight: string;
  secondLeft: string;
  secondRight: string;
  initalTime: number;
  setInitalTime: React.Dispatch<SetStateAction<number>>;
}

export const TimerContext = createContext<TimerContextData>({} as TimerContextData);

export function TimerProvider({children}:TimeProviderProps){
  const [timeCurrent, setTimeCurrent] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [initalTime, setInitalTime] = useState(timeCurrent);


  const minutes = Math.floor(timeCurrent / 60);
  const seconds = timeCurrent%60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return(
    <TimerContext.Provider value={{initalTime, setInitalTime, setTimeCurrent, setIsTimerOpen,timeCurrent, isTimerOpen, setIsActive, isActive, minuteLeft, minuteRight, secondLeft,secondRight}}>
      {children}
    </TimerContext.Provider>
  )
}

export function useTimer(){
  const context = useContext(TimerContext);
  return context; 
}