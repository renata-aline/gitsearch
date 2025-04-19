import React from "react";
import { useTheme } from "styled-components";
import * as S from "./style";
import Avatar from "../Avatar";
import { FaLink } from "react-icons/fa";

const Card = ({ avatar, title, description, avatarSize, ProfileLink }) => {
  const theme = useTheme();

  return (
    <S.Card theme={theme}>
      <Avatar avatar={avatar} size={avatarSize} theme={theme} />
      <S.Content theme={theme}>
        {title && <S.Name theme={theme}>{title}</S.Name>}
        {description && (
          <S.Description theme={theme}>{description}</S.Description>
        )}
        {ProfileLink && (
          <S.ProfileLink
            theme={theme}
            href={ProfileLink}
            target="_blank"
            rel="noreferrer"
          >
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
