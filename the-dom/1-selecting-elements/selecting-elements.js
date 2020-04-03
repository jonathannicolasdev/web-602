console.log("selecting-elements");
//MDN docs is always a good place to learn about web
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

// Syntax
// element = document.querySelector(selectors);

// Example
// var el = document.querySelector(".myclass");
// The first element in the document with the class "myclass" is returned:

// Before being able to work with items on a page we need to be able to go get them
// Select them, access the specific element on the page can be anything (h2, button, img, div)
// Once we have it we can do stuff with it, add content to it remove from the page or add
// a click functionality to it
// The two most important ways to select an element from an HTML page is querySelector
// and querySelectorAll

const p = document.querySelector("p");
// First matching element
console.log(p);

const divs = document.querySelectorAll("div");
// This will give you all the element div on the page
// On the console you will see a NodeList(3) basically an array of all the divs
console.log(divs);

// We can also do a parent child selector for example selecting only images that are
// inside an element with class item
const imgs = document.querySelectorAll(".item img");
console.log(imgs);

const item2 = document.querySelector(".item2");
console.log(item2);

const item2Image = item2.querySelector("img");
console.log(item2Image);
