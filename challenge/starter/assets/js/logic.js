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
    welcome.style.display = "none";
    questionPage.style.display = "block";
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

//Is answer right or wrong

function checkAnswer(event) {
    event.preventDefault();
    //make it display
    checkLine.style.display = "block";
    setTimeout(function () {
        checkLine.style.display = 'none';
    }, 1000);

    // answer check
    if (questionSource[questionNumber].answer == event.target.value) {
        checkLine.textContent = "Correct!"; 
        totalScore = totalScore + 1;

    } else {
        secondsLeft = secondsLeft - 10;
        checkLine.textContent = "Wrong! The correct answer is " + questionSource[questionNumber].answer + " .";
    }
         //THEN I am presented with another question
    if (questionNumber < questionSource.length -1 ) {
    // call showQuestions to bring in next question when any reactBtn is clicked
        showQuestion(questionNumber +1);
    } else {
    gameOver();
}
questionCount++;
}

//WHEN all questions are answered or the timer reaches 0, Game is over

function gameOver(){

    questionPage.style.display = "none";
    scoreBoard.style.display = "block";
    console.log(scoreBoard);
    // show final score
    finalScore.textContent = "Your final score is :" + totalScore ;
    // clearInterval(timerInterval);  
    timeLeft.style.display = "none"; 

};

// get the score and initials from local storage

function getScore (){
    var currentList = localStorage.getItem("Score List");
    if (currentList !== null){
        freshList = JSON.parse(currentList);
        return freshList;
    } else {
        freshList = [];
    } return freshList;
};

//calculate the score to the board



//event listeners
startBtn.addEventListener("click", startQuiz);