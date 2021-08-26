import { questions } from './questions.js';


document.querySelector("#start-quiz-button").addEventListener("click", startGame);

const timer = document.querySelector("#time");
let time = 60;

function setTimer() {
    timer.innerHTML = `Time: ${time}`
    time -= 1;
}

function startGame() {
    setInterval(setTimer, 1000);

    // Display the question and answers
}

console.log(questions);