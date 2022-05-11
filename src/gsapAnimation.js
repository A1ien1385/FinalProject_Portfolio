import React, { useRef, useEffect } from 'react';
import { ReactComponent as Scene } from './img/cemetery.svg'
import './scss/main.scss';
import { TweenMax, TimelineMax  } from 'gsap';

function AnimationGSAP() {
    const wrapper = useRef(null);

    useEffect(() => {
      const [elements] = wrapper.current.children;

      const clouds = document.querySelectorAll('.st9');
	const moon = document.querySelector('#moonAll');
	const moonHoleOne = document.querySelector('#moonHole1');
	const pumpkin = document.querySelector('#PumpkinAll');
	const pumpkinShadow = document.querySelector('.st10');
	const fire = document.querySelector('.st25');
	const candleShadow = document.querySelector('.st22');
	const ghost = document.querySelector('#ghost1');
	const ghostHand = document.querySelector('.st40');
	const lantern = document.querySelector('#XMLID_21_'); 
	const eyeL = document.querySelectorAll('#eyeL_1_');
	const yurei = document.querySelector('#yurei_1_');
	const cross = document.querySelector('#croos1');
	const grave = document.querySelector('#grave1');
	const grass = document.querySelectorAll('.st3');

    TweenMax.to(clouds, 5, {x: -100, repeat: -1, yoyo: true});

	//moon animation
	//TweenMax.to(moon, 3, {transformOrigin: '50% 50%', rotation: 90, repeat: -1, yoyo: true});
     var tlMoon = new TimelineMax(
		 {
			repeat: -1, yoyo: true,
		 }
	 );

	 tlMoon.to(moon, 3, {transformOrigin: '50% 50%', rotation: 90});
	 tlMoon.to(moonHoleOne, .1, {transformOrigin: '50% 50%', scaleX: .2});

	 //pumpkin animation
    //  TweenMax.from(pumpkin, 3, {transformOrigin: '50% 50%', ease: "Bounce.easeOut", y: -200, scaleY: .85, repeat: -1, yoyo: true});
	//  TweenMax.to(pumpkinShadow, 3, {transformOrigin: '50% 50%', ease: "Bounce.easeOut", scaleY: .3, scaleX: .4, repeat: -1, yoyo: true});

	 //candle animation
	 TweenMax.to(fire, 2, {transformOrigin: '50% 100%', scaleY: 2, scaleX: 1.2, repeat: -1, ease: "none", yoyo: true});
	 TweenMax.to(candleShadow, 2, {transformOrigin: '50% 50%', scaleY: 2, scaleX: 1.2, ease: "none", repeat: -1, yoyo: true});

	 //ghost animation
	 // TweenMax.to(ghost, 6, {x: -400});
     
	 TweenMax.to(ghost, 2, {rotation: 10, repeat: -1, yoyo: true, transformOrigin: '50% 50%'});
	 TweenMax.to(ghostHand, 2, {rotation: 30, repeat: -1, yoyo: true, transformOrigin: '100% 10%'});
	 TweenMax.to(lantern, 2, {rotation: -20, y: -85, repeat: -1, yoyo: true, transformOrigin: '50% 10%'});
	 
     var tlGhost = new TimelineMax(
		 {
			 repeat: -1,
		 }
	 ) 
	 tlGhost.fromTo(ghost, 20, {x: 700}, {x: -800});

	 //yurei animation
     
	 TweenMax.to(yurei, 2, {rotation: 5, y: -10, repeat: -1, yoyo: true, transformOrigin: '50% 50%'});

	 var tlYurei = new TimelineMax(
		 {
			 repeat: -1,
		 }
	 )
	 
	 tlYurei.fromTo(yurei, 15, {x: -800}, {x: 800});

	 //graves animations
     TweenMax.to(cross, 2, {rotation: 5, y: -10, repeat: -1, yoyo: true, transformOrigin: '100% 100%'});
	 TweenMax.to(grave, 2, {delay: 2, rotation: -5, y: -10, repeat: -1, yoyo: true, transformOrigin: '50% 100%'});
	  

	
    });

    return (
       <div ref={wrapper} id='animationGSAP' className='sceneGSAP'>
        <Scene/>
      </div>
        
    );
  }
  
  export default AnimationGSAP;