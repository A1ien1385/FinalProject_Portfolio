import { useState } from "react";
import "./scss/main.scss";

export function FixedMenu() {
const [state, setState] = useState(false);   
const [width, setWidth] = useState(-100);
const [txt, setTxt] = useState("Wysuń menu");

function handleClickFixedMenu()
{
    if(state === false) 
    {
    setWidth(width => width + 100);
    setTxt("Schowaj menu");
    setState(true);
    }

    else 
    {
        setWidth(0);
        setTxt("Wysuń menu");
        setState(false);
    }
}
const menu =
{
    display: "flex",
    position: "fixed",
    top: "0",
    left: `${width}%`,
    backgroundColor: "red",
    width: `100%`,
    height: "100px",

}

    return (
          <>
         <div style={menu}>
             <p style={{position: "absolute", top: "10px", left: "10px", color: "white"}}>xdd</p>
         </div>
         <button onClick={handleClickFixedMenu} style={{position: "fixed", left: "0", top: "10%"}}>{txt}</button>
         </>
      );
   }

   export default FixedMenu;