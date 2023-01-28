const images = ["001.png", "002.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "bgImage";

document.body.appendChild(bgImage);
