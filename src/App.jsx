import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Piano from './Piano.jsx';

function App() {
  const [count, setCount] = useState(0)

  const sections = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]; // Aquí defines las secciones que quieres renderizar

  return (
    <>
      <Piano sections={sections} />  
    </>
  )
}

export default App
