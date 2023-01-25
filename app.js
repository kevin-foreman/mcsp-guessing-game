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

// function init() {
//     let playAgain = true;
//     while(playAgain) {
//         playRound(userName);
//         // Ask user if they want to play again
//         // TODO - validate input (make sure that it is either "Yes" or "No", case insensitive)
//         let input = prompt(`Would you like to play again`);
//         playAgain = (input.toLocaleLowerCase() === 'yes') ? true : false;
//         // If yes, run the game again
//         guessGame();
//         // If no, alert "Goodbye!"
//         location.
//     }
// }

let guessGame = function () {
    let userGuess = prompt(`${userName}, Please guess a number between 0 and 100`);
    let guessMultiple = parseInt(userGuess);
    // Use these console.logs to see the numbers and the information for testing
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
                alert(`It took you ${guessCount} guesses to get the random number! Your guesses were ${guessesHistory}.`);
                alert(`Would you like to play again? Click the OK button. If not, just close your browser.`);
                // init();
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

// init();