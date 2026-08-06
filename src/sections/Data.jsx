import { useState } from 'react'
import './sections.css';

function Data(){

    const data = {

        home: Home,
        programming: Programming,
        music: Music,
        fillerData1: FillerData1,
        fillerData2: FillerData2,
        fillerData3: FillerData1,
        fillerData4: FillerData2,
        fillerData5: FillerData1,
        fillerData6: FillerData2,
        fillerData7: FillerData1,
        fillerData8: FillerData2,
        fillerData9: FillerData1,
        fillerData10: FillerData2,

    }
    
    return data;

}

const Home = () => {

    return (
        <div className='data' id='Home'>
            <h1>MOCK-UP DATA</h1>
            <h1>Hola, soy maurisio</h1>
            <p>Desarrollador Full <s>Stack</s> de comida | Músico <s>de baño</s> | Políglota <s>Hablo español y el idioma de la verdad</s></p>
            <p>
            Apasionado por la tecnología, la música y los idiomas. 
            </p>
        </div>
    )
}

const Programming = () => {

    return (

        <div className='data' id='Programming'>
            <h1>MOCK-UP DATA</h1>
            <h3>Frontend</h3>
            <ul>
                <li>React</li>
                <li>Vue.js</li>
                <li>HTML5 / CSS3</li>
                <li>Tailwind CSS</li>
            </ul>
            <h3>Backend</h3>
            <ul>
                <li>Node.js</li>
                <li>Python (Flask)</li>
                <li>Java (Spring)</li>
                <li>PostgreSQL</li>
            </ul>
            <h3>Otros</h3>
            <ul>
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>CI/CD</li>
                <li>OpenGL</li>
            </ul>
            <h3>Proyectos destacados</h3>
            <ul>
            <li>🎹 Portafolio interactivo con piano</li>
            <li>📦 Motor gráfico 2D en C++</li>
            <li>✅ Task Manager con React</li>
            </ul>
        </div>

    )
}

const Music = () => {

    return (

        <div className='data' id='Music'>
            <h1>MOCK-UP DATA</h1>
            <h2>🎵 Mi experiencia musical <s>se tocar un acorde disminuido en guitarra</s></h2>
              <span>🎹</span>
               <p>Piano</p>
           <span>🎸</span>
           <p>Guitarra</p>
           <span>🥁</span>
           <p>Batería <s>(ojala, es un sueño)</s></p>
         <h3>Géneros favoritos</h3>
           <ul>
            <li>Rock</li>
            <li>Jazz</li>
            <li>Clásica</li>
            <li>Electrónica</li>
            <li>Folk</li>
           </ul>
         <h3>Bandas favoritas</h3>
         <ul>
           <li>Pink Floyd</li>
           <li>Radiohead</li>
           <li>Los Beatles</li>
           <li>Nina Simone</li>
         </ul>
        </div>
    )

}

const FillerData1 = () => {

    return (
        <div className='data' id='FillerData'>
            <h1>MOCK-UP DATA</h1>
            <h1>Sección de relleno</h1>
            <p>Necesito mas info pero antes quiero que todo funcione bien</p>
        </div>
    )
}

const FillerData2 = () => {

    return (
        <div className='data' id='FillerData'>
            <h1>MOCK-UP DATA</h1>
            <h1>Sección de relleno</h1>
            <p>Eventualmente buscare llenarlo de cositas para que haya 12 y se vea un teclado completo y bonito</p>
        </div>
    )
}

export default Data
