import { useTimer } from "../../hooks/useTimer"
import { Button } from "./style"

interface ButtonStartCicleProps{
  initalTime: number;
}

export function ButtonStartCicle({initalTime}:ButtonStartCicleProps){
  const {isActive,setIsActive, timeCurrent, setIsTimerOpen} = useTimer();
  return(
    isActive ? <Button onClick={()=>{setIsActive(false)}} className="-cancel">Cancelar ciclo</Button>
    : 
    (timeCurrent > 0 ? <Button onClick={()=>{setIsActive(true)}} className="">Iniciar ciclo</Button> 
    :
    <Button onClick={()=>{setIsTimerOpen(false)}} className="-new">Selecionar novo ciclo</Button>
    )
  )
}