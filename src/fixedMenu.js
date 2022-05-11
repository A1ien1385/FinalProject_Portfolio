import { useState } from "react";
import "./scss/main.scss";

export function FixedMenu() {
// const widthhh = [widthhh, setWidth] = useState(50)

const szerokosc = 50;
const menu =
{
    position: "fixed",
    top: "0",
    left: "50",
    backgroundColor: "red",
    width: `${szerokosc}%`,
}

    return (
          <>
         <div style={menu} className='fixed_menu_box menu_box_active'>
            <h1>xxdddddd</h1>
         </div>
         <button style={{position: "fixed", left: "0", top: "10%"}}>Wysuń menu</button>
         </>
      );
   }

   export default FixedMenu;