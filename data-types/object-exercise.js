console.log("exercise-object");

const age = 100;

//object litteral syntax
const jonathan = {
  age: age,
  name: "jonathan",
  properyToCheck: "NEVER",
  "cool-dude": true,
  "really cool": false,
  "777": true,
  hasDog: true,
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

console.log(jonathan.sayHello());
console.log(jonathan.sneeze());

const bear = {}[(1, 3, "Annie")];
