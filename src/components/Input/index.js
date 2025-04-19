import React from "react";

import * as S from "./style";

const Input = ({ ref, placeholder }) => {
  return <S.Input type="text" placeholder={placeholder} ref={ref} />;
};

export default Input;
