console.log("creating html student");

const myParagrah = document.createElement("p");
myParagrah.textContent = "How are you doing today?";

console.log(myParagrah);
myParagrah.classList.add("first");

const myDiv = document.querySelector(".inside-wrapper");
console.log("myDiv", myDiv);

myDiv.appendChild(myParagrah);

const myImage = document.createElement("img");

myImage.src = "https://source.unsplash.com/random/600x600";
myImage.alt = "another random image";
myImage.height = 200;
myImage.width = 200;
console.log(myImage);

myDiv.appendChild(myImage);

const heading = document.createElement("h1");
heading.innerHTML = "I forgot to put a heading";

console.log(heading);

myDiv.insertAdjacentElement("afterbegin", heading);

const list = document.createElement("ul");
const li = document.createElement("li");
li.innerHTML = "First item on the list";
list.appendChild(li);

myDiv.appendChild(list);

console.log(list);
