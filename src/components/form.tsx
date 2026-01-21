import { useState } from "react";

function Form(){
    const [name, setName] = useState("");
    console.log(name);

    function handleSubmit(e: any){
        e.preventDefault();
        console.log("Form submitted", name);
    }


    return(
        <form onSubmit={handleSubmit}>
            <label>
                Enter Name: <input type="text" onChange={(e) => setName(e.target.value)}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Form;