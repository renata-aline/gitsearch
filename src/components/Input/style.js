import styled from "styled-components";

export const Input = styled.input.attrs({ className: "textfield" })`
  ${({ theme }) => theme.typography.body1}
  background-color: ${({ theme }) => theme.colors.palette.secondary[100]};
  color: ${({ theme }) => theme.colors.palette.primary[900]};
  border-radius: 10px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.palette.fourthy[300]};
  width: 100%;
  min-height: 62px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.palette.primary[600]};
  }

  @media (max-width: 768px) {
    ${({ theme }) => theme.typography.body2}
  }
`;
