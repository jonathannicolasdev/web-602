const div = document.createElement("div");
div.classList.add("wrapper");

const ul = `
<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>
`;

div.innerHTML = ul;

document.body.appendChild(div);

const img = document.createElement("img");

img.src = "https://picsum.photos/500";
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add("cute");
// add an alt of Cute Puppy
img.alt = "Cute Puppy!";

console.log(img);

div.appendChild(img);
