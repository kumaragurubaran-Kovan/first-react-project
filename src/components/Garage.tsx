import Cars from "./Cars";
import Bike from "./Bike";


function Garage(){
    // const brandName = "Audi";
    // const Model = "M100";
    const carDetails= {
        brandName: "Audi",
        Model: "M100",
    }

    const bikeDetails = {
        brandName: "Bajaj",
        Model: "AR",
    }

    const bikeCondition = bikeDetails.brandName !== undefined && bikeDetails.Model !== undefined;
    
    const bikeList = [
        {
        brandName: "Bajaj",
        Model: "AR",
        },
        {
        brandName: "BMW",
        Model: "AR",
        },
        {
        brandName: "Yamaha",
        Model: "AR",
        },
        {
        brandName: "Enfield",
        Model: "AR",
        },
    ]

    const numList =[1,2,3,4,5]
    return(
        <>
            <h1>Cars</h1>
            <ul>
                {bikeList.map((bikeDetails) => {
                    return(
                        <li key={bikeDetails.brandName}><Bike bikeDetails = {bikeDetails}/></li>
                    )
                    })}
            </ul>
            <ul>
                {numList.map((e, index) => <h1 key= {index}>{e}</h1>)}
            </ul>
            <Cars carDetails = {carDetails} color="red"/>
            {/* {console.log(brandName)} */}
            { bikeCondition ?
            <Bike bikeDetails = {bikeDetails}/> :null}
        </>
    )
}

export default Garage;