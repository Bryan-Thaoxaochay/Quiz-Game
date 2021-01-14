// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// Necessary Functions: Timer, Building Quiz, Show Results, Save Results

//Timer
    // Create a timer area and ID in HTML
    // Select that ID in JS and create that into a variable (timer)
    // Create a variable (timerTime) that will be the beginning time for the quiz (75s)
    // Append timerTime to timer
    // Create a function that will decrease timerTime by 1s for every 1s or an extra 15s if the answer is incorrect

var timer = $("#timer");
var timerTime = 75;
var appendTimer = timer.append("Time: " + timerTime);

var interval = setInterval(function() {
    var timerDown = timerTime--;
    // timer.append("Time: " + timerDown);
    
    if (timerDown <= 0) {
    clearInterval(interval);
    }
}, 1000);


// Building Quiz
    // Create questions and answers (array)
    // Display questions and answers to HTML


// Questions and Answers
var questions = [
    {question: "Questions 1: ", choices: ["a. ", "b. ", "c.", "d. "], correctAnswer: 0},
    {question: "Questions 2: ", choices: ["a. ", "b. ", "c.", "d. "], correctAnswer: 0},
    {question: "Questions 3: ", choices: ["a. ", "b. ", "c.", "d. "], correctAnswer: 0},
    {question: "Questions 4: ", choices: ["a. ", "b. ", "c.", "d. "], correctAnswer: 0},
];

// Displaying Questions and Answers


// for (i = 0; i < questions.length; i++){
//      $("button").on("click", function(){
//         // $("button").text(questions[i]);
//         console.log(questions[i]);
// })
// }