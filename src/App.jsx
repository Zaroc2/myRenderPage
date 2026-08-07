import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Piano from './piano/Piano.jsx';
import Sections from './sections/Sections.jsx'
import Data from './sections/Data.jsx'
import { useEffect, useRef } from 'react';
import { getComplementaryColor } from './Utilities.jsx';
import { useMediaQuery } from './Utilities.jsx';
import {motion,AnimatePresence} from 'framer-motion';

const MuteButton = ({bocinaColor,slashColor,muteOn,setMuteOn}) => {

  return (
    <button id="muteButton" onClick={() => {setMuteOn(!muteOn)}}>
      <svg 
        fill="none" 
        width="70px" 
        height="70px" 
        viewBox="0 0 24 24" 
        id="mute-2" 
        data-name="Flat Color" 
        xmlns="http://www.w3.org/2000/svg" 
        className="icon flat-color">
        <path id="bocina" d="M17.45,2.11a1,1,0,0,0-1,.08L9.84,7H6A2,2,0,0,0,4,9v6a2,2,0,0,0,2,2H9.84l6.57,4.81a1,1,0,0,0,1,.08A1,1,0,0,0,18,21V3A1,1,0,0,0,17.45,2.11Z" 
              style={{fill: bocinaColor, transition: 'fill 0.3s ease'}}></path>
        {muteOn && (
          <path id="slash" d="M21.8,4.78a1,1,0,0,0-1.39-.22l-18,13.26A1,1,0,0,0,3,19.63a.94.94,0,0,0,.59-.2l18-13.26A1,1,0,0,0,21.8,4.78Z" 
                style={{fill: slashColor, transition: 'fill 0.3s ease', stroke: getComplementaryColor(slashColor), strokeWidth: '1'}}></path>
        )}
      </svg>
    </button>
  )

}

const MobileMenu = ({color,isOpen,setIsMobileMenuOpen}) => {

  return (
    <button id="mobileMenuButton" onClick={() => setIsMobileMenuOpen(!isOpen)}>
      <svg xmlns="http://w3.org" 
        viewBox="0 0 24 24" 
        width="100px" 
        height="100px" 
        fill="none" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round">
        {isOpen ? (
          <polyline points="9 18 15 12 9 6"></polyline>
        ) : <polyline points="15 18 9 12 15 6"></polyline>}
      </svg>
    </button>
  )
}

function App() {

  let [activeSection, setActiveSection] = useState('home');
  let [muteOn, setMuteOn] = useState(true);
  let [isScrolling, setIsScrolling] = useState(false);
  const muteOnRef = useRef(muteOn);
  const isScrollingRef = useRef(isScrolling);
  let [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 1200px)');

  useEffect(() => {//Porque en el useEffect de IntersectionObserver, muteOn y isScrolling no se actualizan despues de creado el observer, useRef mantiene el valor actualizado
    muteOnRef.current = muteOn;
  }, [muteOn]);

  useEffect(() => {
    isScrollingRef.current = isScrolling;
  }, [isScrolling]);

  let coloresSecciones = {home: '#000000', programming: '#7a4040', music: '#1d521d',
                   fillerData1: '#581858', fillerData2: '#3a3a21', fillerData3: '#3c4e4e',
                   fillerData4: '#1a1a3d', fillerData5: '#302222', fillerData6: '#3b2828',
                   fillerData7: '#3a2525', fillerData8: '#2b442b', fillerData9: '#000080',
                   fillerData10: '#4b0082'};
                          

  let data = Data();

  let backgroundColor;

  // Cambiar el color de fondo del body según la sección visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // El IntersectionObserver da un array de todos los elementos que hayan cambiado su visibilidad en la pagina
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          
          backgroundColor = coloresSecciones[entry.target.id];
          document.body.style.backgroundColor = coloresSecciones[entry.target.id];
          setActiveSection(entry.target.id);

          console.log(isScrollingRef.current ? 'isScrolling true, NOT playing sound' : `isScrolling false, playing sound for section ${entry.target.id}`);
          
          //Reproducir el sonido de la tecla del piano suave correspondiente a la sección
          if (!muteOnRef.current && !isScrollingRef.current) {
            const audio = new Audio(`./sounds/${entry.target.id}Soft.mp3`);
            audio.volume = 0.1;
            audio.play();
          }
        }
        const sections = document.querySelectorAll('section');
          sections.forEach(section => {
        
            document.getElementById(`${section.id}`).style.backgroundColor = backgroundColor;
            //console.log('Poniendo como Background a la seccion ',section.id,': ', backgroundColor);

  
          });
      });



    }, { threshold: 0.6}); // 60% visible para activar
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
    
      document.getElementById(`${section.id}`).style.backgroundColor = backgroundColor;
      //console.log('Poniendo como Background a la seccion ',section.id,': ', backgroundColor);

      setActiveSection(section.id);

      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);


  //const sections = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]; // Aquí defines las secciones que quieres renderizar

  const onPianoKeyClick = (sectionId) => {
    //Reproducir el sonido de la tecla del piano correspondiente a la sección
    
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsScrolling(true);
    console.log('Scroll started, isScrolling set to true');
    
    clearTimeout(window.scrollTimeout); //En caso de que el Timeout anterior no haya terminado
    window.scrollTimeout = setTimeout(() => {
      console.log('Scroll ended, isScrolling set to false');
      setIsScrolling(false);
    }, 1300); //800 ms

    if (!muteOn) {
      const audio = new Audio(`./sounds/${sectionId}.mp3`);
      audio.volume = 0.13;
      audio.play();
    }
  }
  

  console.log(isMobile ? 'Mobile view true' : 'Mobile view false');


  //AnimatePresence para animar el div en donde estan el mutebutton y el piano
  return (
    <>
      <aside>
        <MobileMenu color={getComplementaryColor(coloresSecciones[activeSection])} isOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>
        <AnimatePresence>
          {(!isMobile || isMobileMenuOpen) && (
              <motion.div
                key="transicionMenu"
                initial={{ x: -200 }}
                animate={{ x: 0 }}
                exit={{ x: -200 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <MuteButton bocinaColor={getComplementaryColor(coloresSecciones[activeSection])} slashColor={getComplementaryColor(coloresSecciones[activeSection])} muteOn={muteOn} setMuteOn={setMuteOn} />
                <Piano sections={data} activeSection={activeSection} OnClick={onPianoKeyClick} />
              </motion.div>
            )
          }
        </AnimatePresence>
      </aside>
      <main>
        <Sections/>
      </main>
    </>
  )
}

export default App
