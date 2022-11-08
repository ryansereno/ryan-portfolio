import styled from "styled-components";
const SkillsStyled = styled.section`
display: flex;
    flex-direction: column;
  text-align: center;
  span {
    display: flex;
  }
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
    width: 75px;
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
  @media (max-width: 870px) {

  min-height: 570px;}
`;
export default SkillsStyled;
