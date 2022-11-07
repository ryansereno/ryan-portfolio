import { useState } from "react";
import "./App.css";
import FadeInSection from "./components/FadeInSection";
import Header from "./components/Header";
import MainTitle from "./components/MainTitle";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Container from "./components/Container";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Theme"

function App() {
  const [darkModeOn, setDarkModeOn] = useState(false);
  const toggleTheme = () => {
    setDarkModeOn((prevState) => !prevState);
  };
    console.log('dark mode is on? ', darkModeOn)
  return (
    <ThemeProvider theme={!darkModeOn ? lightTheme : darkTheme}>
      <GlobalStyles />
      
      <Container>
        <Header toggleTheme={toggleTheme} />

        <MainTitle />

        <FadeInSection>
          <About />
        </FadeInSection>

        <FadeInSection>
          <Skills />
        </FadeInSection>

        <FadeInSection>
          <Portfolio />
        </FadeInSection>

        <Footer />
      </Container>
      </ThemeProvider >
      
  );
}

export default App;
