import './scss/main.scss';
import { Rate } from "./rate";


function VideoSection() {
  return (
      <>
    <figure>
      <iframe src="https://drive.google.com/uc?id=1JMekdDrS8qxmY_bLUKuQiRIjJ6v4Hlne">
      </iframe>
      <h2 className='animationAdobe_subtitle'>Animacja wykonana w Adobe After Effect<span><br/>Liki do innych moich multimediów:<br/>
      <a className='animationGSAP_link' href='https://drive.google.com/file/d/1MVusAEzUyBjbkQaYFdJCXR79QYN6NlUv/view?usp=sharing'>Prezentacja pracy dyplomowej<br/></a>
      <a className='animationGSAP_link' href='https://drive.google.com/file/d/1FfAi86nRB7BbACPBd97bGn0_NVISw1eu/view?usp=sharing'>Animacja 4 pory roku</a>
      </span></h2>
      <div className='animationGSAP_rate'>
      <Rate/>
      </div>
    </figure>
    
    </>
  );
}

export default VideoSection;