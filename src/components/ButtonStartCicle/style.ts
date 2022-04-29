import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--green);
    height: 4rem;

    font-weight: 600;
    font-size: 1.2rem;
    color: #fff;
    border-radius: 6px;

    transition: all 0.15s linear;

    &:hover{
      filter: brightness(0.8);
      transform: scale(1.01);
    }

    &.-cancel{
      background-color: var(--red);
    }
    &.-new{
      background-color: var(--blue);
    }
`;