//..Spread Operator (...) makes it easy to for us to combine all or part of
//.. the element of an array or object into another

const fruits= ['orange', 'apple', 'mango', 'banana']
const number = [1,2,3,4,5,6,7]

spreadArray = [...fruits, ...number]

console.log(spreadArray)