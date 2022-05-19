import "./scss/main.scss";
import { Rate } from "./rate";

function Slider() {
  return (
    <>
      <div className="slider_box">
        <div className="slide slide_one" />
        <div className="slide slide_two"></div>
        <div className="slide slide_three"></div>
      </div>
      <Rate />
    </>
  );
}

export default Slider;
