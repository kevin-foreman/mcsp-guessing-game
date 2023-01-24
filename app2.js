let secret = getRandomInclusive(1, 100);

function getRandomInclusive(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min) + 1);
};

function init() {
    console.log("app.js started");
    console.log(`secret number: ${secret}`);
    let validInput = false;
    while (!validInput) {
        result = guessOnce();

        if (result === "Correct") {
            validInput = true;
        }
        alert(result);
    }
};

function guessOnce() {
    let numInp = prompt("Guess a number...");
    // asssume user entered a valid integer
    const num = parseInt(numInp);
    if (num < secret) {
        return "Lower"
    } else if (num > secret) {

    } else {
        return "Correct"
    }
};

init();