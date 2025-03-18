
// const student = 
// {
//     name: "shradha",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg()
//     {
//         console.log(this);
//         let eng = 1;
//         let math = 1;
//         let phy = 1;

//         let avg = (this.eng+this.math+this.phy) / 3;
//         console.log(avg);
//     }
// }

// // console.log(this);

// function greet(name, callback) {
//     console.log(`Hello, ${name}!`);
//     callback();
// }

// let sayGoodbye = function() {
//     console.log("Goodbye!");
// }

// // greet("Shradha", sayGoodbye);



// // arrow function -
// const sum= (a,b)=>
// {
//     console.log(a + b);
// }
// let cube = (a)=>
// {
//     console.log(a*a*a);
// }



// // setTimeout function-
// // console.log("hi there");

// // setTimeout( ()=> {console.log("apna college")}, 4000);
// // console.log("welcome to");

// // // setInterval function-
// // let id1 = setInterval(
// //     () => {
// //         console.log("hi there!");
// //         console.log("after 2 sec- ");
// //     }, 2000
// // );
// // let id2 = setInterval(
// //     () => {
// //         console.log("hi!");
// //         console.log("after 2 sec- ");
// //     }, 2000
// // );
// // console.log(id1);
// // console.log(id2);




// // *********** THIS KEYWORD WITH ARROW AND NORMAL FUNCTION **********
// const studentnew =
// {
//     name: "aman",
//     marks: 95,
//     prop: this, // this object has global scope

//     getName: function()
//     {
//         return this.name; // scope- calling object =. this = studentnew
//     },

//     getMarks: ()=>
//     {
//         console.log(this); // scope = parent ka scope - parent he studentnew and parent ka scope he global, this = window
//         // and marks studentnew me defined he window me defined nhi he so undefined
//         return this.marks;
//     },

//     getInfo1: function()
//     {
//         setTimeout( ()=> {
//             console.log(this); // studentnew object
//         }, 2000);
//     },
//     getInfo2: function()
//     {
//         setTimeout( function() {
//             console.log(this); // window object
//         }, 2000);
//     },
// };






// PRACTICE QUESTIONS - 

// //1. write an arrow function that returns the square of a number 'n'-
// const square = (n)=>{
//     return n*n
// };

// ******* // 
// 2. write a function that prints "hello world" 5 times at intervals of 2s each

    // let id3 = setInterval( ()=> {
    //     console.log("hello world");
    // }, 2000);

    // setTimeout(() => {
    //     clearInterval(id3);
    //     console.log("clear interval ran");
    // }, 10000);





// JS PART 7 QUESTIONS- 

// // 1. write an arrow function named arrayaverage that accepts an array of numbers and returns the average of those numbers
// const arrowAverage = (arr)=>
// {
//     let len = arr.length;
//     let sum = 0;
//     for(let i=0; i<len; i++)
//     {
//         sum = sum + arr[i];
//     }
//     return sum / len;
// }

// console.log(arrowAverage([1,2,3,4,5,6,7,8,9]));


// // 2. write an arrow function named isEven() that takes a single number as argument and returns if it is even or not
// const isEven = (n)=>
// {
//     if(n%2==0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// console.log(isEven(5));



// // 3.
// const object =
// {
//     message: 'Hello, World!',

//     logMessage()
//     {
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage.bind(object), 1000);
// setTimeout(object.logMessage, 1000);



4.
let length=4;
function callback()
{
    console.log(this.length);
}

const object = 
{
    length:5,
    method(callback)
    {
        callback();
    },
};
object.method(callback,1,2);



// try this too ---
// let length = 4;
// function callback(arg1, arg2) {
//     console.log("Arguments passed:", arg1, arg2);
//     console.log("this.length:", this.length);
// }

// const object = {
//     length: 5,
//     method(callback, ...args) {
//         callback(...args); // Passing arguments to callback
//     },
// };

// // Call method with arguments
// object.method(callback, "Hello", "World");
