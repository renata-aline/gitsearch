import React from "react";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "styled-components";
import * as S from "./style";

const Logo = () => {
  const theme = useTheme();
  return (
    <S.Header>
      <FaGithub size={58} color={theme.colors.palette.secondary[100]} />
      <S.Title theme={theme}>
        Perfil<span theme={theme}>GitHub</span>
      </S.Title>
    </S.Header>
  );
};

export default Logo;
