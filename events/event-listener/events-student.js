console.log("hello this is the student file");

// In order to listen to elements we first need to select them
const favourite = document.querySelector(".favourite-button");

console.log(favourite);

favourite.addEventListener("click", function () {
  console.log("this is my favourite button");
});

//Another way to do this
//Here we are creating the function we want to use
function handleClick() {
  console.log("🐛 IT GOT LIKED!!!");
}

//Selecting the like button
const like = document.querySelector(".like-button");

//Attaching the handleClick function to the like-button
like.addEventListener("click", handleClick);

like.removeEventListener("click", handleClick);

const buyButtons = document.querySelectorAll("button.buy");

const array1 = ["a", "b", "c"];

array1.forEach(function (element) {
  console.log(element + " hello");
});

for (let i = 0; i < array1.length; i++) {
  console.log(array1[i] + " hello");
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener("click", handleClick);
});
