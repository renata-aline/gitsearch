import styled from "styled-components";

export const Card = styled.div.attrs({ className: "card" })`
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  margin: 20px auto;
  width: 100%;
  max-width: 800px;
  padding: 18px 48px 18px 24px;
  border-radius: 25px;
  background-color: #fff;
  text-align: center;

  .avatar {
    flex: 0 0 auto;
  }

  @media (min-width: 768px) {
    justify-content: left;
    flex-direction: row;
  }
`;

export const Content = styled.div.attrs({ className: "card_content" })`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Name = styled.h2.attrs({ className: "card_title" })`
  font-size: 20px;
  font-weight: 700;
  color: #005cff;
  margin-bottom: 8px;
`;

export const Description = styled.div.attrs({ className: "card_description" })`
  font-size: 14px;
  font-weight: 300;
  color: #000;
`;

export const ProfileLink = styled.a.attrs({ className: "card_link" })`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 300;
  color: #005cff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
