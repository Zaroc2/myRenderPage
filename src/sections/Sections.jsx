import { useState } from 'react'
import './sections.css';
import Data from './Data.jsx'

function Sections() {

    let sections = Data();


  return (

    Object.keys(sections).map((section,index) => {

        let Componente = sections[section];
        console.log(section);

        return(

            <section id={section}>

                <Componente key={index} />

            </section>

        )

    })

  )
}

export default Sections
