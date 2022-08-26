/*  
When you Destruct an object, its properties do not have 
to be declared in a specific order.
*/ 

const vehicleInfo = {
    brand: 'Tesla', 
    model: 'Range Plus',
    color: 'blue',
    year: 2022,
    type: 'car'
}

latestVehicle(vehicleInfo)

//..our destruction is passed as a param in the function 
function latestVehicle ({brand, type, color, model, year}){
    const info = "This is the latest " + brand + " " + type + "," + " " +
     color + " " + model + " "+ year + " model" 
    console.log(info)
}
