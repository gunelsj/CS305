const nuns = [4, 5, 7, 8, 10, 33, 0]

//1.Mult nuns
// 2. select numbers between 5 and 10
//3. select only true numbers
//4. sun only add numbers
//5. mult only even numbers


//1

//let mult = 1
//for (let i = 0; i < nums.length; i++) {
    // mult *= nums[i]
//}
//console.log('mult', mult)



//2 

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i]>5 && nums[i]<10 ) {

//     }
//     }
//    console.log("nuns", nuns);
   

//     //3 
//     for (let i = 0; i < nums.length; i++) {
//         if (nuns[i]) {
//     console.log(nuns[i]);
    
//         }
//         }
       
    
//     //4 
//     let sum1= 1
// for (let i = 1; i < nums.length; i++) {
//     sum += nums[i]
// }
// console.log('sum', sum)


// //5 

// // let mult = 1
// for (let i = 0; i < nums.length; i++) {
//     mult *= nums[i]
// }
// console.log('mult', mult)


const users = [
    {
        id: 1,
        name: 'Polad',
        gender: 'Male',
        age: 18
    }, 
    {
        id: 6,
        name: 'Gunel',
        gender: 'Female',
        age: 20
    },
    {
        id: 2,
        name: 'Sabir',
        gender: 'Male',
        age: 30
    },
    {
        id: 3,
        name: 'Aisha',
        gender: 'Female',
        age: 21
    },
    {
        id: 4,
        name: 'Ahmet',
        gender: 'Male',
        age: 22
    },
]
  

//4 //1 
// let sum = 0
const result = users.filter(item => item.age * 10)
console.log('result', result)



//3 

const result1 = users.filter(item => item.age > 25)
console.log('result1', result1)

//2
const result2 = users.filter(item => item.gender !== 'Female')
console.log('result2', result2)

//1 
let sum = 0 
const result3 = users.map(item => sum += item.age  )
console.log("sum", sum)

//1. Sum all age (map)
//2. find only Females (filter)
//3. find user whose age is greater than 25 (filter)
//4. mult each users age with 10 (map)
