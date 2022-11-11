import quartetImage from "../assets/quartet-mockup.png";
import palmImage from "../assets/palm.png";
import butterLogo from "../assets/butter.png";
import quartetLogo from "../assets/quartet-logo.jpg";
import palmLogo from "../assets/palm-logo.png";
import PortfolioStyled from "./styles/Portfolio.styles";
import bankingImage from '../assets/banking.png'
const Portfolio = () => {
  return (
    <PortfolioStyled>
      <h3>Work</h3>

      <div className="portfolio-section">
        <div className="project-container">
          <a
            href="https://quartet.ai"
            className="project project-background-quartet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="logo-background">
              <img className="logo" src={quartetLogo} alt="" />
            </div>
            <img src={quartetImage} alt="" />
          </a>
          <div className="project-description">
            <h4>Quartet</h4>
            <p>
              Brand design | UI design | Fullstack development
              <br />
              <br />
              Led the development of Quartet, and worked with laboratories and
              lobbyists to standardize chemical data across the state of
              California.
              <br />
              React frontend, MongoDB/ Python/ Metrc API backend
            </p>
          </div>
        </div>

        <div className="project-container">
          <div className="project-description">
            <h4>Palm</h4>
            <p>
              Brand design | UI design | Fullstack development
              <br />
              <br />
              Led the development of Palm, and worked with condominium boards to
              onboard their schedules and documents.
              <br />
              React frontend, Firebase backend
            </p>
          </div>
          <a
            href="https://palm.condos"
            className="project project-background-palm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="logo-background">
              <img className="logo" src={palmLogo} alt="" />
            </div>
            <img src={palmImage} alt="" />
          </a>
        </div>

        <div className="project-container">
          <a
            href="https://github.com/ryansereno/digital-banking-components"
            className="project project-background-gif"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={bankingImage} alt="" />
          </a>
          <div className="project-description">
            <h4>Online Banking Components</h4>
            <p>
              UI Design | Custom React components
              <br />
              <br />
              React component library for online banking and budgeting applications
            </p>
          </div>
        </div>

        <div className="project-container">
          <div className="project-description">
            <h4>Gif Butter</h4>
            <p>
              UI Design | Custom React hooks
              <br />
              <br />
              Client-side video to .gif conversion using WebAssembly and Nextjs
            </p>
          </div>
          <a
            href="https://gifbutter.io"
            className="project project-background-gif"
            target="_blank"
            rel="noopener noreferrer"
          >
              <img className="logo" src={butterLogo} alt="" />
          </a>
        </div>
      </div>
    </PortfolioStyled>
  );
};
export default Portfolio;
