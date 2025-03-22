let btn = document.querySelector('button');
let div = document.querySelector('div');
let h1 = document.querySelector('h1');

btn.addEventListener("click", changecolor);


function changecolor() {
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);
    let rbgColor = `rgb(${color1}, ${color2}, ${color3})`;
    div.style.backgroundColor = rbgColor;
    h1.innerText = rbgColor;
}