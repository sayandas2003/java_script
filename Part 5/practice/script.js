// let range = prompt("Enter the highest number in which you want to guess: ");
// let randomNumber = Math.floor(Math.random() * range) + 1;


// let guess = prompt("try guessing a number: ");
// while(true) {
//     if(guess == randomNumber) {
//         console.log("your guess was correct! the number is: ",randomNumber);
//         break;
//     }
//     else if(guess < randomNumber) {
//         guess = prompt("The guessed number is small, Try guessing larger!");
//     }
//     else {
//         guess = prompt("oh! its larger..try guessing smaller: ");
//     }
// }


const key = "name";
const person = {
    name : "alice",
    age : 25,
}

let start = 2;
let end = 3;
let range = Math.floor(Math.random() * (end - start + 1)) + start;
console.log(range);