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
var losses = 0;

var total = 0;

function win() {
    wins = wins + 1
    $("#wins").text("Wins: " + wins);
    resetTwo();
    reset();
}

function lose() {
    losses = losses + 1
    $("#losses").text("Losses: " + losses);
    resetTwo();
    reset();
}

window.onload = $("#random-number").text(randomNumber);


//Codes below only show most recent clicked gem value in total-score div, need to figure out how to get sum of values for buttons clicked

$('#blue').click(() => {
  total = total + blueGem
  $('#total-score').html(total);
  if (total === randomNumber) {
      win();
      reset();
      resetTwo()
  } else if (total > randomNumber) {
      lose();
      reset();
      resetTwo();
  }
});    

/*$("#blue").on("click", function () {
  $("#total-score").html(blueGem);
});*/

$('#green').click(() => {
    total = total + greenGem
    $('#total-score').html(total);
    console.log(greenGem);
    if (total === randomNumber) {
        win();
        reset();
        resetTwo()
    } else if (total > randomNumber) {
        lose();
        reset();
        resetTwo();
    }
});   

/*$("#green").on("click", function () {
    $("#total-score").html(greenGem);
  });*/

$('#purple').click(() => {
  total = total + purpleGem
  $('#total-score').html(total);
  if (total === randomNumber) {
    win();
    reset();
    resetTwo()
} else if (total > randomNumber) {
    lose();
    reset();
    resetTwo();
}
});      

/*$("#purple").on("click", function () {
    $("#total-score").html(purpleGem);
  });*/

$('#red').click(() => {
  total = total + redGem
  $('#total-score').html(total);
  if (total === randomNumber) {
    win();
    reset();
    resetTwo()
} else if (total > randomNumber) {
    lose();
    reset();
    resetTwo();
}
});    

/*$("#red").on("click", function () {
    $("#total-score").html(redGem);
});*/  

/*if (total === randomNumber) {
  wins++;
  $("#wins").html("Wins: " + wins);
  console.log("win");
};*/

/*if (total > randomNumber) {
  losses++;
  $("#losses").html("Losses: " + losses);
  console.log("loss");
};*/

function reset() {
  total = 0;
  $("#total-score").text(total);
}

function resetTwo() {
  randomNumber = randomIntFromInterval(19, 120);
  $("#random-number").html(randomNumber);
  blueGem = randomIntFromInterval(1, 12);
  greenGem = randomIntFromInterval(1, 12);
  purpleGem = randomIntFromInterval(1, 12);
  redGem = randomIntFromInterval(1, 12);  
}