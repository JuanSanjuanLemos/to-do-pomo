import styled from "styled-components";

export const Container = styled.article`
  div {
    display: flex;
    flex: 1;
    font-size: 7.5rem;
    font-family: Rajdhani;
    color: var(--title);
    font-weight: 600;

    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    div {
      flex: 1;
      display: flex;
      justify-content: center;
      justify-content: space-evenly;
      background-color: #DCDDE0;
      text-align: center;
      span {
        flex: 1;
        &:first-child {
          border-right: 1px solid #fff;
        }
        &:last-child {
          border-left: 1px solid #fff;
        }
      }
    }
  }
`;
