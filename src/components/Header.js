import { useState } from "react";
import { StyledHeader } from "./styles/Header.styled";
import SocialLinks from "./SocialLinks";

const Header = (props) => {
  const [checked, setChecked] = useState(false);
  const checkHandler = () => {
    setChecked(!checked);
    props.toggleTheme();
  };
  return (
    <StyledHeader>
      <h1>Ryan Sereno</h1>
      <div className="button-container">
        <SocialLinks />

        <label className="switch">
          <input
            className="switch__input"
            type="checkbox"
            data-theme-toggle
            onChange={checkHandler}
          />
          <span className="switch__slider"></span>
        </label>
      </div>
    </StyledHeader>
  );
};
export default Header;
