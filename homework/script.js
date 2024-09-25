//1Create a string, number, boolean, undefined, null, symbol, and bigint variable.

let mystring = ("CS305")
let mynumber = 20
let myboolean = true
let myundefined = undefined 
let mynull = null 
let mysymbol = Symbol("Hi")
let mybigint = 123456789012345678901234567890n

//2.Print each variable type using typeof.

console.log(typeof mystring)
console.log(typeof mynumber)
console.log(typeof myboolean)
console.log(typeof myundefined)
console.log(typeof mynull)
console.log(typeof mysymbol)
console.log(typeof bigint)

//3.Use let, const, and var to declare variables and explain their differences with examples.

let city = "Gabala"
city = "Baku"
console.log(city);

// const name = "Gunel"
// name = "Aisha" 
// console.log(name);


var country1 = "Italia"
var country1 = "Azerbaijan" 
console.log(country1)


//let: allows reassignment. (You can reassign a "let" variable, but you cannot reclare it)
//const: does not allow reassignment. (You cannot reassign or redeclare a "const" variable)
//var: allows reassignment. (You can reassign or redeclare a "var")

//4.Use backticks to create a dynamic message that includes (firstName,lastName,age,country,hobby,occupation) variables.


let firstname = "Gunel"
let lastname = "Jafarova"
let age = 20 
let country = "Azerbaijan"
let hobby = "drawing"
let occupation = "Social media manager"

console.log(`Hi, Iam ${firstname} ${lastname}. I am ${age} years old, I live in ${country}. My hobby is ${hobby}, and I work as a ${occupation}.`);

//5.Use arithmetic operators (+, -, *, /, %).

let x = 5
let y = 15

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)

//6.Use comparison operators (==, ===, >, <, etc.)

let t = 15
let u = 10
let z = "15"

console.log(t == z) //returns true (because '15' is coerced to the number 15)
console.log(t === z) //returns false (because one is a string and the other is a number)
console.log(z > u) //true
console.log(u > t) //false
console.log(z >= u) //true
console.log(t <= u) //false
console.log(t != z); //returns false (because '15' is coerced to 15, so they are equal)
console.log(t != u); // true 
console.log(t !== u); // true 
console.log(u !== z); // true 
// if console.log (3 !== 3)  returns false (same value and type)






//7.Use logical operators (&&, ||, !).

let a = true 
let b = false 
let c = 15
let d = 25

console.log(a && b)
console.log(c > 5 && d > 15)
console.log(a || b)
console.log(c > 20 || d < 15)
console.log(!a)
console.log(!b) 

// Logical and (&&) The && operator returns "true" if both operands are "true", otherwise, it returns "false"
// Logical or (||) The || operator returns "true" if either operand is "true", if both operands are false, it returns "false"
// Logical not (!):The ! operator inverts the value of a boolean. It returns true if the operand is "false", and false if the operand is "true"
















