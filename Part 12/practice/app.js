// async function greet() {
//     // abc
//     // return "hello!";
// }

// greet()
// .then(() => {
//     console.log("promise was resolved!");
// })
// .catch((err)=> {
//     console.log("an error has occured!");
// })

// let demo = async () => {
//     return 5;
// }


// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     getNum();
// }


// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log("Random Number:", num);
//             resolve(num);
//         }, 1000);
//     });
// }





// h1 = document.querySelector("h1");

// function changeColor(color, delay)
// {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1;
//             if (num > 3)
//             {
//                 reject("promise rejected");
//                 // first of all the whole settimeout fn will be 
//                 // executed then the reject will be sent to the promise
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!");
//         }, delay);
//     })
// }

// async function nextcolor()
// {
//     try
//     {
//         await changeColor("red", 1000);
//         await changeColor("orange", 1000);
//         await changeColor("blue", 1000);
//         await changeColor("yellow", 1000);
//     }
//     catch(error)
//     {
//         console.log("error caught: ", error);
//     }
    

//     let a = 5;
//     console.log(a);
//     console.log("new number = ", a + 3);
// }




let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response) => {
//     console.log(response);
//     return response.json()
// })
// .then((data) => {
//     console.log(data.fact);

// })
// .catch((err) => {
//     console.log("error is: ", err);
// })


async function getFacts() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
}

