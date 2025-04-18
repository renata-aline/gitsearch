import React from "react";

import * as S from "./style";

const Avatar = ({ avatar, size }) => {
  return <S.Avatar src={avatar} size={size} alt="Avatar" />;
};

export default Avatar;
