import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav';
import AboutMe from './aboutMe'
import Slider from './slider';
import FixedMenu from './fixedMenu';
import  Clock  from './date';
import Weather from './weather';
import AnimationGSAP from './gsapAnimation';
import VideoSection from './videoSection';
import GallerySections from './gallerySections';
import Comments from './comments';
import Footer from './footer';
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

const weather = ReactDOM.createRoot(document.getElementById('weather'));
weather.render(
  <React.StrictMode>
    <Weather />
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

const gallerySections = ReactDOM.createRoot(document.getElementById('gallerySections'));
gallerySections.render(
  <React.StrictMode>
    <GallerySections />
  </React.StrictMode>  
);

const comments = ReactDOM.createRoot(document.getElementById('comments'));
comments.render(
  <React.StrictMode>
    <Comments/>
  </React.StrictMode>  
);

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>  
);

reportWebVitals();
