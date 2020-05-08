// Make a div
const div = document.createElement("div");

// add a class of wrapper to it
div.classList.add("wrapper");

console.log(div);

// put it into the body

document.body.appendChild(div);

// make an unordered list

const ul = `
<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>
`;

// add three list items with the words "one, two three" in them
// put that list into the above wrapper

div.innerHTML = ul;

// create an image

const img = document.createElement("img");

// set the source to an image

img.src = "https://picsum.photos/500";
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add("cute");
// add an alt of Cute Puppy
img.alt = "Cute Puppy!";

console.log(img);

// Append that image to the wrapper
div.appendChild(img);

// const ulElement = div.querySelector("ul");
// console.log(ulElement);

const myHTML = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  <div>
`;

console.log(myHTML);

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>Their Height is ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!
        <button class="delete" type="button">&times; Delete</button>
    </p>
    </div>
  
  `;

  return html;
}

// const firstPlayerCard = generatePlayerCard("Simong", 22, "5'5");
// console.log(firstPlayerCard);

const cards = document.createElement("div");
cards.classList.add("cards");

// Have that function make 4 cards
let cardsHTML = generatePlayerCard("wes", 12, 150);
cardsHTML += generatePlayerCard("scott", 12, 150);
cardsHTML += generatePlayerCard("kait", 12, 150);
cardsHTML += generatePlayerCard("snickers", 12, 150);

console.log(cardsHTML);

cards.innerHTML = cardsHTML;

console.log("this is the cards element", cards);

div.insertAdjacentElement("beforebegin", cards);
