import React from 'react'

const ColorButtons = ({onSelectColor}) => {
  return (
    <div>
<button onClick={()=>onSelectColor("red")}>Red</button>
<button onClick={()=>onSelectColor("green")}>Green</button>
<button onClick={()=>onSelectColor("blue")}>Blue</button>
    </div>
  )
}

export default ColorButtons