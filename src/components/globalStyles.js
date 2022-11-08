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
  font-size: 1.5rem;
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
  margin-top: 100px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom:20px;
}

footer a {
  color: ${({ theme }) => theme.text};
  font-size: 1.7rem;
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
`
