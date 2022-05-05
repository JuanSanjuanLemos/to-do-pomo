import styled from "styled-components";

export const Box = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 0.5rem;
  padding: 1rem;

  background-color: ${(props) =>
    props["aria-checked"] ? "#97C160" : "#d9d9d9"};
    
  .actions {
    display: flex;
    gap: 1rem;
    width: 20%;
    max-width: 3.4rem;

    button{
      height: 1.2rem;
      background-color: transparent;
      color: ${(props) => (props["aria-checked"] ? "#000" : "#2E384D")};
      font-size: 1.2rem;
      &:hover{
        filter: brightness(0.8);
      }
    }
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  width: 75%;

`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;

`;

export const Text = styled.label`
  color: ${(props) => (props["aria-checked"] ? "#000" : "#2E384D")};
  text-decoration: ${(props) => (props["aria-checked"] ? "line-through #000 2px" : "none")};

  text-overflow: ellipsis;
  overflow-x: auto;

  cursor: pointer;
`;

export const StyledCheckbox = styled.label`
  width: 100%;
  max-width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  .wrapper-img{
    display: ${(props) => (props["aria-checked"] ? "flex" : "none")};
    filter: invert(75%) sepia(11%) saturate(6042%) hue-rotate(30deg) brightness(105%) contrast(68%);
  }
`;
