// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     // btn.onclick = sayHello;
//     // btn.onclick = sayName;

//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function(){
//         console.log("you double clicked");
//     })
// }

// function sayHello(){
//     alert("Hello");
// }
// function sayName(){
//     alert("Apna College");
// }


let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let randomColor = generaterandomcolor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    console.log("color updated");
})
function generaterandomcolor()
{
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}


btn.onmouseenter = function() {console.log("mouse entered");}


let btn2 = document.createElement("button");
btn2.innerText = "click mee babayy";
let body = document.querySelector('body');
body.append(btn2);

btn2.addEventListener("click", ()=>{
    btn2.style.backgroundColor = "green";
})




let inp2 = document.createElement('input');
inp2.placeholder = "Enter your name";
let h2 = document.createElement('h2');

document.body.append(h2, inp2);

inp2.addEventListener("input", function () {
    // Allow only letters (A-Z, a-z) and spaces
    let filteredText = inp2.value.replace(/[^a-zA-Z ]/g, ""); 
    h2.innerText = filteredText; // Update heading dynamically
});