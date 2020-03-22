function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

var randomNumber = randomIntFromInterval(19, 120);
console.log(randomNumber);

var blueGem = randomIntFromInterval(1, 12);
console.log(blueGem);
var greenGem = randomIntFromInterval(1, 12);
var purpleGem = randomIntFromInterval(1, 12);
var redGem = randomIntFromInterval(1, 12);


var total = 0;

$("#total-score").html(total)

window.onload = $("#random-number").text(randomNumber);


//Codes below only show most recent clicked gem value in total-score div, need to figure out how to get sum of values for buttons clicked
$("#blue").on("click", function () {
  $("#total-score").html(blueGem);
});

$("#green").on("click", function () {
    $("#total-score").html(greenGem);
  });

$("#purple").on("click", function () {
    $("#total-score").html(purpleGem);
  });  

$("#red").on("click", function () {
    $("#total-score").html(redGem);
  });  

