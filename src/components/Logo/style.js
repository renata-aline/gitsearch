import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-top: 30px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.h3}
  color: ${(props) => props.theme.colors.palette.secondary[100]};
  font-weight: 300;
  display: flex;
  gap: 8px;

  @media (min-width: 768px) {
    ${({ theme }) => theme.typography.h1}
  }

  span {
    font-weight: 800;
  }
`;
