import styled from "styled-components";

export const Warning = styled.div.attrs({ className: "warning" })`
  box-sizing: border-box;
  margin: 20px auto;
  width: 100%;
  max-width: 800px;
  padding: 18px;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
`;

export const Text = styled.p.attrs({ className: "warning_text" })`
  color: #ff0000;
`;
