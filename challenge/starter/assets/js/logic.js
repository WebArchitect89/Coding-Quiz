// Acceptance Criteria
//      GIVEN I am taking a code quiz
//      WHEN I click the start button
//      THEN a timer starts and I am presented with a question
//      WHEN I answer a question
//      THEN I am presented with another question
//      WHEN I answer a question incorrectly
//      THEN time is subtracted from the clock
//      WHEN all questions are answered or the timer reaches 0
//      THEN the game is over
//      WHEN the game is over
//      THEN I can save my initials and my score

//Defining Variables
var welcome = document.querySelector("#start-screen");
var startBtn = document.querySelector("#start");

var questionPage = document.querySelector("#questions");
var askQuestion = document.querySelector("#question-title");

var reactButtonsAnswerOptions = document.querySelectorAll(".choices");

//Answer options
var answerBtn1 = document.querySelector("#answer_btn1");
var answerBtn2 = document.querySelector("#answer_btn2");
var answerBtn3 = document.querySelector("#answer_btn3");
var answerBtn4 = document.querySelector("#answer_btn4");


//Final Page
var checkLine = document.querySelector("#check_line");
var scoreBoard = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var userInitial = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");

//Other Variables

var timeLeft = document.getElementById("timer");

var secondsLeft = 60;
var questionNumber = 0;
var totalScore = 0;
var questionCount = 1;

// Functions

// WHEN I click the start button then the time starts(The setInterval() method) 

function countdown() {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = " Time left " + secondsLeft + "s";

        if (secondsLeft <= 0) {
            clearInterval(timeInterval);
            timeLeft.textContent = "Time is Up";
            gameOver();

        } else if (questionCount >= questionSource.length + 1) {
            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000)
}

// Click the start quiz button

function startQuiz() {
    questionNumber = 0
    countdown();
    showQuestion(questionNumber);
}

//Questions and answers

function showQuestion (n){
askQuestion.textContent = questionSource[n].question;
answerBtn1.textContent = questionSource[n].choices[0];
answerBtn2.textContent = questionSource[n].choices[1];
answerBtn3.textContent = questionSource[n].choices[2];
answerBtn4.textContent = questionSource[n].choices[3];
questionNumber = n;

}

