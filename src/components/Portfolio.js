import quartetImage from "../assets/quartet-mockup.png";
import palmImage from "../assets/palm.png";
import butterImage from "../assets/butter.png";
import quartetLogo from "../assets/quartet-logo.jpg";
import palmLogo from "../assets/palm-logo.png";
import butterLogo from "../assets/butter-logo.jpg";
import PortfolioStyled from "./styles/Portfolio.styles";
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
            Brand design, UI design, Fullstack development
            <br />
            <br />
            
            Led the development of Quartet, and worked with laboratories and lobbyists to standardize chemical data across the state of California.
          </p>
          </div>
        </div>

        <div className="project-container">
          <div className="project-description">
            <h4>Palm</h4>
          <p>
            Brand design, UI design, Fullstack development
            <br />
            <br />
            Led the development of Palm, and worked with condominium boards to onboard their schedules and documents.
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
              <img className="logo" src="" alt="" />
            </div>
            <img src={palmImage} alt="" />
            <img className="logo" src="" alt="" />
          </a>
        </div>
        <div className="project-container">
          <a
            href="https://gifbutter.io"
            className="project project-background-gif"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="logo-background">
              <img className="logo" src={butterLogo} alt="" />
              <img className="logo" src="" alt="" />
            </div>
            <img src={butterImage} alt="" />
            <img className="logo" src="" alt="" />
          </a>
          <div className="project-description">
            <h4>Gif Butter</h4>
          <p>
            UI Design, Custom React hooks
            <br />
            <br />
            Client-side video to .gif conversion using WebAssembly and Nextjs
          </p>
          </div>
        </div>
      </div>
    </PortfolioStyled>
  );
};
export default Portfolio;
