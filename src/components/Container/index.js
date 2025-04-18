import * as S from "./style";

import React from "react";

const Container = ({ children }) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Container;
