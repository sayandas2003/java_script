// // guessing game-
// const max = prompt("enter your maximum number");

// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("guess the number: ");

// while(true)
// {
//     if(guess == "quit")
//     {
//         console.log("user quit");
//         break;
//     }
//     if(guess == random)
//     {
//         console.log("you are right!, random number was:",random);
//         break;
//     }
//     else if(guess<random)
//     {
//         guess = prompt("guess is small");
//     }
//     else if(guess>random)
//         {
//             guess = prompt("guess is large");
//         }
// }








// // guessing game advanced-

// let range = prompt("Enter the range in which you want to generate: ");
// let randomnumber = Math.floor(Math.random() * range) + 1;

// let guessnumber = Math.floor(Math.random() * range) + 1;
// while(true)
// {
//     if(guessnumber == randomnumber)
//     {
//         console.log("The correct answer is: ",randomnumber);
//         break;
//     }
//     else
//     {
//         console.log("incorrect number guessed: ",guessnumber);
//         guessnumber = Math.floor(Math.random() * range) + 1;
//     }
// }









// // Guessing game ultra advanced

// let range = prompt("Enter the range in which you want to generate: ");
// let randomnumber = Math.floor(Math.random() * range) + 1;

// let low = 1;  // Start of the range
// let high = range;  // End of the range
// let guessnumber = Math.floor(Math.random() * (high - low + 1)) + low;

// while (true) {
//     if (guessnumber == randomnumber) {
//         console.log("The correct answer is:", randomnumber);
//         break;
//     } else if (guessnumber > randomnumber) {
//         console.log("The number is smaller, and you have guessed:", guessnumber);
//         high = guessnumber - 1; // Update the upper bound
//     } else if (guessnumber < randomnumber) {
//         console.log("The number is greater, and you have guessed:", guessnumber);
//         low = guessnumber + 1;  // Update the lower bound
//     }
    
//     // Generate a new guess within the updated range
//     guessnumber = Math.floor(Math.random() * (high - low + 1)) + low;
// }










let gameType = null;
let randomnumber;
let low = 1;
let high;
let attempts = 0;

// Game selection event listeners
document.getElementById("basic-game").addEventListener("click", function () {
    gameType = "basic";
    setupGame();
});

document.getElementById("advanced-game").addEventListener("click", function () {
    gameType = "advanced";
    setupGame();
});

document.getElementById("ultra-advanced-game").addEventListener("click", function () {
    gameType = "ultra-advanced";
    setupGame();
});

// Function to set up the game
function setupGame() {
    document.querySelector(".game-selection").style.display = "none";
    document.querySelector(".game-section").style.display = "block";
}

// Start game based on game type
document.getElementById("start-game").addEventListener("click", function () {
    const range = document.getElementById("range").value;
    if (range && range > 1) {
        high = Number(range);
        randomnumber = Math.floor(Math.random() * high) + 1;
        attempts = 0;

        document.querySelector(".game-section").style.display = "none";
        document.querySelector(".game-play").style.display = "block";

        console.log("Random Number (Debug):", randomnumber); // For debugging
        if (gameType === "advanced") {
            advancedGame();
        }
    } else {
        alert("Please enter a valid range greater than 1.");
    }
});

// Basic game logic
function basicGame(guess) {
    if (guess === randomnumber) {
        endGame(`You guessed it right! The number was ${randomnumber}.`);
    } else if (guess > randomnumber) {
        document.getElementById("hint").innerText = "Your guess is too high. Try again.";
    } else {
        document.getElementById("hint").innerText = "Your guess is too low. Try again.";
    }
}

// Advanced game logic
function advancedGame() {
    let guess = Math.floor(Math.random() * high) + 1;
    console.log("Advanced Guess:", guess);
    while (guess !== randomnumber) {
        console.log(`Incorrect guess: ${guess}`);
        guess = Math.floor(Math.random() * high) + 1;
    }
    endGame(`The correct answer is: ${randomnumber}.`);
}

// Ultra advanced game logic
function ultraAdvancedGame(guess) {
    if (guess === randomnumber) {
        endGame(`You guessed it right! The number was ${randomnumber}.`);
    } else if (guess > randomnumber) {
        document.getElementById("hint").innerText = "The number is smaller. Try again.";
        high = guess - 1;
    } else {
        document.getElementById("hint").innerText = "The number is greater. Try again.";
        low = guess + 1;
    }
}

// Submit guess
document.getElementById("submit-guess").addEventListener("click", function () {
    const guess = Number(document.getElementById("guess").value);
    attempts++;

    if (gameType === "basic") {
        basicGame(guess);
    } else if (gameType === "ultra-advanced") {
        ultraAdvancedGame(guess);
    }
});

// Quit game
document.getElementById("quit-game").addEventListener("click", function () {
    alert("You quit the game.");
    location.reload(); // Reload to restart
});

// End game and display results
function endGame(message) {
    document.querySelector(".game-play").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("final-message").innerText = `${message} Attempts: ${attempts}.`;
}

// Play again
document.getElementById("play-again").addEventListener("click", function () {
    location.reload(); // Reload to restart
});
