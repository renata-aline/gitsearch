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
  background-color: ${(props) => props.theme.colors.palette.secondary[100]};
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
  ${(props) => props.theme.typography.h2};
  color: ${(props) => props.theme.colors.palette.thirdy[500]};
  margin-bottom: 8px;
`;

export const Description = styled.div.attrs({ className: "card_description" })`
  ${(props) => props.theme.typography.body2};
  color: ${(props) => props.theme.colors.palette.primary[900]};
`;

export const ProfileLink = styled.a.attrs({ className: "card_link" })`
  ${(props) => props.theme.typography.body2};
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.colors.palette.thirdy[500]};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
