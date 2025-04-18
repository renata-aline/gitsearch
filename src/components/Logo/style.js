import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-top: 30px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #fff;
  font-weight: 300;
  display: flex;
  gap: 8px;

  @media (min-width: 768px) {
    font-size: 60px;
  }

  span {
    font-weight: 800;
  }
`;
