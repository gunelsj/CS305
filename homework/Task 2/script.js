////////////// TASK 1 //////////////

// 1.Multiply 12 with 8, and console the result:

console.log(12 * 8);

// 2.Divide 10 by 2 add result to variables x, and console x:

let x = 10 / 2

console.log(x)

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.

let num1 = 20
let num2 = 17

console.log(num1 + num2)

// 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'), then add them to varibale name (info) and console info. 

let name = 'Gunel'
let surname = 'Jafarova'
let year = 2003
let info = name + ' ' + surname + ',' + year

console.log(info)


// 5.Console the remainder(%) when 17 is divided by 12.

console.log(17 % 12)

// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again and reassign value Gence, console result.

let cityName = 'Baku'
cityName = 'Gence'
console.log(cityName);


////////////// TASK 2 //////////////

{
  let test = "something"
  console.log('test2', test); // test2 something
}
console.log('test3', test);  // test3 undefined


console.log('test1', test);  // test1 undefined
{
  var test = "something"
  console.log('test2', test); // test2 something
}
console.log('test3', test); // test2 something


////////////// TASK 4 //////////////

const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]

// 1.Sum all the numbers in 'arr1'

let sum = 0
for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i]
}

// 2.Add two numbers (10,88) to end of arr1 (push methods)

arr1.push(10, 88)
console.log("arr1", arr1)

// 3.Remove first two numbers from arr1

arr1.splice(0, 2);
console.log(arr1);

// 4.Add three numbers (0,9,11) in front of arr1(unshift)

arr1.splice(0, 0, 0, 9, 11);
console.log(arr1);

// 5.Remove four numbers in front of arr1(shift)
arr1.splice(0, 4)
console.log(arr1);



////////////// TASK 3 //////////////

//Find the type of all the following cases

let name1 = "Ulfat";
console.log(typeof name1);
let surname1 = "Zakirli";
console.log(typeof surname1);
let year1 = 2000;
console.log(typeof year1);
year1 = "2000";
console.log(typeof year1);
let city;
console.log(typeof city);
let qualification = null;
console.log(typeof qualification);
let obj = { name: "ulfat" };
console.log(typeof obj);
let arr = ["a", "b", "c"];
console.log(typeof arr);

////////////// TASK 5 //////////////

// 1.Create a object add your name, surname, age and city.
const infoObj ={
    name:"Gunel",
    surname:"Ceferova",
    age:20,
    city:"Baku"
}
// 2.Then change name to "Jhon"
infoObj.name = "Jhon"
console.log(infoObj.name);



const user = {
    email: 'gunelsj@code.edu.az',
    info: {
        gender: 'Female',
        loc: {
            city: "Baku",
            street: 'Svetlana Mammadova 88f',
            education: {
                "uni name": "ADNSU",
            }
        }
    }
}

// 3.console each value of user object

console.log(user.email);
console.log(user.info.gender);
console.log(user.info.loc.city);
console.log(user.info.loc.street);
console.log(user.info.loc.education["uni name"]);

// 4.Console only keys of user
for (keys in user){
    console.log(user.keys)
    
}

const mixedObject = {
    name: "Gunel",
    age: 20,
    isStudent: false,
    hobbies: null,
    year: 2024,
    address: undefined,
    surname: 'Jafarova',
    contactInfo: {
        email: "gunelsj@code.edu.az",
        phone: null,
    },
    scores: [98, 87, 92],
}


// 5.Console only values of user

const mixedObject1 = {
    name: "Gunel",
    age: 20,
    isStudent: false,
    hobbies: null,
    year: 2024,
    address: undefined,
    surname: 'Jafarova',
    contactInfo: {
        email: "gunelsj@code.edu.az",
        phone: null,
        scores: [98, 87, 92] }
    }
// 6.Log only the 'keys' whose values are of type string

i=0
for (key in mixedObject) {
  type = typeof mixedObject[key];
  if ((type === 'string')) {
    console.log(key);
    i=i+1
    continue
  }else if(i=0) {
    console.log("no such value");
  }
    
}
console.log(" ")

//for (key in mixedObject) {
 // if (typeof mixedObject[key] === 'string') {
  //  console.log(key);
  //}
//} (bu variantda ola bilər)

