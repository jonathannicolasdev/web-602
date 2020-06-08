console.log("we are working on a game");

const cards = document.querySelectorAll(".memory-card");
console.log(cards);

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.toggle("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    console.log(this);
    firstCard = this;
  } else {
    console.log("we flipped the second card");
    hasFlippedCard = false;
    secondCard = this;

    console.log({
      first: firstCard,
      second: secondCard,
    });

    if (firstCard.dataset.pokemon === secondCard.dataset.pokemon) {
      console.log("we have a match!");
    }
  }
}

cards.forEach(function (card) {
  card.addEventListener("click", flipCard);
});
