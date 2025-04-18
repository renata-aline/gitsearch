import React from "react";
import { FaGithub } from "react-icons/fa";
import * as S from "./style";

const Logo = () => {
  return (
    <S.Header>
      <FaGithub size={58} color="#fff" />
      <S.Title>
        Perfil<span>GitHub</span>
      </S.Title>
    </S.Header>
  );
};

export default Logo;
