import { useState } from "react";
import "./scss/main.scss";

export function GallerySections(props) {
const [isActive, setActive] = useState(false);   

const toggleClass = () =>
{
   setActive(!isActive);
};

    return (
          <>
         <section onClick={toggleClass} className={isActive ? 'activeArt' : null}></section>
         <section onClick={toggleClass} className={isActive ? 'activeArt' : null}></section>
         </>
      );
   }

   export default GallerySections;