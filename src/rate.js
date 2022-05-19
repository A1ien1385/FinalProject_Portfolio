import { useState } from "react";
import "./scss/main.scss";

export function Rate() {
  const [blueState, setBlueState] = useState(false);
  const [shadowColor, setShadowColor] = useState("");
  const [color, setColor] = useState("grey");
  const [redState, setRedState] = useState(true);
  const [txt, setTxt] = useState("Like it?");

  function handleCLick() {
    setBlueState((blueState) => !blueState);
    if (!blueState) {
      setShadowColor(`0px 0px 24px 11px blue`);
      setColor("blue");
      setTxt("Like it!");
    } else {
      setShadowColor(`0px 0px 24px 11px red`);
      setColor("red");
      setTxt("Dislike it!");
    }
  }

  return (
    <div
      className="hand_box"
      style={{ boxShadow: shadowColor }}
      onClick={handleCLick}
    >
      <span className="thumb" style={{ color: color }}>
        {txt}
      </span>
    </div>
  );
}
