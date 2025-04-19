import React, { useRef } from "react";
import Input from "../Input";
import ButtonSearch from "../ButtonSearch";
import * as S from "./style";

const Search = ({ result, placeholder }) => {
  const inputRef = useRef();
  const handleClick = () => {
    result(inputRef.current.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <S.Search>
      <Input
        ref={inputRef}
        placeholder={placeholder}
        handleKeyPress={handleKeyPress}
      />
      <ButtonSearch handleClick={handleClick} />
    </S.Search>
  );
};

export default Search;
