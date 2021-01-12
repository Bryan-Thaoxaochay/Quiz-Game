// Clicking on an answer option: moves to next question and declares right or wrong
// Clicking on the wrong answer: decreases time, declares you were wrong, and moves onto next question
// Clicking on the right answer: declares you were right and moves onto next question
// Score given at the end is the time remaining
// Entering initials at the end stores the score into "View High Scores"
// Questions are looped like an array and for loop


// Variables
var timer = document.querySelector("#timer");
var questions = document.getElementById("#questions");
var answerOne = document.getElementById("#answerOne");
var answerTwo = document.getElementById("#answerTwo");
var answerThree= document.getElementById("#answerThree");
var answerFour = document.getElementById("#answerFour");
var button = document.getElementById("#button");
var correctOrwrong = document.getElementById("#correctOrwrong");

// Timer - starts at 75s, decreases by 1s every 1s or 15s every wrong answer, and stops after the last question
var timerTime = 75;

var timeSpan = document.createElement("div");
timeSpan.innerHTML = timerTime;
timer.appendChild(timeSpan);

document(button).on("click", function{
    timerTime--;
})


// For Loop for Questions
questions = ["Welcome to My Quiz!", "1.", "2.", "3. ", "4. ", "5. ", "You finished with a score of..."];

for (i = 0; i < questions.length; i++) {

};

// For Loop for Answers
answerOne = ["What is 1", "What is 1", "What is 1", "What is 1"];
answerTwo = ["What is 2", "What is 2", "What is 2", "What is 2"];
answerThree = ["What is 3", "What is 3", "What is 3", "What is 3"];
answerFour = ["What is 4", "What is 4", "What is 4", "What is 4"];