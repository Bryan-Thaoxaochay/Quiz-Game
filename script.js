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






//Variables for Timer
var timer = $("#timer");
var timerTime = 60;
var appendTimer = timer.append("Time: " + timerTime);


// Variables for Function
var questions = $("#quizContainer");
var bottomButton = $("#button"); // Selecting <button> from HTML
var correctOrwrong = $("#correctOrwrong"); // Selecting <em> from HTML


// Function for Starting Game
function startGame() {
    $(bottomButton).on("click", function() {

        // Timer
        var interval = setInterval(function() {
            var timerDown = timerTime--;
            timer.append("Time: " + timerDown);
            
            if (timerDown <= 0) {
            clearInterval(interval);
            }
        }, 1000);

            // First Question and Answers
        questions.append($("<h1>" + myQuestions[0].question + "</h1>"));

        for (i = 0; i < myQuestions.length; i ++){
            questions.append($("<button>" + myQuestions[i].answers.a + "</button>"));
            questions.append($("<br>"));
            };

            // Second Question and Answers
        questions.append($("<h1>" + myQuestions[1].question + "</h1>"));

        for (i = 0; i < myQuestions.length; i ++){
            questions.append($("<button>" + myQuestions[i].answers.b + "</button>"));
            questions.append($("<br>"));
            };

            // Third Question and Answers
        questions.append($("<h1>" + myQuestions[2].question + "</h1>"));

        for (i = 0; i < myQuestions.length; i ++){
            questions.append($("<button>" + myQuestions[i].answers.c + "</button>"));
            questions.append($("<br>"));
            };

            // Fourth Question and Answers
        questions.append($("<h1>" + myQuestions[3].question + "</h1>"));

        for (i = 0; i < myQuestions.length; i ++){
            questions.append($("<button>" + myQuestions[i].answers.d + "</button>"));
            questions.append($("<br>"));
            };
    })
}

startGame();

//Questions and Answers in Arrays
var myQuestions = [

    {question: "How old is Chris?", 
   answers: {
       a: "Trick question", b: "Not even a bit", c: "Everyone!", d: "We don't think like computers"
    },
    correctAnswer: "a"
    },

   {question: "For this class, how confused are you?",
    answers: {
        a: "I have no idea", b: "No comment.", c: "No one..", d: "Too many things to remember.."
    },
    correctAnswer: "b"
    },

   {question: "Who has had the best background so far in class?",
    answers: {
        a: "Old enough", b: "Fist to five, probably five.", c:  "People who don't turn on their cameras..", d: "The language doesn't add up!"
    },
    correctAnswer: "a"
    },

   {question: "Why is coding challenging?",
    answers: {a: "A respectable 35", b: "Confusion is like a spectrum", c: "Definitely me", d: "All of the above and more"
    },
    correctAnswer: "c"
    }
];