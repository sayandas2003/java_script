// function squaresum(...args) { 
//     return args.reduce((sqsm, el) => {
//         el = el * el; // Square the element
//         return sqsm + el; // Add the squared value to the sum
//     }, 0);
// }


let body = document.querySelector('body');

let input = document.createElement('input');
let button = document.createElement('button');

button.innerText = "Click me";

body.append(input);
body.append(button);

input.placeholder = "username";
let id = input.getAttribute('id');
input.setAttribute('id', 'btn');


let btn = document.querySelector('#btn');
btn.style.backgroundColor = "blue";