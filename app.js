alert("This is the guessing game!");

let guessGameBtn = document.querySelector("#guessGame");

let numberGuess = Math.floor(Math.random() * 10 + 1);

let guessGame = function() {
    let doc = prompt("Please guess a number between 0 and 10");
    console.log(numberGuess);
    let guess = 1;
    // if (numberGuess == userGuess)
};