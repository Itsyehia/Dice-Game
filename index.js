let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;


// Get the image element with class "img"
let imgElement1 = document.querySelector('.img1');
let imgElement2 = document.querySelector('.img2');


// Set attribute for the image element
imgElement1.setAttribute('src', "images/dice" + randomNumber1 + ".png");
imgElement2.setAttribute('src', "images/dice" + randomNumber2 + ".png");


let h1Element = document.querySelector('h1');
if (randomNumber2 > randomNumber1) {
    h1Element.textContent = "Player 2 won";
} else if (randomNumber2 < randomNumber1) {
    h1Element.textContent = "Player 1 won";
} else {
    h1Element.textContent = "Draw";
}
