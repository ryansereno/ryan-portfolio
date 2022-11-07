import {useState} from 'react'
import { StyledHeader } from "./styles/Header.styled";
const Header = (props) => {
  const [checked, setChecked] = useState(false)
  const checkHandler = () =>{
    setChecked(!checked)
    props.toggleTheme()
  }
  return (
    <StyledHeader>
      <h1>Ryan Sereno</h1>
      <label className="switch">
        <input className="switch__input" type="checkbox" data-theme-toggle onChange={checkHandler} />
        <span className="switch__slider"></span>
      </label>
    </StyledHeader>
  );
};
export default Header;
