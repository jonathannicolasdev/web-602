// Let's make he card flip when we click it
// First lets make a list of all out memory card elements

const cards = document.querySelectorAll(".memory-card");

// When a player clicks a card we must know if its the first or second card that is
// being clicked

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  //access the classList of the memory card
  this.classList.toggle("flip");
  // console.log("hello");
  //Let's see what in this ctx this keyword represents
  // console.log(this);
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    //the element that has fired the event
    firstCard = this;
  } else {
    hasFlippedCard = false;
    secondCard = this;
    console.log({ firstCard, secondCard });
    // now that we have both cards that we clicked we need to check if these two cards match
    // we can add a data attribute to our element
    console.log(firstCard.dataset.pokemon);
    console.log(secondCard.dataset.pokemon);

    if (firstCard.dataset.pokemon === secondCard.dataset.pokemon) {
      console.log("yes they are the same");
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
    } else {
      setTimeout(function () {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
      }, 3000);
    }
  }

  // console.log({ hasFlippedCard, firstCard });
}

// Loop through that list of cards and to each one of the cards we will attach
// an event listener, we will listen for a click event and when that event is fired
// we will execute a function names flipcard

cards.forEach(function (card) {
  card.addEventListener("click", flipCard);
});
