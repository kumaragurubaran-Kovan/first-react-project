import Cars from "./Cars";

function Garage(){
    // const brandName = "Audi";
    // const Model = "M100";
    const carDetails = {
        brandName: "Audi",
        Model: "M100",
    }
    return(
        <>
            <h1>Cars</h1>
            <Cars carDetails = {carDetails}/>
            {/* {console.log(brandName)} */}
        </>
    )
}

export default Garage;