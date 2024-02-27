import React from 'react';
import "./NextCleaning.Style.css"

interface MiComponenteProps {
  // Definir las propiedades del componente, si es necesario
}

const MiComponente: React.FC<MiComponenteProps> = () => {


  // Resto del código del componente

  return (
    <div className='wrapper'>
      
      <h1 className='tittle'>Próxima Limpieza</h1>
      <span className='timer'>6:34:45</span>

    </div>
  );
}

export default MiComponente;
