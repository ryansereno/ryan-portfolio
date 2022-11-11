import styled from "styled-components";

const PortfolioStyled = styled.section`
  text-align: center;
  h4 {
    margin: 0;
  }
  p {
    font-size: 1.2rem;
  }
  .portfolio-section {
    width: 100%;
    margin: auto;
    display: grid;
    gap: 20px;
  }
  .project-container {
    display: flex;
    border: 2px solid beige;
    border-radius: 25px;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
  }
  .project-description {
    width: 70%;
    margin-left: 10px;
    margin-right: 10px;
  }
  .project {
    height: 20vw;
    width: 20vw;
    max-width: 200px;
    max-height: 200px;
    display: flex;
    border-radius: 25px;
    transition: ease-out 150ms;
    position: relative;
    overflow: hidden;
  }
  .project img {
    width: 100%;
    object-fit: contain;
    position: absolute;
    align-self: center;
  }
  .project:hover {
    transform: scale(1.03);
  }
  .project:active {
    transform: scale(1);
  }
  .project-background-quartet {
    background-color: var(--pink);
  }
  .project-background-palm {
    background-color: var(--teal);
  }
  .project-background-gif {
    background-color: var(--yellow);
  }
  .logo-background {
    opacity: 0;
    width: 100%;
    object-fit: contain;
    position: absolute;
    align-self: center;
    z-index: 10;
    display: flex;
    height: 100%;
    transition: ease-in 150ms;
  }
  .logo-background:hover {
    opacity: 1;
  }
  .logo-background:nth-of-type(1) {
    background-color: black;
  }
  .logo-background:nth-of-type(2) {
    background-color: var(--teal);
  }
  .logo-background:nth-of-type(3) {
    background-color: white;
  }
  @media (max-width: 870px) {
    .portfolio-section {
      grid-template-columns: none;
      gap: 20px;
    }
  }
  @media (max-width: 640px) {
    .project-container {
      flex-direction: column;
      align-items: center;
    }
    .project-container:nth-of-type(2),
    .project-container:nth-of-type(4) {
      flex-direction: column-reverse;
    }
    .project {
      width: 45vw;
      height: 45vw;
    }
  }
`;
export default PortfolioStyled;
