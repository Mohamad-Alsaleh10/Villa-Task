import { useState } from 'react'
import './App.css'
function App() {
 const [number , setNumber] = useState(0) 
 const [color , setColor] = useState("black")
  return (
    <>    
        <div className='test'>
           <h2>
               {number}
           </h2>
           <button onClick={() => setNumber((number) => number+1)}>click</button>
           <div className="box" style={{backgroundColor:color}}></div>
           <button onClick={() => setColor("green")}>change</button>
        </div>
         
    </>
  )
}

export default App
