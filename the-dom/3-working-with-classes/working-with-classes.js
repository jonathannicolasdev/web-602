console.log("working with classes");

// When you select an element there is a classList attribute on it
// We have access to some methods that allow us to remove or add multiple classes
// Lets create image 600px and let's give it a class of current-image

// Step-1 select the picture
const pic = document.querySelector(".current-image");
console.log(pic.classList);

//We see the dom-token list which is the array of all the classes that are on the image
//There is one element which is current-image

// Step-2 let's add another class to the image called visible
// Refresh your page, now the dom-token list in the console shows two elements

// Without doing it manually on the html we can add another class let's call it round
pic.classList.add("round");

// We can also to do it on toggle, paste the following code in the console
// pic.classList.toggle("round");

// Let's add a transition to the image go inside the the style tag
// Paste pic.classList.toggle("round") inside the console
// You will see the style round being added and removed with a transition

// Right now we are toggling the round class manually ,let's use the click event

// First let's create a function toggleRound() which runs
// pic.classList.toggle("round");

function toggleRound() {
  pic.classList.toggle("round");
}
// A quick look at events, we can add an event to the pic as follows and on click
// it will trigger the toggleRound function
pic.addEventListener("click", toggleRound);

// A lot of javascript interaction is about adding and removing classes with the appropriate
// style corresponding to the class
