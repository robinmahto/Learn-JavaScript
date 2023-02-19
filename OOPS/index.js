// let person = {
//     firstName : "jhon",
//     lastName : "Doe"
// }

// person.greet = function(){
//     console.log("Namaste")
// }

// function greet(){
//     console.log("hello world")
// }

// person.greet = greet;

// let person = {
//     firstName : "jhon",
//     lastName : "Doe",
//     greet : function(){
//        console.log("namaste world")
//     },
//     fullName : function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// constructor function

function Person(firstName, lastName){
     this.firstName = firstName;
     this.lastName = lastName;
     this.fullName = function(){
        return this.firstName + " " + this.lastName;
     }
}

const result = new Person("jhon", "doe");
const res = new Person("mark", "wooden");

console.log(result.fullName())
console.log(res.fullName())


