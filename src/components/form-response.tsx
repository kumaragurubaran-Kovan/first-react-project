import { useEffect, useState } from "react";
import Form from "./form";

// function getResponse(){
//     const saved = localStorage.getItem("formData");
//     return saved
//     ? JSON.parse(saved)
//     : { Name: "", Email: "", Phone: "", Message: "", Country: "", Gender: "", Education: ""};
// }

function viewResponse(){
    
    const [response, setResponse ] = useState<any>([])
    const[editIndex, setEditIndex] = useState()
    const[editData, setEditData] = useState()


    useEffect(()=>{
        const saved = localStorage.getItem("formData");
         console.log("saved1:", saved)

        if(saved){
            console.log("response:",response)
            console.log("type111:",typeof saved)
            setResponse(JSON.parse(saved))
        }
    },[])
    
    console.log("saved2:", response)
    console.log("typee",typeof response)

    const responseData = response.map(formResponse =>({
        
            Name: formResponse.Name,
            Email: formResponse.Email,
            Phone: formResponse.Phone,
            Message: formResponse.Message,
            Country: formResponse.Country,
            Gender: formResponse.Gender,
            Education: formResponse.Education,
        
        
    }));


    console.log("responseData1 :",responseData)
    responseData.forEach(item => {
        console.log(item.Name);
    });

    function deleteResponse(index:number){
        const updatedResponse = response.filter((_,i)=> i !== index)
        setResponse(updatedResponse)
        localStorage.setItem("formData", JSON.stringify(updatedResponse))
        console.log("updated response",updatedResponse)
    }

    function startEdit(index:number){
        setEditIndex(index)
        setEditData({...response[index]})
    }   

    function handleEditChange(e:any){
        // if(!editData) return;
        const{name, value} = e.target
        setEditData({
            ...editData, 
            [name]:value,
        })
    }              

    function saveEdit() {
        if (editIndex === null || !editData) return;

        const updatedResponses = response.map((item, index) =>
            index === editIndex ? editData : item
        );

        setResponse(updatedResponses);
        localStorage.setItem("formData", JSON.stringify(updatedResponses));

        setEditIndex(null);
        setEditData(null);
    }

    return(
        <div className="flex flex-col bg-blue-950 items-center">
            <div className="w-120 bg-white m-10 p-10 rounded-xl h-126 overflow-y-auto">
                <div className="flex justify-between">
                    <h1 className="font-bold text-xl">Submitted Form</h1>
                    <a href="/">
                        <button className="mx-3 font-semibold hover:cursor-pointer has-checked:bg-blue-600 "  >
                            {"< Back"}
                        </button>
                    </a>
                </div>
                {/* <div className="flex flex-col place-left text-left text-black mt-4">
                    <h1 className="font-semibold"> Name </h1>
                    <div className="bg-slate-50/50 border-2 border-slate-400 px-2 py-1 rounded-lg">{response.Name}</div>
                </div>
                <div className="flex flex-col place-left text-left text-black mt-4">
                    <h1 className="font-semibold"> Email </h1>
                    <div className="bg-slate-50/50 border-2 border-slate-400 px-2 py-1 rounded-lg">{response.Email}</div>
                </div>
                <div className="flex flex-col place-left text-left text-black mt-4">
                    <h1 className="font-semibold"> Phone </h1>
                    <div className="bg-slate-50/50 border-2 border-slate-400 px-2 py-1 rounded-lg">{response.Phone}</div>
                </div>
                <div className="flex flex-col place-left text-left text-black mt-4">
                    <h1 className="font-semibold"> Message </h1>
                    <div className="bg-slate-50/50 border-2 border-slate-400 px-2 py-1 rounded-lg">{response.Message}</div>
                </div>
                <div className="flex flex-col place-left text-left text-black mt-4">
                    <h1 className="font-semibold"> Country </h1>
                    <div className="bg-slate-50/50 border-2 border-slate-400 px-2 py-1 rounded-lg">{response.Country}</div>
                </div>
                <div className="flex flex-col place-left text-left text-black mt-4">
                    <h1 className="font-semibold"> Gender </h1>
                    <div className="bg-slate-50/50 border-2 border-slate-400 px-2 py-1 rounded-lg">{response.Gender}</div>
                </div>
                <div className="flex flex-col place-left text-left text-black mt-4">
                    <h1 className="font-semibold"> Education </h1>
                    <div className="bg-slate-50/50 border-2 border-slate-400 px-2 py-1 rounded-lg">{response.Education}</div>
                </div> */}
                {response.map((item,index)=>(
                    <div key={index} className=" mt-4 bg-red-50 border-2 border-red-900/20 p-4 rounded-lg">

                    {editIndex === index ? (
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <h1 className="font-bold text-red-950"> Name </h1>
                                <input className="border-2 rounded border-slate-600" name="Name" value={editData?.Name || ""} onChange={handleEditChange} />
                            </div>
                            <div className="flex justify-between">
                                <h1 className="font-bold text-red-950"> Email </h1>
                                <input className="border-2 rounded border-slate-600" name="Email" value={editData?.Email || ""} onChange={handleEditChange} />
                            </div>
                            <div className="flex justify-between">
                                <h1 className="font-bold text-red-950"> Phone </h1>
                                <input className="border-2 rounded border-slate-600" name="Phone" value={editData?.Phone || ""} onChange={handleEditChange} />
                            </div>
                            <div className="flex justify-between">
                                <h1 className="font-bold text-red-950"> Message </h1>
                                <input className="border-2 rounded border-slate-600" name="Message" value={editData?.Message || ""} onChange={handleEditChange} />
                            </div>
                            <div className="flex justify-between">
                                <h1 className="font-bold text-red-950"> Country </h1>
                                <input className="border-2 rounded border-slate-600" name="Country" value={editData?.Country || ""} onChange={handleEditChange} />
                            </div>
                            <div className="flex justify-between">
                                <h1 className="font-bold text-red-950"> Gender </h1>
                                <input className="border-2 rounded border-slate-600" name="Gender" value={editData?.Gender || ""} onChange={handleEditChange} />
                            </div>
                            <div className="flex justify-between">
                                <h1 className="font-bold text-red-950"> Education </h1>
                                <input className="border-2 rounded border-slate-600" name="Education" value={editData?.Education || ""} onChange={handleEditChange} />
                            </div>

                            <button className="bg-blue-500 text-white w-full py-1 rounded-lg" onClick={saveEdit}>Save</button>
                        </div>
                        ) : (
                        <>
                            <div className="flex gap-6">
                                <h1 className="font-bold text-red-950"> Name </h1>
                                <div className="">{item.Name}</div>
                            </div>
                            <div className="flex gap-6">
                                <h1 className="font-bold text-red-950"> Email </h1>
                                <div className="">{item.Email}</div>
                            </div>
                            <div className="flex gap-6">
                                <h1 className="font-bold text-red-950"> Phone </h1>
                                <div className="">{item.Phone}</div>
                            </div>
                            <div className="flex gap-6">
                                <h1 className="font-bold text-red-950"> Message </h1>
                                <div className="">{item.Message}</div>
                            </div>
                            <div className="flex gap-6">
                                <h1 className="font-bold text-red-950"> Country </h1>
                                <div className="">{item.Country}</div>
                            </div>
                            <div className="flex gap-6">
                                <h1 className="font-bold text-red-950"> Gender </h1>
                                <div className="">{item.Gender}</div>
                            </div>
                            <div className="flex gap-6">
                                <h1 className="font-bold text-red-950"> Education </h1>
                                <div className="">{item.Education}</div>
                            </div>
                            

                            
                            <div className="flex gap-6 mt-2 ">
                                <button className="bg-blue-500 text-white w-full py-1 rounded-lg" onClick={()=>startEdit(index)}>
                                    Edit
                                </button>
                                <button className="bg-red-500 text-white w-full py-1 rounded-lg" onClick={()=>deleteResponse(index)}> 
                                    Delete
                                </button>
                            </div>
                        </>
                        )}

                        
                    </div>
                ))}
            </div>
            
        </div>

    )
}

export default viewResponse;