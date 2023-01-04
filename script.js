/// variables
currentWord = "";
wins = 0;
losses = 0;
guesses = [];
var startBtn = document.querySelector("#start-game");
var timer = document.querySelector("#timer");
var time = 10;
var wordBox = document.querySelector("#word-box");
var winsContainer = document.querySelector("#wins");
var lossesContainer = document.querySelector("#losses")

function storeStats(){
    localStorage.setItem("wins", wins);
    localStorage.setItem("losses", losses);
}

function randomWord() {
    var words = ["cat", "dog", "potato"];
    var i = Math.floor(Math.random() * words.length);
    currentWord = words[i];
    return currentWord
}

document.addEventListener("keydown", (e) => {
    var key = e.key;
    if (guesses.includes(key)) {
        return
    } else {
        guesses.push(key);
        displayWord();
    }
});

function displayWord() {
    var displayStr = " ";
    var won = true;
    for (var i = 0; i < currentWord.length; i++) {
        if (guesses.includes(currentWord[i])) {
            displayStr += currentWord[i];
        } else {
            won = false;
            displayStr += "_";
        }
    }
    wordBox.textContent = displayStr;
    if (won) { winGame() };
}

var countdown;
startBtn.addEventListener("click", function() {
    storeStats();
    wordBox.textContent = "";
    guesses = [];
    time = 10;
    countdown = setInterval(counter, 1000);
    randomWord();
    console.log(currentWord);
    displayWord();
    return countdown
})

function stopCountdown() {
    clearInterval(countdown);
}

function counter() {
    time--;
    if (time === 0) {
        stopCountdown();
        timer.textContent = 0 + "s";
        losses++;
        winsContainer.textContent = wins;
        lossesContainer.textContent = losses;
        return time

    } else {
        timer.textContent = time + "s";

    }
}

function winGame() {
    wins++;
    clearInterval(countdown);
    time = 0;
    timer.textContent = time + "s";
    winsContainer.textContent = wins;
    lossesContainer.textContent = losses;
}

