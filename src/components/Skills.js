import SkillsStyled from "./styles/Skills.styles";
const Skills = () => {
  return (
    <SkillsStyled>
      <h3>Skillset</h3>

      <div className="skill-section">
        <div>
          <h4>Frontend</h4>
        </div>

        <span>
          <div className="skill">
            <img src="https://skillicons.dev/icons?i=react" alt="React" />
            <p>React</p>
          </div>
          <div className="skill">
            <img src="https://skillicons.dev/icons?i=vue" alt="Vue" />
            <p>Vue</p>
          </div>
          <div className="skill">
            <img
              src="https://skillicons.dev/icons?i=javascript"
              alt="Javascript"
            />
            <p>Javascript</p>
          </div>
          <div className="skill">
            <img
              src="https://skillicons.dev/icons?i=typescript"
              alt="Typescript"
            />
            <p>Typescript</p>
          </div>
          <div className="skill">
            <img
              src="https://skillicons.dev/icons?i=tailwind"
              alt="Tailwind"
            />
            <p>Tailwind</p>
          </div>
        </span>
        <div>
          <h4>Backend</h4>
        </div>
        <span>
          <div className="skill">
            <img src="https://skillicons.dev/icons?i=mongodb" alt="Mongodb" />
            <p>MongoDB</p>
          </div>
          <div className="skill">
            <img src="https://skillicons.dev/icons?i=mysql" alt="Mysql" />
            <p>MySql</p>
          </div>
          <div className="skill">
            <img src="https://skillicons.dev/icons?i=nextjs" alt="Nextjs" />
            <p>Next.js</p>
          </div>
          <div className="skill">
            <img src="https://skillicons.dev/icons?i=nodejs" alt="Nodejs" />
            <p>Node</p>
          </div>
          <div className="skill">
            <img src="https://skillicons.dev/icons?i=dotnet" alt="Mysql" />
            <p>ASP.NET</p>
          </div>
        </span>

          <div>
            <h4>Machine Learning</h4>
          </div>
        <span>
          <div className="skill">
            <img src="https://skillicons.dev/icons?i=pytorch" alt="PyTorch" />
            <p>PyTorch</p>
          </div>
          <div className="skill">
            <img src="https://skillicons.dev/icons?i=python" alt="Python" />
            <p>Python</p>
          </div>
        </span>
      </div>
    </SkillsStyled>
  );
};
export default Skills;
