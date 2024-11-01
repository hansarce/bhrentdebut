import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import lineStroke1 from './img/linestroke1.png';
import lineStroke2 from './img/linestroke2.png';
import papertorn1 from './img/borderpapertrn.png';
import papertorn2 from './img/borderpapertrn2.png';
import firstPic from './img/firstpic.jpg';
import bgbrown from './img/bgbrown.png';
import citylights from './img/citylights.jpg';
import videoSource from './video/18thvideo.mp4';
import pattern from './img/pattern.jpg'
import Slider from 'react-slick';
import img1 from './slideshow/1.jpg';
import img2 from './slideshow/2.jpg';
import img3 from './slideshow/3.jpg';
import img4 from './slideshow/4.jpg';
import img5 from './slideshow/5.jpg';
import img6 from './slideshow/6.jpg';
import img7 from './slideshow/7.jpg';
import img8 from './slideshow/8.jpg';
import img9 from './slideshow/9.jpg';
import img10 from './slideshow/10.jpg';
import img11 from './slideshow/11.jpg';
import img12 from './slideshow/12.jpg';
import img13 from './slideshow/13.jpg';
import img14 from './slideshow/14.jpg';
import img15 from './slideshow/15.jpg';
import img16 from './slideshow/16.jpg';
import './App.css';
import {fadein} from './variants.js';


