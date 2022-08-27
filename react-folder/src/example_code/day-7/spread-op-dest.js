//..Using Spread Operator with destructure....

numbersArray = [1,3,4,5,6]

//..create variables: one and two will locate the first and second element in the array
//..rest refers to the remaining elements in the array
const [one, two,...rest] = numbersArray

//..print 
console.log(one)
console.log(two)
console.log(rest)