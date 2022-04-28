import styled from "styled-components";

export const Form = styled.form`
  legend{
    font-size: 2rem;
    color: var(--title);
    text-align: center;

    margin-bottom: 2rem;
  }

  .box-input{
    display: flex;
    flex-direction: column;
    label{
      font-size: 1.2rem;
      margin-bottom: 4px;
    }
    input{
      border: 1px solid #c3c3c3;
      padding: 1rem;
      border-radius: 0.5rem;
      &::placeholder{
        padding-left: 0.5rem;
      }
    }
  }
  button{
    width: 100%;
    margin-top: 2rem;
    text-align: center;
    background-color: var(--green);
    border-radius: 0.5rem;
    padding: 1rem ;

    color: #fff;
    font-weight: 500;
    font-size: 1.2rem;

    &:hover{
      filter: brightness(0.8);
    }
  }
`;