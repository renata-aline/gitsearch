import React from "react";
import { useTheme } from "styled-components";
import * as S from "./style";

const Warning = ({ children }) => {
  const theme = useTheme();
  return (
    <S.Warning theme={theme}>
      <S.Text theme={theme}>{children}</S.Text>
    </S.Warning>
  );
};

export default Warning;
