//variables and consts
var countdown = document.getElementById('countdown');
var startButton = document.getElementById('begin');
var qSection = document.getElementById('questions');
var landing = document.getElementById('landing');
var mainPage = document.getElementById('all');
var intro = document.getElementById('intro');
var beginButton = document.getElementById('begin');
var questionText = document.getElementById('qtext');
var questionResult = document.getElementById('result');
var finalScore = document.getElementById('finalScore');
var userScore = document.getElementById('score');
var highscoreSection = document.getElementById('highScores');
var highscoreList = document.getElementById('scoreList');
var tryAgain = document.getElementById('tryAgain');
var clearScores = document.getElementById('clear');


const questions = [
  {
    question: "What is Harry Potter's middle name?",
    answers: {
      a: "John",
      b: "James",
      c: "Sirius",
      d: "Jane"
    },
    correctAnswer: "b"
  },
  {
    question: "How does one get into the Hogwarts kitchens?",
    answers: {
      a: "Tickle a painting of a pear",
      b: "Tap the bottom middle barrel 7 times",
      c: "Give Dobby a sock!",
      d: "Walk back and forth down the corridor three times while hungry"
    },
    correctAnswer: "a"
  },
  {
    question: "In what year did Dumbledore defeat the dark wizard Grindelwald?",
    answers: {
      a: "1939",
      b: "1947",
      c: "1919",
      d: "1945"
    },
    correctAnswer: "d"
  }
];


//Retrieving and displaying High scores function

var highScores = function() {
  var storedScores = JSON.parse(localStorage.getItem('storeScore')) || [];
  for (var index = 0; i < storedScores.length, index++) {
    var scoreItem = document.createElement('li');
    scoreItem.textContent = storedScores[index].score + " " + storedScores[index].name;
    highscoreList.appendChild(scoreItem);
  }
};


//Clear High scores from local storage

clearScores.addEventListener('click', function() {
  localStorage.clear;
  highscoreList.textContent = "";
})

//Try again button and function

// GIVEN I am taking a code quiz



// WHEN I click the start button
startButton.addEventListener ("click", quiz);
// THEN a timer starts and I am presented with a question
function quiz() {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('landing').style.display = 'block';
  var timeLeft = 75;
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      time.textContent =`Time: ${timeLeft}`;
      timeLeft--;
    } else {
      time.textContent = '';
      clearInterval(timeInterval);
      submitReveal();
    }
  }, 1000);
  var output = [];
  var answers;
  for(var i=0; i<questions.length; i++){
    answers = [];
    
  }
}
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0

// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score