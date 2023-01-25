// Alerting the user as soon as the application is launched
alert(`This is the guessing game!`);

// Use the prompt window to capture the userName
let userName = prompt("Please enter your name");

// Alert the user to the button which will initiate the game
alert("Click the button below 'Hints' on the left to begin");

// guessGame() gets invoked on user click of the button
let guessGameBtn = document.querySelector("#guessGame");
let randomNumber = Math.floor(Math.random() * 100 + 1);

// setting the count to 1 here, just in case the user gets the right number the first time
let guessCount = 1;
let guessesHistory = [];

// In theory this code block will allow a user to play a subsequent game and compare their result to the
// previous result
function subsequentGame() {
    let playAgain = true;
    while (playAgain) {
        // guessGame();
        // Ask user if they want to play again
        let input = prompt(`Would you like to play again??`);
        if (playAgain = (input.toLowerCase() === 'yes') ? true : false); {
            // If yes, run the game again
            if (playAgain === true) {
                window.location.reload;
                guessGame();
            } else {
                // If no, alert "Goodbye!"
                alert(`Goodbye`);
                window.location.reload;
            }
        }
    }
};

function guessGame() {
    let userGuess = prompt(`${userName}, Please guess a number between 0 and 100`);
    let guessMultiple = parseInt(userGuess);
    // Use these console.logs to see the numbers and the information for testing and/or adding features
    console.log(randomNumber);
    console.log(guessMultiple);
    console.log(userName);
    console.log(guessesHistory);

    if (!Number.isInteger(guessMultiple)) {
        alert(`Invalid input, please enter an integer.`);
        guessGame();
    };

    if (guessMultiple >= 0 && guessMultiple <= 100) {
        if (Number.isInteger(guessMultiple)) {
            if (guessMultiple === randomNumber) {
                alert(`Congratulations, ${userName} you guessed the random number, ${randomNumber}.`)
                alert(`It took you ${guessCount} guesses to get the random number! Your guesses were ${guessesHistory},${randomNumber}.`);
                // let playAgain = prompt(`Would you like to play again? Type 'yes' or 'no'.`);
                subsequentGame();
            } else if (guessMultiple > randomNumber) {
                alert(`Lower, please guess again`);
                guessCount += 1;
                guessesHistory.push(guessMultiple);
                guessGame();
            } else if (guessMultiple < randomNumber) {
                alert(`Higher, please guess again`);
                guessCount += 1;
                guessesHistory.push(guessMultiple);
                guessGame();
            };
        };

    };



};