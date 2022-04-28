import styled from "styled-components";

export const Section = styled.section`
  max-width: 1440px;
  margin: auto;
  padding: 0 1rem;

  .content {
    max-width: 1160px;
    margin: auto;

    display: flex;
    justify-content: space-between;

    .start-period {
      background-color: var(--blue);
      width: 100%;
      height: 100px;
      border-radius: 0.75rem;
      text-align: center;
      color: #fff;
      font-size: 1.5rem;

      transition: all 0.2s linear;

      &:hover {
        filter: brightness(0.8);
        transform: scale(1.01);
      }
    }
  }
`;
