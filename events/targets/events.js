const favourite = document.querySelector(".favourite-button");

favourite.addEventListener("click", function () {
  console.log("this is my favourite button");
});

function handleClick() {
  console.log("🐛 IT GOT LIKED!!!");
}

const like = document.querySelector(".like-button");
like.addEventListener("click", handleClick);

like.removeEventListener("click", handleClick);

//Now the question is . When a person click a button how does one get
//information about the actual button getting clicked
//We have one single function handling the clickin of ten buttons
//How do we know which one is clicked?

//The information is in the EVENT object
//When the browser runs handleBuyButtonClick
//The browser passes a number of information including the event which we can
//use in our callback function
//the callback accepts a single parameter: an object based on Event describing
//the event which has occurred, and it returns nothing.

//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

const buyButtons = document.querySelectorAll("button.buy");

function handleBuyButtonClick(event) {
  console.log(event);
  console.log(event.currentTarget);
  const button = event.currentTarget;
  console.log(button.textContent);
  console.log("You clicked the buy button!");
}

//The event has all the information and when you got the target you

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener("click", handleBuyButtonClick);
});
