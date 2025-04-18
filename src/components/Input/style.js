import styled from "styled-components";

export const Input = styled.input.attrs({ className: "textfield" })`
  background-color: #fff;
  color: #000;
  font-size: 20px;
  border-radius: 10px;
  padding: 8px;
  border: 1px solid #dddddd;
  width: 100%;
  min-height: 62px;
  outline: none;

  &::placeholder {
    color: #000;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
