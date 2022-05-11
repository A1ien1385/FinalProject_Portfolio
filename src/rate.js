import { useState } from "react";
import "./scss/main.scss";

export function Rate() {
    const [blueState, setBlueState] = useState(false);
    const [blueColor, setBlueColor] = useState("grey");
    const [redState, setRedState] = useState(true);
    const [redColor, setRedColor] = useState("grey");

    function handleCLick()
    {
        setBlueState(blueState => !blueState);
        if (blueState === false)
        {
            setBlueColor("blue");
            setRedColor("grey")
        }

        else
        {
            setBlueColor("grey");
            setRedColor("red");
        }
    }

    let toggleClass = blueState ? ' active_blue': null;


    return (
          
         <div className='hand_box' onClick={handleCLick}>
             <p className="thumb thumb_up"  style={{color: blueColor, width: "50px", height: "50px"}}>Like!</p>
             <p className="thumb thumb_down" style={{color: redColor, width: "50px", height: "50px"}}>Dislike!</p>
         </div>
         
      );
   }
   
    