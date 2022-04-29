import Image from "next/image";
import { Container } from "./styles";

export function Header(){
  return(
    <Container>
        <Image src="/images/to-do-pomo.svg" alt="Logo To do pomo" width={200} height={64} priority/>
    </Container>
  )
}