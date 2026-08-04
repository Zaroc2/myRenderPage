import { useState } from 'react'
import PianoKey from './PianoKey'; // o la ruta donde esté
import './Piano.css'

function Piano({sections, activeSection, OnClick}) {

    const WHITE_KEY_WIDTH = 200;
    const BLACK_KEY_WIDTH = WHITE_KEY_WIDTH/2;
    const WHITE_KEY_HEIGHT = 36;
    const BLACK_KEY_HEIGHT = 20;
    const BLACK_KEY_LEFT = WHITE_KEY_WIDTH/2;
    const KEY_GAP = 2;


    const [indexNote, setIndexNote] = useState(0); //0 = C, 1 = C#, 2 = D...
    
    const mapLetters = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const blackKeys = [1, 3, 6, 8, 10]; // Índices de las teclas negras

    let keys = []
    let octave = 0;

    let whiteNotes = 0;

    let totalSections = Object.keys(sections).length;
    let sectionName = Object.keys(sections);

    for(let i = 0; i < totalSections; i++) {

        //Asignamos el color y la posicion de cada tecla

        let color = 'white';
        let width = `${WHITE_KEY_WIDTH}px`;
        let position = 'relative';
        let top = 0;
        let left = 0;

        if(blackKeys.includes(i%12)) {
            color = 'black';
            width = `${BLACK_KEY_WIDTH}px`;
            position = 'absolute';
            top = `${ whiteNotes * (WHITE_KEY_HEIGHT + KEY_GAP) - (BLACK_KEY_HEIGHT/2 + KEY_GAP*whiteNotes)}px`;
            left = `${BLACK_KEY_LEFT}px`; // Ajusta este valor según tus necesidades
        }else{
            whiteNotes++;
            //console.log(i,whiteNotes);
        }

        keys.push({label: mapLetters[i%12], color: color, width: width, position: position, top: top, left: left, isActive: activeSection === sectionName[i]});
    
    }

  return (

    <>

        <div id="piano">

            {keys.map((key, index) => {

                let { label, color, width, position, top, left, isActive } = key;

                return (
                    <PianoKey
                        key={index}
                        label={label}
                        color={color}
                        width={width}
                        position={position}
                        top={top}
                        left={left}
                        isActive={isActive}
                        href={sectionName[index%totalSections]}
                        onClick={() => OnClick(sectionName[index%totalSections])}
                    />

                );
            })}

        </div>

    </>

  );
}

export default Piano;