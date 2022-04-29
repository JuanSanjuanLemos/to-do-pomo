import { useTimer } from "../../hooks/useTimer"
import { Button } from "./style"

export function ButtonStartCicle(){
  const {isActive,setIsActive, timeCurrent, setIsTimerOpen} = useTimer();
  return(
    isActive ? <Button onClick={()=>{setIsActive(false)}} className="-cancel">Reiniciar ciclo</Button>
    : 
    (timeCurrent > 0 ? <Button onClick={()=>{setIsActive(true)}} className="">Iniciar ciclo</Button> 
    :
    <Button onClick={()=>{setIsTimerOpen(false)}} className="-new">Selecionar novo ciclo</Button>
    )
  )
}