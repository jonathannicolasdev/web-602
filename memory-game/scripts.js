console.log("we are working on a game");

const cards = document.querySelectorAll(".memory-card");
console.log(cards);

function flipCard() {
  this.classList.toggle("flip");
}

cards.forEach(function (card) {
  card.addEventListener("click", flipCard);
});
