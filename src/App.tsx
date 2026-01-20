import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import ReactDOM from 'react-dom'
import './App.css'



export function App() {

const heading = <h1 id="heading">Name Changer</h1>
return heading
}


function Name(){
  const [appName, setName] = useState("Noname");

  function changeName(){
    setName("Nowhere");
    setTimeout(() => {
      setName("Nowhereelse");}, 3000)
  }

  return (
  <div>
    <h3 id="Name">{appName}</h3>
    <button onClick = {changeName}>
      Change Name
    </button>
  </div>
  )
}


export default Name
