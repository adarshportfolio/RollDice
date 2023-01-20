var randomNumber1 = Math.floor((Math.random()*6)+1);
// use concatenation for connecting dice & randomNumber &.png
var randomDiceImage1 = "dice" + randomNumber1 + ".png"
document.querySelector(".img1").setAttribute("src","images/"+randomDiceImage1);


var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomDiceImage2 = "dice" + randomNumber2 + ".png"
document.querySelector(".img2").setAttribute("src","images/"+randomDiceImage2);

// alert(document.querySelector(".container h3").innerHTML)

if(randomNumber1>randomNumber2){
    document.querySelector(".container h3").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector(".container h3").innerHTML = "🚩Player 2 Wins!";
}
else{
    document.querySelector(".container h3").innerHTML = "Draw!";
}