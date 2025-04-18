import React from "react";
import * as S from "./style";

const Warning = ({ children }) => {
  return (
    <S.Warning>
      <S.Text>{children}</S.Text>
    </S.Warning>
  );
};

export default Warning;
