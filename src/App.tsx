import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import ReactDOM from 'react-dom'
import './App.css'



export function App() {

const heading = <h1 id="heading">Name Changer</h1>
return heading
}


export function Name(){
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

const Card = (props: { cardData: any; }) => {
  const {cardData} = props;

  const {Name, Price} = cardData;


  return(
    <div className="card">
      <h2>{Name}</h2>
      <h3>${Price}</h3>
    </div>
  )
}

const cardDteatils = 
  {Name: "Python",
  id: 45,
  Price: 1245};

function Body(){
  return(
    <div>
      <Card key = {cardDteatils.id} cardData = {cardDteatils}/>
    </div>
  )
}

export default Body
