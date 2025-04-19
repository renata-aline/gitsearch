import styled from "styled-components";

export const Warning = styled.div.attrs({ className: "warning" })`
  box-sizing: border-box;
  margin: 20px auto;
  width: 100%;
  max-width: 800px;
  padding: 18px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.palette.secondary[100]};
  text-align: center;
`;

export const Text = styled.p.attrs({ className: "warning_text" })`
  color: ${({ theme }) => theme.colors.palette.fifth[400]};
`;
