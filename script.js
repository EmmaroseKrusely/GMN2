// GMN
let totalGuesses = 0;
var totalScore = 0;
let correctGuesses = 0;
var lives = 5;
var highscore = 0;
var playerGuess = [];

randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

// score
function scoreSubmit() {
  document.getElementById("highscore").innerHTML = "Highscore: " + highscore;

// if (totalScore > localStorage.getItem("highscore")){
//     localStorage.setItem("highscore", totalScore);
// } else{
//     highscore = highscore;
// }

   if (totalScore > highscore) {
     highscore = totalScore
     document.getElementById("highscore").innerHTML = "Highscore: " + highscore;
   } else {
     highscore = highscore;
     document.getElementById("highscore").innerHTML = "Highscore: " + highscore;
   }
}


function resetFunction() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
  document.getElementById("submitBtn").disabled = false;
  document.getElementById("win").innerHTML = "";
  correctGuesses = 0;
  totalScore = 0;
  highscore = 0;
   document.getElementById("yourGuess").innerHTML = "";
   document.getElementById("response").innerHTML = "";
   document.getElementById("answer").innerHTML = "";
   document.getElementById("score").innerHTML = "";
   document.getElementById("gueNum").innerHTML = "";
   document.getElementById("highscore").innerHTML = "";
  
}

// submit
function myFunction() {
  var x, text;
  x = document.getElementById("numb").value;

// game
  if (correctGuesses == 19) {
    document.getElementById("win").innerHTML = "Congratulations you win nothing, but hey you can tell all your friends you won.";
    document.getElementById("submitBtn").disabled = true;
  }


  if (x < 1 || x > 20) {
    text = "NOT SO FAST... You Must enter a number 1 - 20 to proceed on your journey. ";
    document.getElementById("response").innerHTML = text;


  } else if (x == randomNumber) {
    text = "Youre lucky.";
    document.getElementById("response").innerHTML = text;
    document.getElementById("answer").innerHTML =
      "The number I chose was " + randomNumber;
    document.getElementById("yourGuess").innerHTML = "You chose " + x;
    totalScore = totalScore + 5;
    document.getElementById("score").innerHTML = "Score: " + totalScore;
    document.getElementById("corGuess").innerHTML =
      "Correct Guesses: " + ++correctGuesses;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);


  } else {
    text = "Try Again";
    document.getElementById("response").innerHTML = text;
    document.getElementById("yourGuess").innerHTML = "You chose" + x;
    totalScore = totalScore - 2;
    document.getElementById("score").innerHTML = "Score: " + totalScore;
    document.getElementById("gueNum").innerHTML = "Guessed Numbers:" + x;
  }

  playerGuess.push(x);
  document.getElementById("gueNum").innerHTML =
    "Numbers Guessed: " + playerGuess;
}