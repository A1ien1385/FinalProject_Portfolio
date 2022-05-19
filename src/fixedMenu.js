import { useState } from "react";
import "./scss/main.scss";

export function FixedMenu() {
  const [state, setState] = useState(true);
  const [width, setWidth] = useState(-100);
  const [txt, setTxt] = useState("Wysuń menu");

  function handleClickFixedMenu() {
    if (state === false) {
      setWidth((width) => width + 100);
      setTxt("Wysuń menu");
      setState(true);
    } else {
      setWidth(0);
      setTxt("Schowaj menu");
      setState(false);
    }
  }
  const menu = {
    display: "flex",
    position: "fixed",
    top: "0",
    left: `${width}%`,
    backgroundColor: "red",
    width: `100%`,
    height: "70px",
  };

  return (
    <>
      <div className="fixed_menu" style={menu}>
        <header className="App-header" style={{ width: "100%" }}>
          <a className="header-section" href="#about_author">
            O mnie
          </a>
          <a className="header-section" href="#VideoAndAnimations">
            Multimedia i animacje
          </a>
          <a className="header-section" href="#graphic3D">
            Grafika 3D
          </a>
          <a className="header-section" href="#digital_art">
            Grafika cyfrowa
          </a>
          <a className="header-section" href="#graphic_design">
            Projektowanie graficzne
          </a>
          <a className="header-section" href="#illustration">
            Ilustracje
          </a>
          <a className="header-section" href="#drawings">
            Rysunki i szkice
          </a>
          <a className="header-section" href="#comments">
            Komentarze
          </a>
        </header>
      </div>
      <div className="fixed_menu_button" onClick={handleClickFixedMenu}></div>
      <p className="fixed_menu_txt">{txt}</p>
    </>
  );
}

export default FixedMenu;
