import React from "react";
import { useTheme } from "styled-components";

import * as S from "./style";

const Avatar = ({ avatar, size }) => {
  const theme = useTheme();

  return <S.Avatar src={avatar} size={size} alt="Avatar" theme={theme} />;
};

export default Avatar;
