import { useState, useEffect, useRef } from 'react';

export function useMediaQuery(query) {
  // Estado inicial: evaluamos la query al montar
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    // Función que actualiza el estado cuando cambia el tamaño
    const listener = (e) => setMatches(e.matches);
    
    // Escuchar cambios en el tamaño de pantalla
    media.addEventListener('change', listener);
    
    // Limpiar el listener al desmontar
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}


export function getComplementaryColor(hex) {
  // Eliminar el símbolo '#' si está presente
  hex = hex.replace('#', '');
  // Convertir el color hexadecimal a valores RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  // Calcular el color complementario (inverso)
  const complementaryR = 255 - r;
  const complementaryG = 255 - g;
  const complementaryB = 255 - b;
  // Convertir los valores RGB del color complementario a hexadecimal
  return `#${complementaryR.toString(16).padStart(2, '0')}${complementaryG.toString(16).padStart(2, '0')}${complementaryB.toString(16).padStart(2, '0')}`;
}
