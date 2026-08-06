import React from 'react';
import { motion } from 'framer-motion';
import styles from './PianoKey.module.css';

const PianoKey = ({ label, color, width, position, top, left, isActive, sectionId, onClick }) => {

  const WHITE_KEY_HEIGHT = 36;
  const BLACK_KEY_HEIGHT = 20;

  let borderColor = color === 'white' ? 'black' : 'white';
  const zIndex = color === 'white' ? 1 : 2; // Asegúrate de que las teclas negras estén por encima de las blancas
  const height = color === 'white' ? `${WHITE_KEY_HEIGHT}px` : `${BLACK_KEY_HEIGHT}px`; // Ajusta la altura según el color de la tecla

  if (isActive) {
    borderColor = document.body.style.backgroundColor; // Cambia el color del borde si la tecla está activa
  }

  return (
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
      <span className={styles.label}>{sectionId}</span>
    </motion.button>
  );
};

export default PianoKey;
