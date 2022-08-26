/*Destructuring is the process of taking a particular element or object
 from an array. For instance, picking a book you want to read on the shelf. 
Destructuring makes it easy to extract only what is needed */

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