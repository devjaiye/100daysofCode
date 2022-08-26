//..destructure in nested objects

const vehicleInfo = {
    brand: 'Tesla', 
    model: 'Range Plus',
    color: 'blue',
    year: 2022,
    type: 'car', 
    registration:{
       city: 'Ikeja',
       state: 'Lagos', 
       country: 'Nigeria'     
    }
}

showInfo(vehicleInfo)
//...inside the param, we use the curly braces to 
//..destructure the element we want in the nested object 
function showInfo({brand, registration: {city, state}}){
    console.log("Vehicle brand is " + brand + ". Registered in " + city + ", "+ state)
}