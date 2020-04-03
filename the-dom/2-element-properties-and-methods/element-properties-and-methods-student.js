console.log("element properties and methods student");

let heading = document.querySelector("h2");

console.log(heading);

console.log(heading.innerText);

heading.innerText = "whatever anythingj udfhfdiuhgdfihgfdiuhe";

console.log(heading);

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

p.insertAdjacentText("afterend", " blablablablabla ");
