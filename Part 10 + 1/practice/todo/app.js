let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");



btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn)
    ul.appendChild(item);
    inp.value = "";
})


// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         par.remove();
//     })
// }

// but for the new tasks which we have added by the UI 
// those delete buttons will not work for them as
// When you use addEventListener(), it only applies to the elements that were selected at that moment.


ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        // console.log(listItem);
        console.log("delete");
    }
})