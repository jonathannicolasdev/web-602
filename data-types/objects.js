//Objects allow to group properties and values or keys and values
//Order doesn't matter

const age = 100;

//object litteral syntax
const jonathan = {
  age,
  name: "jonathan",
  properyToCheck: "NEVER",
  "cool-dude": true,
  "really cool": false,
  "777": true,
  dog: "snicker",
  clothing: {
    shirts: 10,
    pants: 2,
  },
  sayHello: function (greeting = "Hey") {
    return `${greeting} ${this.name}`;
  },
  //scoping issue
  sneeze: function () {
    console.log("Ahhh choo", this);
  },
};

jonathan.job = "Web Developer";
jonathan.age = 50;
//another way to access the property
console.log(jonathan["age"]);

console.log(jonathan.age);
// const properyToCheck = prompt('What do you want to check?');
// console.log(properyToCheck);
// Example of why we need square brackets to referance the property we want to target
// Invalid property lookups
// console.log(jonathan[properyToCheck]);

const nameInput = document.querySelector('[name="first"]');
const name = nameInput ? nameInput.value : "";
console.log("input name", name);

// console.log(delete jonathan.job);
// jonathan.age = undefined;
// jonathan.age = null;

console.log(jonathan.sayHello());

//REFERENCE VS VALUE

let name1 = "jonathan";
let name2 = "jonathan";

//Method and Function what is the difference?
console.log(name1 === name2);
name1 = "scott";
console.log(name1 === name2);
// update name1 to be what is name2
name1 = name2;
console.log(name1 === name2);
name2 = name1;
name2 = "jonathantopher";
console.log(name1);

//Why do we get false when we compare two objects with same properties
//Reference of the objects not the values
//Content doesnt mean is it the same object

const person1 = {
  first: "jonathan",
  last: "nic",
  clothing: {
    shirts: 10,
    pants: 2,
  },
};
const person2 = {
  first: "jonathan",
  last: "bos",
};

// const person3 = person1;
// Here we are creating a variable that points to or references the original varialble
// IMPORTANT person3 was never its own object just pointing to the original object
// person3.first = 'Larry';
// console.log(person3.first);
// console.log(person1.first);

// This is how you copy
// const person3 = { ...person1 };
const person3 = _.cloneDeep(person1);
person3.first = "Larry";

person3.clothing.shirts = 100;

const meatInventory = {
  bacon: 2,
  sausage: 3,
  oyster: 10,
};

const veggieInventory = {
  lettuce: 5,
  tomatoes: 3,
  oyster: 15,
};

const inventory = {
  ...meatInventory,
  ...veggieInventory,
};

function doStuff(data) {
  data = "something else";
  console.log(data);
}

function doStuff2(data) {
  data.tomatoes = 10000000000;
  console.log(data);
}

doStuff2(inventory);

//Modify object external object will also modified
