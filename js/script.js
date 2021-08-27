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
const horizontalLine = document.querySelector("hr");
const answerIndicator = document.querySelector("#response");


startButton.addEventListener("click", startGame);

const timerEl = document.querySelector("#time");
let time = 60;
let timer;


let questionNumber = 0;

function setTimer() {
    timerEl.innerHTML = `Time: ${time}`
    time -= 1;
    if (time === 0) {
        alert("Game Over!");
        return;
    }
}

function startGame() {
    timer = setInterval(setTimer, 1000);

    displayQuestion(questionNumber);

    answersText.addEventListener("click", (event) => {
        if (event.target.tagName === "LI" || event.target.tagName === "BUTTON") {
            questionNumber += 1;
            let userAnswer = event.target.textContent;
            displayNextQuestion(questionNumber, userAnswer);
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
    horizontalLine.style.display = "block";
    answerIndicator.style.display = "block";
}

function displayNextQuestion(questionNumber, userAnswer) {
    questionText.innerHTML = questions[questionNumber].question;
    optionOne.innerHTML = questions[questionNumber].optionOne;
    optionTwo.innerHTML = questions[questionNumber].optionTwo;
    optionThree.innerHTML = questions[questionNumber].optionThree;
    optionFour.innerHTML = questions[questionNumber].optionFour;

    if (userAnswer === questions[questionNumber-1].answer()) {
        answerIndicator.innerHTML = "Correct!";
    } else {
        answerIndicator.innerHTML = "Wrong";
        clearInterval(timer);
        time -= 5;
        timer = setInterval(setTimer, 1000);
    }

}