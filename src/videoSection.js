import './scss/main.scss';
import { Rate } from "./rate";


function VideoSection() {
  return (
      <>
    <figure>
      <iframe src="https://drive.google.com/uc?id=1JMekdDrS8qxmY_bLUKuQiRIjJ6v4Hlne">
      </iframe>
      <h2 className='animationAdobe_subtitle'>Animacja wykonana w Adobe After Effect</h2>
      <div className='animationAdobe_rate'>
      <Rate/>
      </div>
    </figure>
    </>
  );
}

export default VideoSection;