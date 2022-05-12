import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav';
import AboutMe from './aboutMe'
import Slider from './slider';
import FixedMenu from './fixedMenu';
import  Clock  from './date';
import AnimationGSAP from './gsapAnimation';
import VideoSection from './videoSection';
import reportWebVitals from './reportWebVitals';



const nav = ReactDOM.createRoot(document.getElementById('nav'));
nav.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>
);

const aboutMe = ReactDOM.createRoot(document.getElementById('aboutMe'));
aboutMe.render(
  <React.StrictMode>
    <AboutMe />
  </React.StrictMode>
);

const slider = ReactDOM.createRoot(document.getElementById('slider'));
slider.render(
  <React.StrictMode>
    <Slider />
  </React.StrictMode>
);

const fixedMenu = ReactDOM.createRoot(document.getElementById('fixedMenu'));
fixedMenu.render(
  <React.StrictMode>
    <FixedMenu />
  </React.StrictMode>
);

const clock = ReactDOM.createRoot(document.getElementById('clock'));
clock.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>
);

const animationGSAP = ReactDOM.createRoot(document.getElementById('animationGSAP'));
animationGSAP.render(
  <React.StrictMode>
    <AnimationGSAP />
  </React.StrictMode>
);

const videoSection = ReactDOM.createRoot(document.getElementById('videoSection'));
videoSection.render(
  <React.StrictMode>
    <VideoSection />
  </React.StrictMode>
);

reportWebVitals();
