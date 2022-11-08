import StyledAbout from "./styles/About.styled";
import sparcLogo from '../assets/sparc_logo.png'
import quartetLogo from '../assets/Quartet logo small.jpeg'
import palmLogo from '../assets/palm-logo.png'
const About = () => {
  return (
    <StyledAbout>
      <p>
        Organic chemist turned software engineer. <br />
        Building beautiful, intuitive software.
        <br />
        Specializing in React development and UI design.
        <br />
        <br />
        I use my years of professional experience as a scientist to inform my
        engineering process around data and computation.
        <br />
        <br />
        Using UX principles and my decade of visual design experience, I assemble software into intuitive
        and responsive interfaces.
        <br />
        <br />
        I joined <img src={sparcLogo} alt=""  /> in 2017 to
        design their GMP manufacturing facility and data pipelines. In 2019, I began building Quartet <img src={quartetLogo} alt="" />, paving
        the way for standardized laboratory data in California. As of 2022, I am leading the engineering of the
        Palm <img src={palmLogo} alt="" /> project management platform.
      </p> 
    </StyledAbout>
  );
};

export default About;
