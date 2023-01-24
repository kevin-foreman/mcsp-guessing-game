alert("This is the guessing game!");
let guessGameBtn = document.querySelector("#guessGame");
let randomNumber = Math.floor(Math.random() * 10 + 1);
let guessCount = 1;
let guessGame = function () {
    let userGuess = prompt("Please guess a number between 0 and 10");
    console.log(randomNumber);
    // let userGuess = document.getElementById(guessGame).value;
    console.log(userGuess);
    if (userGuess >= 0 && userGuess <= 10) {
        if (userGuess == randomNumber) {
            alert("Congratulations, you guessed the random number " + userGuess)
            alert("It took you " + guessCount + " guesses to get the random number!");
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