import { useEffect, useState } from "react";
import { useTimer } from "../../hooks/useTimer";
import { Container } from "./style";

interface TimerProps {
  time: number;
}

export function Timer({ time }: TimerProps) {
  const {
    setTimeCurrent,
    timeCurrent,
    setIsActive,
    isActive,
    minuteLeft,
    minuteRight,
    secondLeft,
    secondRight,
    initalTime,
    setInitalTime
  } = useTimer();

  useEffect(() => {
    if(isActive && timeCurrent> 0){
      setTimeout(()=>{
        setTimeCurrent(timeCurrent - 1);
      },1000)
    }else if(isActive && timeCurrent === 0){
      setIsActive(false);
      setInitalTime(0);

    }else{
      setTimeCurrent(initalTime);
      setIsActive(false);
    }
  }, [timeCurrent, isActive]);

  return (
    <Container>
      <div>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
    </Container>
  );
}