// 7.Log only the 'keys' whose values are of type number
i=0
for (key in mixedObject) {
    type = typeof mixedObject[key];
    if ((type === 'number')) {
        console.log(key);
        i=i+1
    }else if(i=0){
        console.log("no such value");
    }
   
  
}
console.log(" ");


//for (key in mixedObject) {
  //if (typeof mixedObject[key] === 'number') {
  //  console.log(key);
  //}
//} (bu variantda ola bilər)


// 8.Log only the 'keys' whose values are of type boolean

i=0
for (key in mixedObject) {
  type = typeof mixedObject[key];
  if ((type === 'boolean')) {
    console.log(key);
    i=i+1
  }else if (i=0){
    console.log("no such value");
  }

}
console.log(" ");

//for (key in mixedObject) {
  //if (typeof mixedObject[key] === 'boolean') {
   // console.log(key);
  //}
//} (bu variantda ola bilər)


// 9.Log only the 'keys' whose values are of type undefined

i=0
for (key in mixedObject) {
    type = typeof mixedObject[key];
    if ((type === 'underfined')) {
      console.log(key);
      i=i+1
    }else if(i=0){
        console.log("no such value");
    }
  }
  console.log(" ");

  //for (key in mixedObject) {
  //if (typeof mixedObject[key] === 'undefined') {
   // console.log(key);
  //}
//} (bu variantda ola bilər)


// 10.Log only the 'keys' whose values are of type object

i=0
for (key in mixedObject) {
    type = typeof mixedObject[key];
    if ((type === 'object')) {
      console.log(key);
      i=i+1
    }else if(i=0){
        console.log("no such value");
    }
  }
  console.log(" ")

//for (key in mixedObject) {
  //if (typeof mixedObject[key] === 'object' && mixedObject[key] !== null) {
  //  console.log(key);
  //}
//}


// 11.Repeat (6,7,8,9,10) tasks but now log 'values'

i=0
for (key in mixedObject) {
  type = typeof mixedObject[key];
  if ((type === 'string')) {
    console.log(key + ":" + mixedObject[key]);
    i=i+1
    continue
  }else if(i=0) {
    console.log("no such value");
  }
    
}
console.log(" ");

//for (key in mixedObject) {
  //if (typeof mixedObject[key] === 'string') {
    //console.log(key + ": " + mixedObject[key]);
 // }
//}


i=0
for (key in mixedObject) {
    type = typeof mixedObject[key];
    if ((type === 'number')) {
        console.log(key + ":" + mixedObject[key]);
        i=i+1
    }else if(i=0){
        console.log("no such value");
    }
   
  
}

console.log(" ");

//for (key in mixedObject) {
  //if (typeof mixedObject[key] === 'number') {
  //  console.log(key + ": " + mixedObject[key]);
 // }
//}

i=0
for (key in mixedObject) {
  type = typeof mixedObject[key];
  if ((type === 'boolean')) {
    console.log(key + ":" + mixedObject[key]);
    i=i+1
  }else if (i=0){
    console.log("no such value");
  }

}
console.log(" ");

//for (key in mixedObject) {
  //if (typeof mixedObject[key] === 'boolean') {
  //  console.log(key + ": " + mixedObject[key]);
  //}
//}

i=0
for (key in mixedObject) {
    type = typeof mixedObject[key];
    if ((type === 'undefined')) {
      console.log(key + ":" + mixedObject[key]);
      i=i+1
    }else if(i=0){
        console.log("no such value");
    }
  }
console.log(" ");

//for (key in mixedObject) {
  //if (typeof mixedObject[key] === 'undefined') {
   // console.log(key + ": " + mixedObject[key]);
 // }
//}


i=0
for (key in mixedObject) {
    type = typeof mixedObject[key];
    if ((type === 'object')) {
      console.log(key + ":" + mixedObject[key]);
      i=i+1
    }else if(i=0){
        console.log("no such value");
    }
  }
console.log(" ");

i=0
for (key in mixedObject) {
    type = typeof mixedObject[key];
    if (type === '') {
      console.log(key + ":" + mixedObject[key]);
      i=i+1
    }else if(i=0){
        console.log("no such value");
    }
}
console.log(" ");

//for (key in mixedObject) {
 // if (typeof mixedObject[key] === 'object' && mixedObject[key] !== null) {
   // console.log(key + ": " + JSON.stringify(mixedObject[key]));
  //}
//}


 