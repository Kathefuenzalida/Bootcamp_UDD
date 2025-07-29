import React, { useState } from 'react'
import ColorButtons from './ColorButtons';

const SelectorColor = () => {
    const [color, setColor] = useState("red");
    const handleSelection = (newColor) => {
        setColor(newColor);
    };

    const customStyles = {
        padding: "20px",
        marginTop: '10px',
        backgroundColor: color.toLowerCase(),
        color: 'white',
        fontWeight: 'bold',
    }; 
  
    return (
    <div>
        <h2>Color seleccionado: {color}</h2>
        <ColorButtons onSelectColor ={handleSelection}/>
        <div style={customStyles}> Este cuadro cambia segun el color seleccionado </div>
    </div>
  )
}

export default SelectorColor