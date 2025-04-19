import React from "react";
import { FaSearch } from "react-icons/fa";

import * as S from "./style";

const ButtonSearch = ({ handleClick = () => {} }) => {
  return (
    <S.SearchButton type="button" onClick={handleClick}>
      <FaSearch size={58} color="#fff" />
    </S.SearchButton>
  );
};

export default ButtonSearch;
