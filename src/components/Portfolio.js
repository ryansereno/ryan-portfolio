
import quartetImage from "../assets/quartet-mockup.png";
import palmImage from "../assets/palm.png";
import butterImage from "../assets/butter.png";
import quartetLogo from "../assets/quartet-logo.jpg";
import palmLogo from "../assets/palm-logo.png";
import butterLogo from "../assets/butter-logo.jpg";
const Portfolio = () => {
  return (
    <section>
      <h3>Work</h3>
      <div className="portfolio-section">
        <a
          href="https://quartet.ai"
          className="project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="logo-background">
            <img className="logo" src={quartetLogo} alt="" />
          </div>
          <img src={quartetImage} alt="" />
        </a>
        <a
          href="https://palm.condos"
          className="project"
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

        <a
          href="https://gifbutter.io"
          className="project"
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
      </div>
    </section>
  );
};
export default Portfolio
