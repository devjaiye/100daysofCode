//..Spread Operator with object

const employeeInfo = {
    name: 'John Doe', 
    gender: 'Male',
    address: 'Lagos, Nigeria',
}

const employeeJob = {
    role: 'Frontend Developer',
    requirement: 'React Js'
}

//..adding Spread Operator
const displayInfo = ({...employeeInfo, ...employeeJob})

console.log(displayInfo)