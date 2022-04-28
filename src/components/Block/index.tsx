import { ReactNode } from "react";
import { Container } from "./style";

interface BlockProps{
  children: ReactNode;
}

export function Block({children}: BlockProps){
  return(
    <Container>
      {children}
    </Container>
  )
}