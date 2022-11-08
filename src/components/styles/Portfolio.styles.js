import styled from "styled-components";

const PortfolioStyled = styled.section`
  text-align: center;

  .portfolio-section {
    width: 100%;
    margin: auto;
    display: grid;
    justify-content: space-around;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }
  .project {
    width: 20vw;
    height: 20vw;
    max-width: 300px;
    max-height: 300px;
    display: flex;
    border-radius: 25px;
    margin: auto;
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
  .project:nth-of-type(1) {
    background-color: var(--pink);
  }
  .project:nth-of-type(2) {
    background-color: var(--teal);
  }
  .project:nth-of-type(3) {
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
      gap:20px;
    }
    .project{
    width:45vw;
    height:45vw
    }
  }
`;
export default PortfolioStyled;
