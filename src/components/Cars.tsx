type GarageProps = {
    carDetails: {
    brandName: string;
    Model: string;}
    color: string;
}



function Cars({carDetails, color}: GarageProps){



    // const {brandName, Model, color} = props;
    // console.log(brandName)   
  
    const {brandName, Model} = carDetails;
  
    return(
        <>
            <h2>
                My car is {color} colour {brandName} {Model}.
            </h2>
        </>
    )
}

export default Cars;
