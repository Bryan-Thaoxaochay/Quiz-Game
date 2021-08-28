import { questions } from './questions.js';

const introHeader = document.querySelector("#intro");
const rulesText = document.querySelector("#rules");
const startButton = document.querySelector("#start-quiz-button");
startButton.addEventListener("click", startGame);

function startGame() {
    timer = setInterval(setTimer, 1000);

    displayQuestion(questionNumber);

    answersText.addEventListener("click", (event) => {
        if (event.target.tagName === "LI" || event.target.tagName === "BUTTON") {
            questionNumber += 1;
            let userAnswer = event.target.textContent;
            questionNumber < questions.length ? displayNextQuestion(questionNumber, userAnswer) : quizDone();
        }
    });

}

const timerEl = document.querySelector("#time");
let time = 60;
let timer;
function setTimer() {
    timerEl.innerHTML = `Time: ${time}`
    time -= 1;
    if (time === 0) {
        alert("Game Over!");
        return;
    }
}

const questionText = document.querySelector("#question");
const answersText = document.querySelector("#answers");
const optionOne = document.querySelector("#option-one");
const optionTwo = document.querySelector("#option-two");
const optionThree = document.querySelector("#option-three");
const optionFour = document.querySelector("#option-four");
const horizontalLine = document.querySelector("hr");
const answerIndicator = document.querySelector("#response");
let questionNumber = 0;
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

const finalHeader = document.querySelector("#ending");
const scoreText = document.querySelector("#score-text");
const initialInput = document.querySelector("#initials");
const saveButton = document.querySelector("#save-score-button");
function quizDone() {
    questionText.style.display = "none";
    answersText.style.display = "none";
    horizontalLine.style.display = "none";
    answerIndicator.style.display = "none";

    finalHeader.innerHTML = "You finished the quiz!";
    scoreText.innerHTML = "Your score is ...";
    initialInput.innerHTML = "Please input your initials";
    saveButton.innerHTML = "Save Score";

    finalHeader.style.display = "block";
    scoreText.style.display = "block";
    initialInput.style.display = "block";
    saveButton.style.display = "block";

    timerEl.style.display = "none";
    clearInterval(timer);
}