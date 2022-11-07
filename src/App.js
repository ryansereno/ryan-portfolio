import { Fragment } from "react";
import "./App.css";
import FadeInSection from "./components/FadeInSection";
import Header from "./components/Header";
import MainTitle from "./components/MainTitle";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
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

    </Fragment>
  );
}

export default App;
