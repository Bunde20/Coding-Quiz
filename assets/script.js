var introSection = document.querySelector(".introSection")
var startBtn = document.querySelector(".startBtn")
var quizSection = document.querySelector(".quizSection")
quizSection.style.display = "none"
var endSection = document.querySelector(".endSection")
endSection.style.display = "none"

var index = 0;
var score = 0;
var time = 60;

var quizData = [
    {
        questions: "Commonly used data types DO NOT include:",
        answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        correct: "3. Alerts"
    },
    {
        questions: "The condition in an if / else statement is enclosed with _______",
        answers: ["1. Quotes", "2. Curly brackets", "3. Parenthesis", "4. Square brackets"],
        correct: "2. Curly brackets"
    },
    {
        questions: "Arrays in JavaScript can be used to store _______",
        answers: ["1. Numbers and strings", "2 Other arrays", "3. Booleans", "4. All of the above"],
        correct: "4. All of the above"
    },
    {
        questions: "String values must be enclosed within _______ when being assigned variables.",
        answers: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parenthesis"],
        correct: "3. Quotes"
    },
    {
        questions: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. JavaScript", "2. Terminal/Bask", "3. For loops", "4. Console.log"],
        correct: "4. Console.log"
    }
]


startBtn.addEventListener("click", function () {
    introSection.style.display = "none"
    quizSection.style.display = "block"
    setInterval(function() {
        time--;
        timeLeftEl.innerHTML = time
    }, 1000)
    startQuiz(index)
})

function startQuiz(index) {
    answersList.innerHTML = ""
    questionEl.innerHTML = quizData[index].questions
    var answerSet = quizData[index].answers
    answerSet.forEach(function(value) {
        var li = document.createElement("li")
        li.innerHTML = value
        answersList.append(li)
        li.addEventListener("click", function(event) {
            var clicked = event.target.innerHTML
            if(clicked === quizData[index].correct) {
                score = score + 20
            } else {
                time = time - 10 // Subtract 10s for wrong answer
            }
            index++
            if(index <= quizData.length - 1) {
                startQuiz(index)
            } else {
                index = 0;
                endQuiz()
            } 
        })
    })
}
