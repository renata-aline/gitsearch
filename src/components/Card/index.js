import React from "react";
import * as S from "./style";
import Avatar from "../Avatar";
import { FaLink } from "react-icons/fa";

const Card = ({ avatar, title, description, avatarSize, ProfileLink }) => {
  return (
    <S.Card>
      <Avatar avatar={avatar} size={avatarSize} />
      <S.Content>
        {title && <S.Name>{title}</S.Name>}
        {description && <S.Description>{description}</S.Description>}
        {ProfileLink && (
          <S.ProfileLink href={ProfileLink} target="_blank" rel="noreferrer">
            {" "}
            ver perfil
            <FaLink />
          </S.ProfileLink>
        )}
      </S.Content>
    </S.Card>
  );
};

export default Card;
