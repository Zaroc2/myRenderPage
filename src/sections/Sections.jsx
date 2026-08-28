import { useState } from 'react'
import './sections.css';
import Data from './Data.jsx'

function Sections({isVisible}) {

    let sections = Data();


  return (

    Object.keys(sections).map((section,index) => {

        let Componente = sections[section];
        //console.log(section);

        return(

            <section id={section} key={section}>

                <Componente key={index} isVisible={isVisible}/>

            </section>

        )

    })

  )
}

export default Sections
