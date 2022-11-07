import styled from 'styled-components'

const PortfolioStyled = styled.section`
text-align:center;
.portfolio-section {
  width: 80vw;
  margin: auto;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 1fr 1fr;
  padding-left: 20px;
  padding-right: 20px;
  gap:40px;
}
.project {
  width: 30vw;
  height: 30vw;
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
`
export default PortfolioStyled
