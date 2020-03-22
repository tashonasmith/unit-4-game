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

var wins = 0;
$("#wins").text("Wins: " + wins);

var losses = 0
$("#losses").text("Losses: " + losses);


var total = 0;

$("#total-score").text(total)

window.onload = $("#random-number").text(randomNumber);


//Codes below only show most recent clicked gem value in total-score div, need to figure out how to get sum of values for buttons clicked

$('#blue').click(() => {
  total = total + blueGem
  $('#total-score').text(total);
});    

/*$("#blue").on("click", function () {
  $("#total-score").html(blueGem);
});*/

$('#green').click(() => {
    total = total + greenGem
    $('#total-score').text(total);
});   

/*$("#green").on("click", function () {
    $("#total-score").html(greenGem);
  });*/

$('#purple').click(() => {
  total = total + purpleGem
  $('#total-score').text(total);
});      

/*$("#purple").on("click", function () {
    $("#total-score").html(purpleGem);
  });*/

$('#red').click(() => {
  total = total + redGem
  $('#total-score').text(total);
});    

/*$("#red").on("click", function () {
    $("#total-score").html(redGem);
});*/  

if (total === randomNumber) {
  wins++
};

if (total > randomNumber) {
  losses++
};