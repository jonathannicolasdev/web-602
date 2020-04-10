console.log("working with classes student");

const pic = document.querySelector(".current-image");
console.log(pic.classList);

pic.classList.add("round");
pic.classList.remove("round");

function toggleRound() {
  pic.classList.toggle("round");
}

pic.addEventListener("click", toggleRound);
