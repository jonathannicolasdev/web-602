console.log("data-attributes example");

//Step-1 again lets select the pic

const pic = document.querySelector("img");
console.log(pic);

// The pic doesn't have currently an alt attribute
// The required alt attribute specifies an alternate text for an
// image, if the image cannot be displayed.

//  Step-2 can set this manually

pic.alt = "this is a random pic";

console.log(pic.alt);
// We can also set the width of the picture

pic.width = 300;

// Now if you instert an error in  src="https://source.unsplash.com/random/600x600"
// and reload, no image will appear but the alt text attribute
