type bikeProps ={
    bikeDetails: {
        brandName: string;
        Model: string;
    }
}

function Bike({bikeDetails}: bikeProps){

        const {brandName, Model} = bikeDetails;

        return(
            <>
            <h3>My Bike is {brandName} {Model}</h3>
            </>
        )

}

export default Bike;