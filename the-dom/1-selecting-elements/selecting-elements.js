console.log("selecting-elements");

const p = document.querySelector("p");
// First matching element
console.log(p);

const divs = document.querySelectorAll("div");
console.log(divs);

const imgs = document.querySelectorAll(".item img");
console.log(imgs);

const item2 = document.querySelector(".item2");
console.log(item2);

const item2Image = item2.querySelector("img");
console.log(item2Image);
