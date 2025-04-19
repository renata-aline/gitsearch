import styled from "styled-components";

export const SearchButton = styled.button.attrs({ className: "search-button" })`
  background-color: ${({ theme }) => theme.colors.palette.thirdy[500]};
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.palette.fourthy[300]};
  width: 62px;
  height: 62px;

  border-radius: 10px;
  padding: 17px;
  color: ${({ theme }) => theme.colors.palette.secondary[100]};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.palette.thirdy[400]};
  }

  svg {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
`;
