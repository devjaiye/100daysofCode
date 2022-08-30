//..You can only have one default export in a file.

const info = () => {
    const name = "John Doe"
    const address = "Lagos, Nigeria"
    const age = 50

    return name + " lives in " + address + ". He is " + age + " years old."
}
export default info