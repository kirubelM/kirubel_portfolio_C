import "./App.css";
import React, { useState, useContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Tools from "./components/Tools/Tools";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./context";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const changeNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div
      className="main"
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#222",
      }}>
      {/* <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
      <NavBar className="n-nav" handleNavClick={changeNav} />
      <Toggle />
      <div className={`main-wrapper ${navOpen && "open"}`}>
        <Intro className="main-content" />
        <About className="main-content" />
        <Tools />
        <ProductList className="main-content" />
        <Contact className="main-content" />
        <a href="#intro">
          <div className="scroll-up"></div>
        </a>
      </div>
    </div>
  );
}

export default App;
