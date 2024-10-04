//const ages = [20, 33, 21, 21, 18, 24, 22, 23, 18, 23, 18, 33, 43]
//const result = ages.reduce ((sum, item) => sum + item, 0) / ages.length
// console.log("result", Math.rount(result))



// function sum() {
//    console.log("before return")
//    console.log("before return")
//    console.log("before return")
//    console.log("before return")
//    return "okey"
//    console.log("after return");
//    console.log("after return");
//    console.log("after return");
//    console.log("after return");
// }

// console.log(sum());


// function sum() {
//     return 
// }

const arr1 = [21, 33, 21, 21, 18, 24, 22, 23, 18, 23, 18, 33, 43]
const arr2 = [20, 34, 17, 17, 18, 24, 22, 23, 18, 23, 18, 34, 43]

// Tasks
// 1. create function which calc a and b
function sum1 (a,b) {
    return (a + b)
 }
 console.log(sum1(30,444));

// 2. create function which mult values of  'arr1' or 'arr2' (reduce)

function calc(arr) {
    return arr.reduce((total, num) => total * num, 1);
}
console.log(calc(arr1))
console.log(calc(arr2))

// 3. create function which take two parameters (firstName and lastName)
function sum(firstName, lastName) {
    return firstName + lastName
}
console.log("Gunel", "Jafarova")

