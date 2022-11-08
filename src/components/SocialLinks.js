import linkedinIcon from "../assets/linkedin-icon.png";
import githubIcon from "../assets/github-icon.png";
import resumeIcon from "../assets/resume-icon.png";
import SocialButtons from "./styles/SocialButtons.styled";
const SocialLinks = () => {
  return (
    <SocialButtons>
      <a
        href="https://github.com/ryansereno"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubIcon} alt="Ryan's Github" className="social-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/serenoryan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinIcon} alt="Ryan's LinkedIn" className="social-icon" />
      </a>

      <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
        <img src={resumeIcon} alt="Ryan's Resume" className="social-icon" />
      </a>
    </SocialButtons>
  );
};
export default SocialLinks;
