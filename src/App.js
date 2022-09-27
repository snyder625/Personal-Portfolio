import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";


function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="App" style={{backgroundColor: darkMode? "black": "white", color: darkMode && "white"}}>
        <Toggle />
        <Intro />
        <Skills />
        {/* <About /> */}
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
