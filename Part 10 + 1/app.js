// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("paragraph was clicked");
// })

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//     console.log("mouse inside box");
// })

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(event){
//     console.log(event);
// })
// btn.addEventListener("dblclick", function(event){
//     console.log(event);
// })


// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function(event){
//     console.log("code ="+event.code);
//     if(event.code == "KeyU")
//     {
//         console.log("character moves up");
//     }
//     else if(event.code == "KeyB")
//         {
//             console.log("character moves backward");
//         }
//     else if(event.code == "KeyL")
//         {
//             console.log("character moves left");
//         }
//     else if(event.code == "KeyR")
//         {
//             console.log("character moves right");
//         }
// })
// let input = document.querySelector("input");
// input.addEventListener("keyup", function(){
//     console.log("key was released");
// })







// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     // console.dir(form);



//     // let user = this.elements[0]; //same as form.elements[0]
//     // let pass = this.elements[1];
//     // console.log(user.value);
//     // console.log(pass.value);


//     // console.log(inp);
//     // console.dir(inp);
//     // console.dir(inp.value);
// })


// let user = document.querySelector("#user");

// user.addEventListener("change", function(){
//     console.log("change event");
//     console.log("final value = ", this.value);
// })

// user.addEventListener("input", function(){
//     console.log("input event");
//     console.log("final value = ", this.value);
// })



// let inp = document.querySelector("#text");
// let p = document.querySelector("p");
// inp.addEventListener("input", function(){
//     p.innerText = inp.value;
// })



// Practice questions -
//1. Try ou the following events in Event Listener on your own:
// i. mouseout ii. keypress     iii.scroll      iv.load

let div = document.querySelector('.div');
div.addEventListener("mouseout",function(event){
    this.style.backgroundColor = "pink";
    if (event.shiftKey) {
        console.log("Shift key was held while moving out!");
    } else {
        console.log("Mouse moved out without Shift key.");
        console.log(`Mouse left at X: ${event.clientX}, Y: ${event.clientY}`);
    }
})
div.addEventListener('scroll', function () {
    console.log(`Scroll Top: ${document.documentElement.scrollTop}`);
    console.log(`Scroll Left: ${document.documentElement.scrollLeft}`);
});
let timer;
div.addEventListener('scroll', function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
        console.log('Debounced Scroll Event!');
    }, 200);
});

