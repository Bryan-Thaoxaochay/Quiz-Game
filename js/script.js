import { questions } from './questions.js';

const introHeader = document.querySelector("#intro");
const rulesText = document.querySelector("#rules");
const startButton = document.querySelector("#start-quiz-button");

const questionText = document.querySelector("#question");
const answersText = document.querySelector("#answers");
const optionOne = document.querySelector("#option-one");
const optionTwo = document.querySelector("#option-two");
const optionThree = document.querySelector("#option-three");
const optionFour = document.querySelector("#option-four");


startButton.addEventListener("click", startGame);

const timer = document.querySelector("#time");
let time = 60;
let questionNumber = 0;

function setTimer() {
    timer.innerHTML = `Time: ${time}`
    time -= 1;
    if (time === 0) {
        alert("Game Over!");
        return;
    }
}

function startGame() {
    // setInterval(setTimer, 1000);

    displayQuestion(questionNumber);

    answersText.addEventListener("click", (event) => {
        if (event.target.tagName === "LI" || event.target.tagName === "BUTTON") {
            questionNumber += 1;
            displayNextQuestion(questionNumber);
        }
    });

}

function displayQuestion(questionNumber) {
    // Display the question and answers
    introHeader.style.display = "none";
    rulesText.style.display = "none";
    startButton.style.display = "none";

    questionText.innerHTML = questions[questionNumber].question;
    optionOne.innerHTML = questions[questionNumber].optionOne;
    optionTwo.innerHTML = questions[questionNumber].optionTwo;
    optionThree.innerHTML = questions[questionNumber].optionThree;
    optionFour.innerHTML = questions[questionNumber].optionFour;

    questionText.style.display = "block";
    answersText.style.display = "block";
}

function displayNextQuestion(questionNumber) {
    questionText.innerHTML = questions[questionNumber].question;
    optionOne.innerHTML = questions[questionNumber].optionOne;
    optionTwo.innerHTML = questions[questionNumber].optionTwo;
    optionThree.innerHTML = questions[questionNumber].optionThree;
    optionFour.innerHTML = questions[questionNumber].optionFour;
}