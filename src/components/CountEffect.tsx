import { useState, useEffect } from "react";

function Counter(){
    const [count , setCount] = useState(0);
    const [count1 , setCount1] = useState(0);
    const [count2 , setCount2] = useState(0);

    useEffect(()=>{
        console.log("Screen Rendered-Missing-1!")
    })

    useEffect(()=>{
        console.log("Screen Rendered-Empty-2!")
    },[])

    useEffect(()=>{
        console.log("Screen Rendered-Single-3!")
    },[count])

    useEffect(()=>{
        console.log("Screen Rendered-Double-4!")
    },[count, count1])

    return(
        <div>
            <button onClick={()=>{setCount(count+1)}}>Render</button>
            <button onClick={()=>{setCount1(count1+1)}}>Render</button>
            <button onClick={()=>{setCount2(count2+1)}}>Render</button>
        </div>
    )

}

export default Counter;