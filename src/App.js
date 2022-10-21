import { Fragment } from "react";
import quartetImage from "./assets/quartet.png";
import palmImage from "./assets/palm.png";
import butterImage from "./assets/butter.png";
import quartetLogo from "./assets/quartet-logo.jpg";
import palmLogo from "./assets/palm-logo.png";
import butterLogo from "./assets/butter-logo.jpg";
import "./App.css";
import FadeInSection from "./components/FadeInSection";

function App() {
  const current = new Date();

  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const frontendText = "Frontend";
  let frontendHtml = [];
  for (let i = 0; i < frontendText.length; i++) {
    frontendHtml.push(
      <span key={i} className="header-letter">
        {frontendText[i]}
      </span>
    );
  }
  return (
    <Fragment>
      <header>
        <h1>Ryan Sereno</h1>
      </header>
      <div className="App">
        <h2>
          {frontendHtml}&nbsp;
          <br />
          Engineer
        </h2>
      </div>
      <FadeInSection>
        <div className="about">
          <p>
            Organic chemist turned software engineer. <br />
            Building beautiful, intuitive software.
            <br />
            Specialized in React development and UI design.
          </p>
        </div>
      </FadeInSection>
      <FadeInSection>
        <section>
          <h3>Skillset</h3>
          <div className="skill-section">
            <div className="skill-row">
              <div className="skill">
                <img src="https://skills.thijs.gg/icons?i=react" />
                <p>React</p>
              </div>
              <div className="skill">
                <img src="https://skills.thijs.gg/icons?i=javascript" />
                <p>Javascript</p>
              </div>
              <div className="skill">
                <img src="https://skills.thijs.gg/icons?i=typescript" />
                <p>Typescript</p>
              </div>
              <div className="skill">
                <img src="https://skills.thijs.gg/icons?i=css" />
                <p>CSS</p>
              </div>
            </div>
            <div className="skill-row">
              <div className="skill">
                <img src="https://skills.thijs.gg/icons?i=nextjs" />
                <p>Next.js</p>
              </div>
              <div className="skill">
                <img src="https://skills.thijs.gg/icons?i=nodejs" />
                <p>Node</p>
              </div>
              <div className="skill">
                <img src="https://skills.thijs.gg/icons?i=mongodb" />
                <p>MongoDB</p>
              </div>
              <div className="skill">
                <img src="https://skills.thijs.gg/icons?i=mysql" />
                <p>MySql</p>
              </div>
              <div className="skill">
                <img src="https://skills.thijs.gg/icons?i=ai" />
                <p>Illustrator</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <section>
          <h3>Work</h3>
          <div className="portfolio">
            <div className="project">
              <div className="logo-background">

              <img className="logo" src={quartetLogo} alt="" />
              </div>
              <img src={quartetImage} alt="" />
            </div>
            <div className="project">
              <div className="logo-background">
              <img className="logo" src={palmLogo} alt="" />
              <img className="logo" src="" alt="" />
            </div>
              <img src={palmImage} alt="" />
              <img className="logo" src="" alt="" />
            </div>
            <div className="project">
              <div className="logo-background">
              <img className="logo" src={butterLogo} alt="" />
              <img className="logo" src="" alt="" />
            </div>
              <img src={butterImage} alt="" />
              <img className="logo" src="" alt="" />
            </div>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <footer>
          <p>
            It's {time} <br />
            Still not too late to send me a message:)
          </p>
          <a href="mailto: ryan.a.sereno@gmail.com">ryan.a.sereno@gmail.com</a>
        </footer>
      </FadeInSection>
    </Fragment>
  );
}

export default App;
