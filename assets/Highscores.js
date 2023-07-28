var scoresList = document.querySelector(".scores")
var data = JSON.parse(localStorage.getItem("scores")) || []
var clearBtn = document.querySelector(".clearBtn")

for(var i = 0; i < data.length; i++) {
    var li = document.createElement("li")
    li.innerHTML = data[i].initials + " - " + data[i].score
    scoresList.append(li)
}

clearBtn.addEventListener("click", function() {
    localStorage.clear()
    window.location.reload()
})