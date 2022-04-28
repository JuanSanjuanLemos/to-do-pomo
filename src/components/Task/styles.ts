import styled from "styled-components";

export const Box = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0.5rem;

  padding: 1rem;
  margin-right: 0.5rem;

  background-color: ${(props) =>
    props["aria-checked"] ? "#97C160" : "#d9d9d9"};
    
  .actions {
    display: flex;
    gap: 1rem;
    button{
      height: 1.2rem;
      background-color: transparent;
      color: ${(props) => (props["aria-checked"] ? "#fff" : "#2E384D")};
      font-size: 1.2rem;
      &:hover{
        filter: brightness(0.8);
      }
    }
  }
`;

export const Checkbox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const Text = styled.label`
  color: ${(props) => (props["aria-checked"] ? "#fff" : "#2E384D")};

  cursor: pointer;
`;

export const StyledCheckbox = styled.label`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.8rem;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  img{
    display: ${(props) => (props["aria-checked"] ? "flex" : "none")};
    filter: invert(75%) sepia(11%) saturate(6042%) hue-rotate(30deg) brightness(105%) contrast(68%);
  }
`;
