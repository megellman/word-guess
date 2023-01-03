var startBtn = document.querySelector("#start-game");
var timer = document.querySelector("#timer");
var wordDisplay = document.querySelector("#word-display");
var time = 60;

startBtn.addEventListener("click", function(){
    // run game function here
})



//Timer
var countDown = setInterval(() => {
    time--;
    timer.textContent = time + "s";
    if(time === 0){
        clearInterval(countDown);
    }
}, 1000);