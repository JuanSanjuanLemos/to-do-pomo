import styled from "styled-components";

export const Block = styled.div`
  width: 100%;
  max-width: 480px;
  height: 420px;

  padding: 1.875rem 2.5rem;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 0.75rem;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .tasks{
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    height: 250px;

    overflow-y: scroll;

  }

  .none-task{
    color:#c3c3c3;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    margin-top: 30%;
  }

  .wrapper-buttons{
    display: flex;
    justify-content: space-between;

    .list-actions{
      font-weight: 600;
      font-size: 1.2rem;
      color: #fff;
      min-width: 10rem;
      border-radius: 6px;
      background-color: var(--green);
      padding: 0.8rem 2rem;
  
      &.-clear{
        background-color: var(--red);
        &:disabled{
          filter: brightness(0.6);
          cursor: not-allowed;
        }
      }
    }
  }

`;
