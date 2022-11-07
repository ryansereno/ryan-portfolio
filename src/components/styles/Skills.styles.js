import styled from "styled-components";
const SkillsStyled = styled.section`
  height: 60vh;
  min-height:600px;
  text-align: center;

  .skill-section {
    text-align: center;
    padding-bottom: 100px;
    display: flex;
    width: 80vw;
    max-width: 1200px;
    margin: auto;
    flex-wrap: wrap;
    justify-content: center;
  }

  .skill {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
  }
  .skill img {
    width: 75px;
    margin: 0;
  }
  .skill p {
    font-size: 1.2rem;
  }
`;
export default SkillsStyled;
