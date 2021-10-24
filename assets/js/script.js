//variables and consts
var time = document.getElementById('timer');
var startButton = document.getElementById('begin');
var cardSection = document.getElementById('cards');
// arr


startButton.addEventListener ("click", quiz);
//Quiz Section until Final Score
    //clear the section of content
    //loop if timer >0 and questions left >0
    function quiz() {
        var timeLeft = 75;
      
        // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
        var timeInterval = setInterval(function () {
          // As long as the `timeLeft` is greater than 1
          if (timeLeft > 0) {
            // Set the `textContent` of `timeLeft` to show the remaining seconds
            time.textContent =`Time: ${timeLeft}`;
            // Decrement `timeLeft` by 1
            timeLeft--;
          } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            time.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
          }
        }, 1000);
      }   
        //Start quiz button click switch to first array question card and start timer (go to high schore funct) and assign random value to user

        //if timer0 condition

        //Upon click a button store answer T/F, subtract from score if F. Generate next question
    //display/generate final score. Ask for intials. Not required


//Retrieving and displaying High scores function




//Clear High scores from local storage




//Try again button and function