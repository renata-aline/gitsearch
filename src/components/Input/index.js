import React from "react";
import { useTheme } from "styled-components";

import * as S from "./style";

const Input = ({ ref, placeholder, handleKeyPress }) => {
  const theme = useTheme();
  return (
    <S.Input
      type="text"
      placeholder={placeholder}
      ref={ref}
      theme={theme}
      onKeyPress={handleKeyPress}
    />
  );
};

export default Input;
