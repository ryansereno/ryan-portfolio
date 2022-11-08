import styled from "styled-components";
const SocialButtons = styled.div`
  .social-icon {
    margin-right: 10px;
    height: 20px;
    opacity: 0.3;
    filter: ${({ theme }) =>
      theme.name === "darkTheme" ? "invert(100%)" : "none"};
    transition: ease-in 100ms;
  }
  .social-icon:hover {
    opacity: 0.6;
  }
`;
export default SocialButtons;
