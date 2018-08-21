var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".button");

//sets gradient to the background when you pick up colors
function setGradient() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";

    css.textContent = body.style.background + ";";
}

//generates random numbers between 0 to 255 inclusively and returns rgb color code
function randomBackgroundGradient() {
    var min = Math.ceil(0);
    var max = Math.floor(255);

    var red = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    var green = Math.floor(Math.random() * (max - min + 1)) + min;
    var blue = Math.floor(Math.random() * (max - min + 1)) + min;

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

//sets random colors when you click on the 'Random gradient' button
function setRandomGradient() {
    body.style.background =
        "linear-gradient(to right, " +
        randomBackgroundGradient() +
        ", " +
        randomBackgroundGradient();

    css.textContent = body.style.background + ";";
}

//sets random Gradient when you load the page
setRandomGradient();

//event listeners when you pick up 1st and 2nd colors respectively and the 'Random gradient' button
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandomGradient);