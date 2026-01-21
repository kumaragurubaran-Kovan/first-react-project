import { useState } from 'react'
import '../App.css'


function ChangeColour(){
    type backgroundColor ={
        color: string;
    }
    const [backgroundColor, setColor] = useState("slategrey");

    let buttonStyle = { backgroundColor: backgroundColor , fontSize: "20px", padding: "10px", "text-align": "middle"}

    return(
        <div id="colourChange">
            <h2>The Default colour is {backgroundColor}</h2>
            <button style={buttonStyle} onMouseEnter={() => {setColor("maroon")}} onMouseLeave={() => {setColor("slategrey")}}>change colour</button>
        </div>
    )
}

export default ChangeColour;