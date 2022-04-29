import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  height: 420px;
  padding: 1.875rem 2.5rem;
  background-color: #fff;

  border-radius: 0.75rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
    flex-direction: column;
    justify-content: space-between;

  .arrow-back {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    height: 2rem;
    width: 2rem;
    background-color: transparent;
    &:hover{
      cursor: pointer;
    }
  }
  .content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
