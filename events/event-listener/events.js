// In order to listen to elements we first need to select them
const favourite = document.querySelector(".favourite-button");

//The event listener will take two arguments
//First the type of event you want to listen to
//Second a call back, which is just a regular function (actually an anonymous function) that will be executed
//when the event is triggered

favourite.addEventListener("click", function () {
  console.log("this is my favourite button");
});

//The three steps go get something, listen for something, then go ahead and do something

//Another way to do this
function handleClick() {
  console.log("🐛 IT GOT LIKED!!!");
}

const like = document.querySelector(".like-button");
like.addEventListener("click", handleClick);

//To remove an event from your element you have to give your function a name
//The function handleClick is bound to the element like and now we are removing it

like.removeEventListener("click", handleClick);

// Now let's move on to listening to events on multiple items
// Here we are selecting all the buttons
const buyButtons = document.querySelectorAll("button.buy");

//An Example which doesnt work
// function buyItem() {
//   console.log("Buying Item");
// }

// buyButtons.addEventListener("click", buyItem);

//In order to attach an event listener to multiple elements, we must
//loop over and for each element attach it individually the named function

function handleBuyButtonClick(event) {
  console.log("You clicked the buy button!");
}

//We take the buyButtons which is NodeList of button with class of buy
//We call the forEach method, which will run a function for each item in the
// Nodelist
// buyButton here is just a place holder for each element
// the function will run once for everything it found

buyButtons.forEach(function (buyButton) {
  console.log(buyButton);
  //Anything you put in heere will happen 10 times cause there are 10 buttons
  //console.log("hello")
  // Now for each element we can add the event
  buyButton.addEventListener("click", handleBuyButtonClick);
});

const photoEl = document.querySelector(".photo");

photoEl.addEventListener("click", function () {
  document.querySelector("#demo").innerHTML = "Hello World";
});
