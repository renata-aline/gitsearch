import React from "react";
import Input from "../Input";
import ButtonSearch from "../ButtonSearch";
import * as S from "./style";

const Search = () => {
  return (
    <S.Search>
      <Input />
      <ButtonSearch />
    </S.Search>
  );
};

export default Search;
