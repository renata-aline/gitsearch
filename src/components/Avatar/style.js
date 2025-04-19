import styled from "styled-components";

export const Avatar = styled.img.attrs({ className: "avatar" })`
  width: ${(props) => (props?.size ? `${props.size}px` : "80px")};
  height: ${(props) => (props?.size ? `${props.size}px` : "80px")};
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid ${(props) => props.theme.colors.palette.thirdy[500]};
`;
