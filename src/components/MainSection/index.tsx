import { IoMdArrowRoundBack } from "react-icons/io";
import { useTimer } from "../../hooks/useTimer";
import { Block } from "../Block";
import { BlockList } from "../BlockList";
import { ButtonStartCicle } from "../ButtonStartCicle";
import { Timer } from "../Timer";
import { Section } from "./style";

export function MainSection() {
  const {
    setTimeCurrent,
    setIsTimerOpen,
    isTimerOpen,
    setInitalTime,
  } = useTimer();
  function handleOpenTimer(time: number) {
    setInitalTime(time);
    setTimeCurrent(time);
    setIsTimerOpen(true);
  }
  return (
    <Section>
      <div className="content">
        <Block>
          {!isTimerOpen ? (
            <div className="content">
              <button
                className="start-period"
                onClick={() => handleOpenTimer(1500)}
              >
                Ciclo de estudo
              </button>
              <button
                className="start-period"
                onClick={() => handleOpenTimer(5)}
              >
                Pausa curta
              </button>
              <button
                className="start-period"
                onClick={() => handleOpenTimer(900)}
              >
                Pausa longa
              </button>
            </div>
          ) : (
            <>
              <button className="arrow-back" onClick={()=>setIsTimerOpen(false)}>
                <IoMdArrowRoundBack />
              </button>
              <div className="content">
                <Timer />
                <ButtonStartCicle />
              </div>
            </>
          )}
        </Block>

        <BlockList />
      </div>
    </Section>
  );
}
