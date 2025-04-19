import React from "react";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "styled-components";

import * as S from "./style";

const ButtonSearch = ({ handleClick = () => {} }) => {
  const theme = useTheme();

  return (
    <S.SearchButton type="button" onClick={handleClick} theme={theme}>
      <FaSearch size={58} color={theme.colors.palette.secondary} />
    </S.SearchButton>
  );
};

export default ButtonSearch;
