import React from 'react';
import { motion } from 'framer-motion';
import styles from './PianoKey.module.css';

const PianoKey = ({ label, color, width, position, top, left, isActive, href, onClick }) => {

  const WHITE_KEY_HEIGHT = 36;
  const BLACK_KEY_HEIGHT = 20;

  let borderColor = color === 'white' ? 'black' : 'white';
  const zIndex = color === 'white' ? 1 : 2; // Asegúrate de que las teclas negras estén por encima de las blancas
  const height = color === 'white' ? `${WHITE_KEY_HEIGHT}px` : `${BLACK_KEY_HEIGHT}px`; // Ajusta la altura según el color de la tecla

  if (isActive) {
    console.log('La tecla ', label, ' está activa');
    borderColor = document.body.style.backgroundColor; // Cambia el color del borde si la tecla está activa
  }

  return (
    <a href={`#${href}`}>
      <motion.button
      className={`${styles.key} ${isActive ? styles.isActive : ''}`}
      style={{ backgroundColor: color, 
               color: borderColor, 
               width: width, 
               position: position, 
               top: top,
               left: left,
               height: height,
               zIndex: zIndex,
               fontWeight: 'bold',}}
      onClick={onClick}
      whileHover={{ borderColor: borderColor }}
    >
      <span className={styles.label}>{href}</span>
    </motion.button>
    </a>
  );
};

export default PianoKey;
