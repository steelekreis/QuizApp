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
var userfinalScore = document.getElementById('score');
var highscoreSection = document.getElementById('highScores');
var highscoreList = document.getElementById('scoreList');
var tryAgain = document.getElementById('tryAgain');
var clearScores = document.getElementById('clear');
var submitScore = document.getElementById('submit');
var initials = document.getElementById('initials');
var answerList = document.getElementById('answerList')

var questions = [
  {
    question: "What is Harry Potter's middle name?",
    answers: [
      "John",
      "James",
      "Sirius",
      "Jane"
    ],
    correctAnswer: "James"
  },
  {
    question: "How does one get into the Hogwarts kitchens?",
    answers: [
      "Tickle a painting of a pear",
      "Tap the bottom middle barrel 7 times",
      "Give Dobby a sock!",
      "Walk back and forth down the corridor three times while hungry"
    ],
    correctAnswer: "Tickle a painting of a pear"
  },
  {
    question: "In what year did Dumbledore defeat the dark wizard Grindelwald?",
    answers: [
      "1939",
      "1947",
      "1919",
      "1945"
    ],
    correctAnswer: "1945"
  },
];

var timeLeft = 20;
var timer;
var queIndex = 0;
var userScore = 90;

//Retrieving and displaying High scores function

var highScores = function() {
  var storedScores = JSON.parse(localStorage.getItem('storeScore')) || [];
  for (var i = 0; i < storedScores.length; i++) {
    var scoreItem = document.createElement('li');
    scoreItem.textContent = storedScores[i].score + " " + storedScores[i].name;
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



var random = function (min, max) {
  var rando = Math.floor(Math.random() * (max-min) + min);
  return rando;
};

function quiz() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('questions').style.display = 'block';

  timer = setInterval(clockTick, 1000);
  generateQuestion();
};



function generateQuestion() {
  var currentQuestion = questions[queIndex];
  var lastQuestion = questions[questions.length + 1]

  if (currentQuestion == lastQuestion) {
    endQuiz();
  }
  else {
    questionText.textContent = currentQuestion.question;
    questionText.setAttribute('class','card-header text-center');
    answerList.innerHTML = '';
    currentQuestion.answers.forEach(function(element) {
      var qStuff = document.createElement('button');
      qStuff.innerText = element;
      qStuff.setAttribute('class','btn btn-primary btn-lg');
      qStuff.setAttribute('value', element);
      qStuff.onclick = validate;
      answerList.appendChild(qStuff);
    });
  }
};

function validate() {
  var currentQuestion = questions[queIndex];
  var userAnswer = this.value;

  if (userAnswer === currentQuestion.correctAnswer) {
    questionResult.textContent = 'Correct';
    questionResult.setAttribute('class','question-results');
  }
  else {
    questionResult.textContent = 'Incorrect';
    questionResult.setAttribute('class','question-results');
    timeLeft -= 5;
    clockTick;
  };
  queIndex++
  generateQuestion();
};

function clockTick() {
  timeLeft--

  countdown.textContent = timeLeft;
  if (timeLeft <= 0) {
    endQuiz;
  };
}

function endQuiz() {
  clearInterval(timer);
  qSection.style.display = 'none';
  finalScore.style.display = 'block';
  score.textContent = timeLeft;
};

submitScore.addEventListener ('click', saveScore);

function saveScore () {
  if (initials.value === "") {
    alert('Please enter your initials in order to submit!');
    return false;
  }
  else {
    var highScores = JSON.parse(localStorage.getItem('storeScore')) || [];
    var initialValue = initials.value.trim();
    var storeScore = {
      name: initialValue,
      score: timeLeft
    };
  }

  initials.value = "";
  highScores.push(storeScore);
  localStorage.setItem("storeScore", JSON.stringify(highScores));
  finalScore.style.display = 'none';
  highscoreSection.style.display = 'block';
  loadData();
};

var loadData = function() {
  var storedScores = JSON.parse(localStorage.getItem('storeScore')) || [];
  for (var i = 0; i < storedScores.length; i++) {
    var scoreList = document.createElement('span');
    scoreList.textContent = storedScores[i].name + " " + storedScores[i].score;
    highscoreList.appendChild(scoreList);
  }
};

