import { useState } from "react";
import "./scss/main.scss";
import { Rate } from "./rate";

export function GallerySections(props) {
const [isActive, setActive] = useState(false);   

const toggleClass = () =>
{
   setActive(!isActive);
};

    return (
          <>
          <h1 id="digital_art" className="art_sections_title">Grafika cyfrowa</h1>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=1aeGaTZoetIyARLay9b46o4NrtiWivVrA')"}} onClick={toggleClass} className={isActive ? 'activeArt' : null}></section>
          <section style={{backgroundImage: "url('https://drive.google.com/uc?id=13HdAe5S6CaJvwq7Zlntqqf6X12997oCm')"}} onClick={toggleClass} className={isActive ? 'activeArt' : null}></section>
         </>
      );
   }

   export default GallerySections;