console.log("objects-student");

//Topic Of the day Objects
//Object helps you store key-value pair property-value

// let array = ["Maya", "Matthew"];

//let user = new Object(); // Object Contructor
//let user = {}; // Object litteral

//object user
let user = {
  name: "Marcel", // key name stores the value Marcel
  age: 19,
};

console.log(user);

//alert(user.name);
//alert(user.age);

user.isAdministrator = true;

console.log(user);

delete user.age;

console.log(user);

let car1 = {
  model: "tesla",
  make: 2016,
};

// console.log(car);

let car2 = {
  model: "mazda",
  make: 2017,
};

let array = [car1, car2];
console.log(array);

//Use loops and Objects together

let newUser = {
  name: "JD",
  age: 15,
  isAdministrator: true,
  height: "155cm",
};

//for(let i=0; i < placeholder.length; i++)

// for (let prop in obj)
for (let key in newUser) {
  console.log(key);
  console.log(newUser[key]);
}

//Object Copying and References

let message = "Hello!";
let phrase = message;

console.log(message, phrase);

phrase = "Updated hello!";

console.log(message, phrase);

//Copying Object

let carOriginal = {
  model: "tesla",
  make: 2016,
};

let copyCar = carOriginal;

console.log(carOriginal, copyCar);

copyCar.model = "mazda";

console.log(carOriginal, copyCar);


