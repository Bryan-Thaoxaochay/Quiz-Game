import { questions } from './questions.js';

const timer = document.querySelector("#time");
let time = 60;
document.querySelector("#start-quiz-button").addEventListener("click", startGame);

function startGame() {
    setInterval(setTimer, 1000);
}

function setTimer() {
    timer.innerHTML = `Time: ${time}`
    time -= 1;
}