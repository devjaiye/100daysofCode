// React ES6 Classes

class Person{
    constructor(name){
        this.friend = name
    }
    //...Method in classes
    details (){
        return "My friend is " + this.friend
    }
    //..end...
}

const myFriend = new Person ("John Doe")
console.log(myFriend.details()) //

//..Class inheritance...
class Car{
    constructor(name){
        this.brand = name
    }
    details(){
        return "I drive a "+ this.brand
    }
}

class Model extends Car{
    constructor(name, mod){
        super(name) //...The super() method refers to the parent class.
        this.model = mod
    }
    display(){
        return this.details() + ", the model is "+ this.model
    }
}
const info = new Model("Toyota","Camry")
console.log(info.display())