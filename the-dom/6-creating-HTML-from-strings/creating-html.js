console.log("creating-html");

const wrapper = document.querySelector(".wrapper");

console.log(wrapper);

const src = `https://picsum.photos/200`;

const myHTML = `
    <div class="recipe">
      <h1>My Recipe</h1>
      <img src="${src}" alt=""/>
      <p>this is where I will place the description of the recipe</p>
    <div>
`;

wrapper.innerHTML = myHTML;
