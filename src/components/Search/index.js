import React, { useRef } from "react";
import Input from "../Input";
import ButtonSearch from "../ButtonSearch";
import * as S from "./style";

const Search = ({ result, placeholder }) => {
  const inputRef = useRef();
  const handleClick = () => {
    result(inputRef.current.value);
  };

  return (
    <S.Search>
      <Input ref={inputRef} placeholder={placeholder} />
      <ButtonSearch handleClick={handleClick} />
    </S.Search>
  );
};

export default Search;
