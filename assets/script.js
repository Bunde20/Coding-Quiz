var introSection = document.querySelector(".introSection")
var startBtn = document.querySelector(".startBtn")
var quizSection = document.querySelector(".quizSection")
quizSection.style.display = "none"
var endSection = document.querySelector(".endSection")
endSection.style.display = "none"

startBtn.addEventListener("click", function () {
    introSection.style.display = "none"
    quizSection.style.display = "block"
    setInterval(function() {
        time--;
        timeLeftEl.innerHTML = time
    }, 1000)
    startQuiz(index)
})