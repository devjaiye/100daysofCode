
function calculator(x,y){
    addition = x + y
    substraction = x - y
    multiplication = x * y
    division = x / y

    return [addition, substraction, multiplication, division]
}

 [addition, substraction, multiplication, division] = calculator(2,10)

console.log("Addition: " + addition)
console.log("substraction: " + substraction)
console.log("Multiplication: " + multiplication)
console.log("Division: " + division) 