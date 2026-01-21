import Cars from "./Cars";
// import Bike from "./Bike";




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

    return(
        <>
            <h1>Cars</h1>
            <Cars carDetails = {carDetails} color="red"/>
            {/* {console.log(brandName)} */}
            {/* <Bike bikeDetails = {bikeDetails}/> */}
        </>
    )
}

export default Garage;