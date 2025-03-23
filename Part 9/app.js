// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector("div a"));



// // practice question- 
// // add the following elements to the coantainer using only javascript and the dom methods

// // 1. a <p> with red text that says "hey im red!"
// let para1 = document.createElement('p');
// para1.innerText = "Hey I am red!";
// para1.style.color = 'red';

// let body = document.querySelector('body');
// body.appendChild(para1);
// // document.querySelector('body').append(para1);

// //2. and<h3> with blue text that says "Im a blue h3!"
// let h = document.createElement('h3');
// h.innerText = "I'm a blue h3!";
// h.style.color = 'blue';
// body.appendChild(h);


// // 3. a <div> with a black border and pink background color with the following elements inside of it:
// // i. another <h1> that says "i'm in a div"
// // ii. a <p> that says "ME TOO!"
// let div = document.createElement('div');
// div.style.border = '10px solid black';
// div.style.backgroundColor = 'pink';

// let hone = document.createElement('h1');
// hone.innerText = ("I'm in a div");
// let pone = document.createElement('p');
// pone.innerText = "ME TOO!";

// div.append(hone);
// div.append(pone);

// body.appendChild(div);



// // practice questions - 
// // 1. create a new input and button element on the page using javaScript only. set the text of button to "click me"
// let body = document.querySelector('body');
// let input = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = "Click me";
// body.append(input);
// body.append(btn);

// // 2. add following attributes to the element:
// // i. change placeholder value of input to 'username'
// // ii. change the id of button to "btn"
// // input.placeholder = "username";
// input.setAttribute('placeholder', "username");
// // btn.id = "btn";
// btn.setAttribute("id", "btn");

// // 3. access the btn using the querySelector and button id. change the button background color to blue and text color to white
// document.querySelector("#btn").style.backgroundColor = "blue";
// document.querySelector("#btn").style.color = "white";

// // 4. create an h1 element on the page and set its text to "DOM Practice" underlined. change its color to purple
// let h1 = document.createElement("h1");
// h1.innerText = ("DOM Practice");
// h1.style.color = "purple";
// h1.style.textDecoration = "underline";
// body.prepend(h1);


// // 5. create a p tag on the page and set its text to "apna college delta practice", where delta is bold
// let p = document.createElement('p');
// p.innerHTML = "Apna College <b>Delta</b> Practice";
// body.append(p);









// // practice qs practice - 
// let p = document.createElement('p');
// p.style.color = "red";
// p.innerText = "Hey I'm red!";
let body = document.querySelector('body');
// body.appendChild(p);


// let h3 = document.createElement('h3');
// h3.style.color = "blue";
// h3.innerText = "I'm a blue h3";
// body.appendChild(h3);


// let div = document.createElement('div');
// div.style.backgroundColor = "pink";
// div.style.borderColor = "black";

// let h1 = document.createElement('h1');
// h1.innerText = "I'm in a div";
// let p2 = document.createElement('p');
// p2.innerText = "ME TOO!";

// div.appendChild(h1);
// div.appendChild(p2);
// body.appendChild(div);



// assignment question practice - 
let inpt = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = "click me!";

body.appendChild(inpt);
body.appendChild(btn);

inpt.placeholder = "username";
btn.setAttribute('id', 'btn');

let btnid = document.querySelector('#btn');
btnid.style.backgroundColor = "blue";
btnid.style.color = "white";

let h1 = document.createElement('h1');
h1.innerText = "DOM Practice!";
h1.style.color = "purple";
h1.style.textDecoration = "underline";
body.prepend(h1);


let p3 = document.createElement('p');
p3.innerHTML = "Apna College <b>Delta</b> Practice";
body.appendChild(p3);




let div = document.createElement("div");
div.append("Hello, ", document.createElement("b"), " World!");  
document.body.append(div);
