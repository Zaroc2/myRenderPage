import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Piano from './piano/Piano.jsx';
import Sections from './sections/Sections.jsx'
import Data from './sections/Data.jsx'
import { useEffect } from 'react';

function App() {

  let coloresSecciones = {home: '#000000', programming: '#7a4040', music: '#1d521d',
                   fillerData1: '#581858', fillerData2: '#3a3a21', fillerData3: '#3c4e4e',
                   fillerData4: '#1a1a3d', fillerData5: '#302222', fillerData6: '#3b2828',
                   fillerData7: '#3a2525', fillerData8: '#2b442b', fillerData9: '#000080'};
                          

  let data = Data();

  let backgroundColor;

  // Cambiar el color de fondo del body según la sección visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // El IntersectionObserver da un array de todos los elementos que hayan cambiado su visibilidad en la pagina

      
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          
          /*let colorSeccionAntigua = getComputedStyle(document.body).backgroundColor;
          document.body.style.backgroundColor = getComputedStyle(entry.target).backgroundColor;
          
          let section = document.getElementById(`${entry.target.id}`);*/
          
          console.log('El color de la seccion actual deberia ser: ', coloresSecciones[entry.target.id]);
          backgroundColor = coloresSecciones[entry.target.id];
          document.body.style.backgroundColor = coloresSecciones[entry.target.id];
          
          /*let colorSeccionSiguiente = getComputedStyle(section).backgroundColor;
          console.log('El estilo es: ', colorSeccionAntigua, ' y el color de la siguiente sección es: ', colorSeccionSiguiente);*/
        }
        const sections = document.querySelectorAll('section');
          sections.forEach(section => {
        
            document.getElementById(`${section.id}`).style.backgroundColor = backgroundColor;
            console.log('Poniendo como Background a la seccion ',section.id,': ', backgroundColor);
  
          });
      });



    }, { threshold: 0.6}); // 60% visible para activar
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
    
      document.getElementById(`${section.id}`).style.backgroundColor = backgroundColor;
      console.log('Poniendo como Background a la seccion ',section.id,': ', backgroundColor);

      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);


  //const sections = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]; // Aquí defines las secciones que quieres renderizar


  console.log(data);

  return (
    <>
      <aside><Piano sections={data} /></aside>
      <main><Sections/></main>
    </>
  )
}

export default App
