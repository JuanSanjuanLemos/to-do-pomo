import styled from "styled-components";

export const Container = styled.header`
  max-width: 1440px;
  margin: auto;
  padding: 0 1rem;
  margin-bottom: 3rem;

  .content{
    max-width: 1180px;
    margin: auto;
    padding: 2rem 0;
  
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    .wrapper-user{
      display: flex;
      align-items: flex-end;
      gap: 1.6rem;

      img{
        height: 5rem;
        width: 5rem;
        border-radius: 50%;
        object-fit: cover;
      }
      h2{
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--title);
      }
    }

    .login{
      display: flex;
      align-items: center;
      gap: 1.6rem;

      background-color: #fff;
      padding: 0.625rem 1.625rem;
      border-radius: 1.4rem;
      
      span{
        font-size: 1.5rem;
        color: #2AA9E0;
      }

      h3{
        color: var(--title);
        font-size: 1rem;
        font-weight: 600;
      }
    }
  }
`;