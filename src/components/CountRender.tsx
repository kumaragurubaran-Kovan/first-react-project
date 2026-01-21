import { useState , useEffect } from "react";

function Counter(){
    const [count , setCount] = useState(0);

    // for (count; count <= 100; count+1){
    //     console.log(count)
    // }

    useEffect (() => {
        console.log("Screen Rendered!")
        // setCount(1)
        // checkCount()
        setTimeout(() => {
            setCount((previousState) => (previousState + 1))
            checkCount()
        },500)
    },[count])

    function checkCount(){
        if (count >= 10){
            setCount(0);
        }
    }

    // function updateCount(){
    //     setCount((previousState) => (previousState + 1))
    // }

    return(
        <div>
            <h1>Toatl number of Renders : {count}</h1>
            <button onClick = {() => {setCount(count + 1)}}>Render Screen</button>
        </div>
        )

}

export default Counter;