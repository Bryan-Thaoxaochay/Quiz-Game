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


// Questions and Answers in Arrays
var questions = [
   {question: "How old is Chris?", 
   answers: {
       a: "Definitely 34", b: "I have no idea", c: "Old enough"
    },
    correctAnswer: "b"
    },

   {question: "For this class, how confused are you?",
    answers: {
        a: "Not even a bit", b: "No comment.", c: "Fist to five, probably five"
    },
    correctAnswer: "c"
    },

   {question: "Who has had the best background so far in class?",
    answers: {
        a: "Jayden", b: "Omaur", c:  "Blake: red wedding :("
    },
    correctAnswer: "c"
    },

   {question: "Why is coding challenging?",
    answers: {a: "We don't think like computers", b: "Too many things to remember..", c: "All of the above"
    },
    correctAnswer: "c"
    }
];

// Displaying Questions
var questions = $("#questions");

questions.append($("<h1>" + myQuestions[0] + "</h1>"));