import styled from "styled-components";

export const SearchButton = styled.button.attrs({ className: "search-button" })`
  background-color: #005cff;
  box-sizing: border-box;
  border: 1 px solid #dddddd;
  width: 62px;
  height: 62px;

  border-radius: 10px;
  padding: 17px;
  color: white;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #00bfff;
  }

  svg {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
`;
