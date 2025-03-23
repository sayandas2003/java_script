// function hello()
// {
//     console.log("inside hello fnx");
//     console.log("hello");
// }

// function demo()
// {
//     console.log("calling hello fnx")
//     hello();
// }

// console.log("calling demo fnx")
// demo();
// console.log("done, bye!")


// function one(){
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();



// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a + b);


// setTimeout(() => {
//     console.log("apna college");
// }, 2000);
// setTimeout(() => {
//     console.log("hello world");
// }, 2000);
// console.log("hello");


// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange)
// {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//         // If nextColorChange is a function, it calls the function.
//     }, delay);
// }

// changeColor("red", 1000, ()=> {
//     changeColor("orange", 1000, ()=>{
//         changeColor("green", 1000);
//     });
// });








// h1 = document.querySelector("h1");
// function changeColor(color)
// {
//     h1.style.color = color;
// }
// // setTimeout(changeColor("red"), 1000);
// // setTimeout(changeColor("orange"), 2000);
// // setTimeout(changeColor("green"), 3000);
// setTimeout(() => changeColor("red"), 1000);
// setTimeout(() => changeColor("orange"), 2000);
// setTimeout(() => changeColor("green"), 3000);
// // // h1's color immediately becomes green (since changeColor("green") runs last).
// // // The setTimeout calls do nothing because they received undefined.





// function savetoDb(data, success, failure)
// {
//     let internetSpeed = Math.floor(Math.random() * 10) +1;
//     if(internetSpeed > 4)
//     {
//         success();
//     }
//     else
//     {
//         failure();
//     }
// }
// savetoDb("apna college", ()=>{
//     console.log("success: your data was saved");
//     savetoDb("hello world", ()=>
//     {
//         console.log("success2: data2 saved");
//         savetoDb("third layer", ()=>
//         {
//             console.log("success3: data3 saved");
//         },
//         ()=>
//         {
//             console.log("failure3: weak connection");
//         })
//     },
//     ()=>
//     {
//         console.log("failure2: weak connection");
//     })
// },
// ()=>{
//     console.log("failure: weak connection. data not saved")
// });



// Promise -
// function savetoDb(data)
// {
//     return new Promise((resolve, reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) +1;
//         if(internetSpeed > 4)
//         {
//             resolve("success: data was saved");
//         }
//         else
//         {
//             reject("failure: weak connection");
//         }
//     })
// }
// This function returns a Promise.
// It generates a random internet speed between 1 and 10.
// If speed is greater than 4, it resolves (success) the Promise.
// If speed is 4 or below, it rejects (failure) the Promise.



// let request = savetoDb("apna college"); // req = promise object
// request.then(()=>{
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise was rejected");
//     console.log(request);
// })

// OR -
// savetoDb("apna college")
//     .then(()=>{
//         console.log("data1 saved");
//         savetoDb("helloworld")
//         .then(()=>{
//             console.log("data2 saved");
//         })
//         // alag se catch likhne ki jarurat nhi he...agar store nhi hua toh data1 ka hi catch block kaam karega
//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//         // console.log(request);
//     });



// savetoDb("apna college")
//     .then((result)=>{
//         console.log("data1 saved");
//         console.log("result of promise: ",result);
//         return savetoDb("helloworld")
//     })
//     .then((result)=>{
//         console.log("data2 saved");
//         console.log("result of promise: ",result);
//         return savetoDb("hi guys")
//     })
//     .then((result)=>{
//         console.log("data3 saved");
//         console.log("result of promise: ",result);
//     })
//     .catch((error)=>{
//         console.log("promise was rejected");
//         console.log("error of promise: ",error);
//     });






// no catch as reject kabhi hoga hi nhi unless syntax error
// no reject block too
// h1 = document.querySelector("h1");

// function changeColor(color, delay)
// {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color changed!");
//         }, delay);
//     })
// }

// changeColor("red", 1000)
// .then((result)=>{
//     console.log(result);
//     return changeColor("blue", 1000);
// })
// .then((result)=>{
//     console.log(result);
//     return changeColor("green", 1000);
// })
// .then((result)=>{
//     console.log(result);
//     return changeColor("yellow", 1000);
// })
// changeColor("red", 1000, ()=> {
//     changeColor("orange", 1000, ()=>{
//         changeColor("green", 1000);
//     });
// });
