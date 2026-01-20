import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter ]= useState(0);
  
  function Increment(){
    if (counter<0) {
      setCounter(0);
    }
    else{
    setCounter(counter+1);
    }
  };
  
  function Decrement(){
    if (counter<0) {
      setCounter(0);
    }
    else{
    if (counter<=0) return
    setCounter(counter-1);
    }
  };
  

  return(
    <div>
      <button onClick={Increment}>
        +
      </button>
      <div>
        {counter}
      </div>
      <button onClick={Decrement}>
        -
      </button>
    </div>
  )
};


export default App
