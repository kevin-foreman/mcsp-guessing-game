alert("This is the guessing game!");

let guessGameBtn = document.querySelector("#guessGame");

let randomNumber = Math.floor(Math.random() * 10 + 1);

let guessGame = function() {
    let userGuess = prompt("Please guess a number between 0 and 10");
    console.log(randomNumber);
    let guessCount = 0;
    // let userGuess = document.getElementById(guessGame).value;
    console.log(userGuess);
    if (userGuess >= 0 && userGuess <= 10) {
        if (userGuess == randomNumber) {
            alert("Congratulations, you guessed the random number " + userGuess)
        } else {
            alert("You did not successfully guess the random number " + randomNumber)
        }
    }
};