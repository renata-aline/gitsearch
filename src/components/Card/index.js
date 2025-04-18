import React from "react";
import * as S from "./style";
import Avatar from "../Avatar";

const Card = ({ avatar, title, description, avatarSize }) => {
  return (
    <S.Card>
      <Avatar avatar={avatar} size={avatarSize} />
      <S.Content>
        <S.Name>{title}</S.Name>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Card>
  );
};

export default Card;
