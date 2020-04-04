console.log("creating html");

// A good source is :
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// Syntax is:
// var element = document.createElement(tagName)

// Step-1 create the element
// Step-2 Manipulate the content
// Step-3 Insert the element into the DOM

// Let's create an element paragraph
const myParagrah = document.createElement("p");

// console.log(myParagrah)
// On the console we can see the empty paragraph element but it isn't on the page
// <p><p>
// It is just in memory right now

myParagrah.textContent = "How are you doing today?";
console.log(myParagrah);
myParagrah.classList.add("first");

//Let query the div to which we will append the paragraph
const myDiv = document.querySelector(".inside-wrapper");
console.log(myDiv);
myDiv.appendChild(myParagrah);

//let create an image

const myImage = document.createElement("img");

//Let's manipulate the image before inserting it in the DOM

myImage.src = "https://source.unsplash.com/random/600x600";
myImage.alt = "another random image";
myImage.height = 200;
myImage.width = 200;
console.log(myImage);

// Insert the image in the DOM

myDiv.appendChild(myImage);

// Let's create a heading element
const heading = document.createElement("h1");

// Let's manipulate the heading
heading.innerHTML = "I forgot to put a heading";

// Let's insert inside the DOM
myDiv.insertAdjacentElement("afterbegin", heading);

// An exercise on creating an ul list
const list = document.createElement("ul");
const li = document.createElement("li");
li.innerHTML = "First item on the list";
list.appendChild(li);

const li2 = document.createElement("li");
li2.innerHTML = "Second item on the list";
list.appendChild(li2);

myDiv.appendChild(list);
