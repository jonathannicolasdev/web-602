console.log("creating html");

// A good source is :
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

// Syntax is:
// var element = document.createElement(tagName[, options])
// Step-1 create the element

const myParagrah = document.createElement("p");
// console.log(myParagrah)

// On the console we can see the empty paragraph element but it isn't on the page
// <p><p>
// It is just in memory right now

// Step-2 lets give it come content
myParagrah.textContent = "How are you doing today?";
console.log(myParagrah);
myParagrah.classList.add("first");

//let create an image
const myImage = document.createElement("img");
myImage.src = "https://source.unsplash.com/random/600x600";
myImage.alt = "another random image";
myImage.height = 200;
myImage.width = 200;
console.log(myImage);

const myDiv = document.createElement("div");
myDiv.classList.add("wrapper");
console.log(myDiv);

//Now we need to append all of this to an element already existing in html
// We will be using appendChild()
const body = document.querySelector("body");
body.appendChild(myDiv);

myDiv.appendChild(myParagrah);
myDiv.appendChild(myImage);
