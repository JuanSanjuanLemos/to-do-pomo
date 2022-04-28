import { Container } from "./styles";

import { BsTwitter } from "react-icons/bs"

export function Header(){
  return(
    <Container>
      <div className="content">
        <div className="wrapper-user">
          <img src="/images/foto.png" />
          <h2>Juan Lemos</h2>
        </div>

        <div className="login">
          <span>
            <BsTwitter />
          </span>
          <h3>
            Conectar Twitter
          </h3>
        </div>
      </div>
    </Container>
  )
}