//variables and consts
var time = document.getElementById('timer');
var startButton = document.getElementById('begin');
var cardSection = document.getElementById('cards');
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
// arr
        //Start quiz button click switch to first array question card and start timer (go to high schore funct) and assign random value to user

        //if timer0 condition

        //Upon click a button store answer T/F, subtract from score if F. Generate next question
    //display/generate final score. Ask for intials. Not required


//Retrieving and displaying High scores function




//Clear High scores from local storage
//document.getElementById('clear').addEventListener ("click", function() {
//  localStorage.clear()
//});



//Try again button and function

// GIVEN I am taking a code quiz



// WHEN I click the start button
startButton.addEventListener ("click", quiz);
// THEN a timer starts and I am presented with a question
function quiz() {
  document.getElementById('landing').style.display = 'none';
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