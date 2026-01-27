import { useState } from "react";
import {getNames} from "country-list";  


function Form(){
    const [input, setInput] = useState({});
    console.log(input);

    function handleSubmit(e: any){
        e.preventDefault();
        console.log("Form submitted", input);
    }

    function handleChange(e:any){
        // return(
        // (previousState: any, e:any) => setInput(...prviousState , e.target.value)
        // )
        const name = e.target.name;
        const value = e.target.value;

        setInput((previousState: any) => {

            return{
                ...previousState,
                [name]:value
            }
        })
    }

    const countries = getNames();

    return(
        <form className="flex flex-col bg-blue-950 items-center" onSubmit={handleSubmit}>
            <div className="w-120 bg-white m-10 p-10 rounded-xl h-126 overflow-y-auto">
                <label className="flex flex-col place-left text-left">
                    Name <br/>
                    <input className="border-2 p-1 rounded-md mt-1 border-slate-400" type="text" minLength={3} name="Name" onChange={handleChange} placeholder="Enter Your Name" required/>
                </label><br/>

                <label className="flex flex-col place-left text-left">
                    Email <br/>
                    <input className="border-2 p-1 rounded-md mt-1 border-slate-400" type="email" name="Email" onChange={handleChange} placeholder="Enter Your Email" required/>
                </label><br/>

                <label className="flex flex-col place-left text-left">
                    Phone Number <br/>
                    <input className="border-2 p-1 rounded-md mt-1 border-slate-400" type="tel" minLength={10} maxLength={10} pattern="[0-9]{10}" name="Phone" onChange={handleChange} placeholder="Enter Your Phone" required/>
                </label><br/>

                <label className="flex flex-col place-left text-left">
                    Message <br/>
                    <textarea className="border-2 p-1 rounded-md mt-1 border-slate-400" name="Message" onChange={handleChange} placeholder="Enter Your Message"/>
                </label><br/>

                <label className="flex flex-col place-left text-left">
                    Country <br/>
                    <select className="border-2 p-1 rounded-md mt-1 border-slate-400" name="Country" onChange={handleChange} required >
                    <option value="" >Select</option>
                    {
                        countries.map((country)=>(
                            <option key={country} value={country}>{country}</option>
                        ))
                    }                
                    
                    </select>
                </label><br/>

                <label className="flex place-left text-left">
                    Gender 
                    
                    <input className="ml-6 mr-2" type="radio" name="Gender" onChange={handleChange} value="Male" required/>
                    Male

                    <input className="ml-6 mr-2" type="radio" name="Gender" onChange={handleChange} value="Female" required/>
                    Female
                    
                </label><br/>

                <label className="flex flex-col place-left text-left">
                    Education <br/>
                    <input className="border-2 p-1 rounded-md mt-1 border-slate-400" type="text" name="Education" onChange={handleChange} placeholder="Enter Your Education" required/>
                </label><br/>

                <button className="bg-blue-950 w-full py-2 text-white rounded-xl " type="submit" value="Submit">Submit</button>
            </div>
        </form>
    )
}

export default Form;