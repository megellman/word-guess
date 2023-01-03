/// variables
    // currentWord
    // wins = 0;
    // loss = 0;
    // guesses = [];
    var startBtn = document.querySelector("#start-game");
    var timer = document.querySelector("#timer");
    var time = 60;

    var countDown = setInterval(() => {
        time--;
        timer.textContent = time + "s";
        if(time === 0){
            clearInterval(countDown);
        }
    }, 1000);

// click event listener for Begin button that will trigger a function to
startBtn.addEventListener("click", function(){
    // function to start timer
    countDown();

    // select random word (function)
        //once a random word is selected it assigns to the global variable of currentWord
        // currentWord = randomWord 
    // displayWord (only chars that have been inputted user or _)
        // create a mew empty string var displayStr = "";
        // create a variable called won = true
        // iterate through the currentWord (cat)
            // while it examines each char (c -a -t)
                //check to see if that character exist in the guesses array
                    //nested for loop or use includes method
                        // if it does concat that value to the displayStr
                        // else - ut does not 
                        // concat  "_"
                            // toggle won to false
            // return dislayStr
                // target the 'wordbox"
                    // empty current content
                    //update text content to be displayStr
            // how do we know that we won? 
            //if won is true 
                // execute winGame Function
})

// the winGame function 
    //clear iterval
    // increment the win
    // display win status
// event listener - on entire document for a keydown
    // create variable assigned to value of key pressed
    // guesses.push(variable for key pressed)
    // displayWord
