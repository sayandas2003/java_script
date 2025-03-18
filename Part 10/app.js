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