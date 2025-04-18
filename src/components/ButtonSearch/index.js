import React from "react";
import { FaSearch } from "react-icons/fa";

import * as S from "./style";

const ButtonSearch = () => {
  return (
    <div>
      <S.SearchButton>
        <FaSearch size={58} color="#fff" />
      </S.SearchButton>
    </div>
  );
};

export default ButtonSearch;
