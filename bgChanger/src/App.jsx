import './App.css'
import { useState } from 'react'
function App() {
  const [color, setColor] = useState('#1b1a1a');
  return (
   <>
   <div className="mainContainer" style={{backgroundColor: color}}>

    <div className='btnContainer'>
      <button className='btn' onClick={()=> setColor('red') } style={{backgroundColor:"red"}}>Red Color</button>
      <button className='btn' onClick={()=> setColor('blue') } style={{backgroundColor:"blue"}}>Blue Color</button>
      <button className='btn' onClick={()=> setColor('green') } style={{backgroundColor:"green"}}>Green Color</button>
    </div>


   </div>
   </>
  )
}

export default App