function App() {

    
  useEffect(() => {
    const debutCountdown = new Date('Dec 10, 2024 08:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const timeRemaining = debutCountdown - now;

      if (timeRemaining > 0) {
        const seconds = Math.floor((timeRemaining / 1000) % 60);
        const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
        const hours = Math.floor((timeRemaining / 1000 / 60 / 60) % 24);
        const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
      }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(countdownInterval);
  }, []);

  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15, img16,
  ];

  return (
    <>
      <div className="overflow-x-hidden">
        <section
          className="homeintro h-screen bg-cover bg-center bg-no-repeat md:w-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${firstPic})`,
          }}
        >
          {/* Fireflies */}
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          

          {/* Existing Content */}
          <div className="flex h-full flex-col justify-center items-center md:items-end md:justify-center p-5">
            <div className="text-center md:text-left md:pr-24">
              <motion.img 
                src={lineStroke1} 
                alt="Line Stroke" 
                className="w-80 md:w-96 mt-4 mx-auto md:mx-0" 
                variants={fadein("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0 }}
              />
              <motion.h1 className="text-8xl md:text-7xl text-[#c1b56c] mb-4" id='Bhrentfirsttitle' 
               variants={fadein("up", 0.2)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0 }}>
                Eirzeth's Debut
              </motion.h1>
              <motion.ul className="text-[#c1b56c] text-lg mb-4" id='bhrentdateevent' 
                variants={fadein("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0 }}>
                <li>You are invited!</li>
                <li>Join us for a night to remember</li>
                <li>Dress Code: Semi-formal/ Cocktail Attire</li>
              </motion.ul>
              <motion.table id='countdown' className='text-white'
                variants={fadein("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0 }} >
                <tbody>
                  <tr id='countdown-timer'>
                    <td>
                      <div className='countdown-unit'>
                        <span id='days'>x</span>
                        <div className='label'>Days</div>
                      </div>
                    </td>
                    <td>
                      <div className='countdown-unit'>
                        <span id='hours'>x</span>
                        <div className='label'>Hours</div>
                      </div>
                    </td>
                    <td>
                      <div className='countdown-unit'>
                        <span id='minutes'>x</span>
                        <div className='label'>Minutes</div>
                      </div>
                    </td>
                    <td>
                      <div className='countdown-unit'>
                        <span id='seconds'>x</span>
                        <div className='label'>Seconds</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </motion.table>
              <motion.img 
                src={lineStroke2} 
                alt="Line Stroke" 
                className="w-80 md:w-96 lg:w-112 mt-4 mx-auto md:mx-0" 
                variants={fadein("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0 }}/>
            </div>
          </div>
        </section>

        <section 
          className="spotifyplaylist h-screen bg-cover bg-center bg-no-repeat md:h-max md:pt-4" 
          id="spotifyplaylist"  
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${citylights})`,
          }}
        >
          <div className="spotify">
            <div className="iframe-container flex justify-center pt-7" id="embed-iframe">
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/1fDFHXcykq4iw8Gg7s5hG9?utm_source=generator&autoplay=1"
                width="340"
                height="400"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
        <section 
  className="video-section h-screen md:w-screen md:h-screen flex items-center justify-center bg-[#140903] md:h-screen md:w-screen relative"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgbrown})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Video Element */}
  <video className='md:w-11/12 md:h-96'
    controls
    autoPlay
    muted
    style={{ width: '100%', borderRadius: '5px', border: 'white' }}
  >
    <source src={videoSource} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Heading over the video */}
  <motion.h1
  className="absolute top-1 mt-56 text-7xl md:text-7xl md:mt-44 mb-4 gold-text"
  id="Bhrenttitlepage"
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  Save The Date
</motion.h1>
<motion.h1
  className="absolute bottom-1 mb-56 text-7xl md:text-7xl md:mb-44 mb-4 gold-text"
  id="Bhrenttitlepage"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  Save The Date
</motion.h1>

</section>


<section
  className="photos h-screen md:h-screen md:w-screen relative"
  style={{
    backgroundImage: `linear-gradient(rgba(91, 1, 1, 0.9), rgba(91, 1, 1, 0.7)), url(${pattern})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  id="photos"
>


  <div className="absolute w-full md:w-0 md:h-0 top-0 left-1/2 transform -translate-x-1/2">
    <img 
      src={papertorn1} 
      alt="Paper Torn" 
      className="w-max"
    />
  </div>

  <div className="absolute top-44 w-full text-center z-10">
    <h1 id='debutpicstext' className="text-7xl md:text-6xl font-bold   text-[#c1b56c]">Debut &nbsp; Pics</h1>
  </div>
  <div className="photosslideshow h-full flex items-center justify-center">
    <Slider {...settings} className="w-full">
      {images.map((image, index) => (
        <div key={index} className="img-container">
          <img src={image} alt={`Slide ${index + 1}`} className="object-cover w-full" />
        </div>
      ))}
    </Slider>
  </div>

 
  <div className="absolute md:w-0 md:h-0 bottom-0 w-full left-1/2 transform -translate-x-1/2 ">
    <img 
      src={papertorn2} 
      alt="Paper Torn" 
      className="w-max"
    />
  </div>
</section>
 {/* RSVP */}

<section
  className="rsvp-section h-screen md:h-screen md:w-screen bg-[#2e1b14] flex flex-col items-center justify-center text-white relative"
  id="rsvp"
  style={{
    backgroundImage: `linear-gradient(rgba(46, 27, 20, 0.8), rgba(46, 27, 20, 0.8)), url(${pattern})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <motion.div
    className="invitation-envelope flex flex-col items-center"
    initial={{ opacity: 0, rotateX: -90 }}
    whileInView={{ opacity: 1, rotateX: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    {/* Envelope top flap */}
    <motion.div
  className="envelope-top w-64 h-12 bg-[#1f1f1f] rounded-t-lg relative z-20 overflow-hidden"
  style={{ transformOrigin: "top center" }}
  initial={{ scaleY: 1 }}
  animate={{ scaleY: 0 }}
  transition={{ delay: 0.5, duration: 1 }}
/>

    {/* Invitation Content */}
    <motion.div
      className="invitation-content w-64 p-6 bg-[#1f1f1f] rounded-b-lg shadow-lg space-y-4 z-10"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold text-[#c1b56c] mb-4 text-center">RSVP</h1>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#c1b56c]"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#c1b56c]"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg">Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Leave a message (optional)"
            className="p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#c1b56c]"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-[#c1b56c] text-black font-semibold rounded-md hover:bg-[#a89c5c] transition duration-300"
        >
          Submit RSVP
        </button>
      </form>
    </motion.div>
  </motion.div>
</section>


      </div>
    </>
  );
}

export default App;
