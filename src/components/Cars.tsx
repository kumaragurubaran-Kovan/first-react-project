function Cars(props: any){

    // const {brandName, Model, color} = props;
    // console.log(brandName)   
    const {carDetails} =props;
    const {brandName, Model} = carDetails;
    const color = "red";
    return(
        <>
            <h2>
                My car is {color} colour {brandName} {Model}.
            </h2>
        </>
    )
}

export default Cars;
