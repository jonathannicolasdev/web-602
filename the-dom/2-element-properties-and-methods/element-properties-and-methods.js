console.log("element properties and methods");

// In the previous example we talked about how we select an element from a page
// Now we will talk about what we can do with it

// let's grab the first h2 that is on the page
let heading = document.querySelector("h2");

// Now console.log(heading) and see that we got back the h2 object as follows
// <h2>Sub Div<h2>

console.log("testing");
console.log(heading);

//<h2>Sub Div<h2>
console.log(heading.innerText);

// There are two things Getters (we get the value) and Setters (we set the value)
// In the line below we are overiding the initial value Sub Div and changing it to toto

heading.innerText = "this is a new variable";

heading.innerText = `${heading.innerText} is the best guy in the world `;

let newHeading = heading.innerText;

console.log(newHeading);

//Select the first p tag on the page

let p = document.querySelector("p");

console.log(p);

//https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText
// Syntax : element.insertAdjacentText(position, element)
// position
// A DOMString representing the position relative to the element; must be one of the following strings:
// 'beforebegin': Before the element itself.
// 'afterbegin': Just inside the element, before its first child.
// 'beforeend': Just inside the element, after its last child.
// 'afterend': After the element itself.

p.insertAdjacentText("afterend", " try changing the position ");
