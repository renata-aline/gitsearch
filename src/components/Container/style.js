import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("./assets/background.png") no-repeat center center;
  background-size: cover;
`;

export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1156px;
  min-height: 537px;
  background: #000;
  margin: 0 24px;
  padding: 24px;
`;
