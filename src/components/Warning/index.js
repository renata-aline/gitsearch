import React from "react";
import { useTheme } from "styled-components";
import * as S from "./style";

const Warning = ({ children }) => {
  const theme = useTheme();
  return (
    <S.Warning>
      <S.Text>{children}</S.Text>
    </S.Warning>
  );
};

export default Warning;
