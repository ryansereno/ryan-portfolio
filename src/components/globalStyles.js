import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

html,
body {
  width: 100%;
}
body {
  margin: 0;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: all 0.50s linear;
}
@font-face {
  font-family: "Nunito";
  src: local("Nunito"),
    url(../fonts/Nunito-VariableFont_wght.ttf) format("truetype");
}
@font-face {
  font-family: "Pacifico";
  src: local("Pacifico"), url(../fonts/Pacifico-Regular.ttf) format("truetype");
}
:root {
  --yellow: #ffc636;
  --teal: #3db5b6;
  --light-blue: #4683af;
  --pink: #ed8b7e;
  --red: #de5825;
  --light-green: #a1cdc0;
  --dark-blue: #105b95;
}
p {
  font-size: 2rem;
  font-family: Nunito, sans-serif;
}
header {
  position: fixed;
  z-index: 1000;
}
footer {
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  height: 40vh;
  margin-top: 100px;
  margin-left: 20px;
  margin-right: 20px;
}

footer a {
  color: white;
  font-size: 1.9rem;
  font-family: Nunito, sans-serif;
}
footer a:hover {
  transition: ease-in 150ms;
  color: var(--light-blue);
}
h3 {
  font-size: 3rem;
  font-family: Nunito, sans-serif;
  font-variation-settings: "wght" 700;
  margin-block-start: 0;
}
@media (max-width: 870px) {
  html,
  body {
    width: 100%;
  }
  header {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  p {
    font-size: 1.3rem;
  }
  .portfolio-section {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
  .project {
    width: 60vw;
    height: 60vw;
    justify-self: center;
  }
  .skill-section {
    grid-template-columns: repeat(auto-fit, minmax(116px, 1fr));
    max-width: none;
  }
}
`