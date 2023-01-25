alert("This is the guessing game!");
let userName = prompt("Please enter your name");
alert("Click the button below 'Hints' on the left to begin");
// guessGame() gets invoked on user click of the button
let guessGameBtn = document.querySelector("#guessGame");
let randomNumber = Math.floor(Math.random() * 100 + 1);
// setting the count to 1 here, just in case the user gets the right number the first time
let guessCount = 1;
let guessesHistory = [];
let guessGame = function () {
    let userGuess = prompt(userName + ", Please guess a number between 0 and 100");
    // Use these console.logs to see the numbers and the information for testing
    console.log(randomNumber);
    console.log(userGuess);
    console.log(userName);
    
    console.log(guessesHistory);
    if (userGuess >= 0 && userGuess <= 100) {
        if (userGuess == randomNumber) {
            alert(`Congratulations, ${userName} you guessed the random number, ${randomNumber}.`)
            alert("It took you " + guessCount + " guesses to get the random number! Your guesses were " + guessesHistory +".");
            alert("Would you like to play again? Click the OK button. If not, just close your browser.");
            location.reload();
        } else if (userGuess > randomNumber) {
            alert("Lower, please guess again");
            guessCount += 1;
            guessesHistory.push(userGuess);
            guessGame();
        } else if (userGuess < randomNumber) {
            alert("Higher, please guess again");
            guessCount += 1;
            guessesHistory.push(userGuess);
            guessGame();
        } else if (userGuess !== typeof(number)) {
            alert("That's not a valid input, please enter a number.");
            guessGame();
        }
    };
};