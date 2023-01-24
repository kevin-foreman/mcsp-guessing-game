alert("This is the guessing game!");
let userName = prompt("Please enter your name");
alert("Click the button below 'Hints' on the left to begin");
let guessGameBtn = document.querySelector("#guessGame");
let randomNumber = Math.floor(Math.random() * 100 + 1);
let guessCount = 1;
let guessGame = function () {
    let userGuess = prompt("Please guess a number between 0 and 100");
    console.log(randomNumber);
    // let userGuess = document.getElementById(guessGame).value;
    console.log(userGuess);
    console.log(userName);
    if (userGuess >= 0 && userGuess <= 100) {
        if (userGuess == randomNumber) {
            alert(`Congratulations, ${userName} you guessed the random number, ${userGuess}`)
            alert("It took you " + guessCount + " guesses to get the random number!");
            let replay = alert("Would you like to play again?");
            location.reload();
        } else if (userGuess > randomNumber) {
            alert("Lower, please guess again");
            guessCount += 1;
            guessGame();
        } else if (userGuess < randomNumber) {
            alert("Higher, please guess again");
            guessCount += 1;
            guessGame();
        }
    }
};