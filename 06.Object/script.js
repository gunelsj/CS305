//Object
let firstName = "Gunel"
let lastName = "Jafarova"
let age = 20
let uni = "ADA"
let loc = "Baku, Azerbaijan"
console.log(firstName, lastName, age, uni, loc);

const student = {
   firstName: "Gunel",
   lastName: "Jafarova",
   "father-name": "Sultan",
   99: 20,
   year: 2024,
   uni: "ADA",
   isAdmin: true,  
   fin: undefined,
   tax: null,
   address: {
      city: "Baku",
      address: {
         test: "test",
      },
      country: "Azerbaijan",
      extra: {
         street: "Nizami 46",
      },
      email: "gunelsj@code.edu.az"
   }
}

console.log(student)
console.log( student.firstName)
console.log(student[99]);
console.log( student.lastName)
console.log( student["father-name"])
console.log( student.year)
console.log( student.uni)
console.log( student.isAdmin)
console.log( student.address.city, student.address.country)
console.log( student.address.email)

for(let key in student) {
   console.log(key)
   
}

for(let key in student) {
   console.log(key, ":", student[key])
   
}

console.log();



