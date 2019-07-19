var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imagesrc = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll('img')[0].setAttribute("src", imagesrc);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

document.getElementById("img02").src = "images/dice" + randomNumber2 + ".png";

if (randomNumber1 > randomNumber2) {
  document.querySelectorAll('h1')[0].innerHTML = "Player 1 wins";
}
else if (randomNumber2 == randomNumber1 ) {
  document.querySelectorAll('h1')[0].innerHTML = "Draw";
}
else{
  document.querySelectorAll('h1')[0].innerHTML = "Player 2 wins";
}
