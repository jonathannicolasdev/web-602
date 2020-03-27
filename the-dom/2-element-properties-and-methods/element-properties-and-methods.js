console.log("element properties and methods");

let heading = document.querySelector("h2");

console.log(heading.innerText);

heading.innerText = "toto";

heading.innerText = `${heading.innerText} is the best guy in the world `;

let newHeading = heading.innerText;

console.log(newHeading);

let p = document.querySelector("p");

console.log(p);

p.insertAdjacentText("afterbegin", "toto");
