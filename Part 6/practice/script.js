// function myname() {
//     let name = "sayan";
//     console.log(name);
// }

// function myname(name) {
//     console.log("name is: "+name);
// }


// function hi() {
//     function hii() {
//         console.log(x);
//     }
    
//     hii();
//     let x = 5;
// }


// const sumfunc = function sum(num1, num2) {
//     return num1 + num2;
// }


// function multipleGreet (func, n) {
//     for(let i=1; i<=n; i++) {
//         func();
//     }
// }
// let greet = function(){
//     console.log("hello");
// }
// multipleGreet(greet, 3);


// function oddEvenTest(request) {
//     if(request == "odd") {
//         return function(n) {
//             console.log("odd fn received");
//         }
//     }
//     else {
//         return function (n) {
//             console.log("even ");
//         }
//     }
// }

// let ans = oddEvenTest("odd");
// ans(1);

// const calculator = {
//     add: function(a,b) {
//         return a+b;
//     }
// };



// let arr = [1,2,3,4,5,6,7,8,9,10];
// let small = prompt("enter your number between 1 - 10: ");
// for(let i=0; i<arr.length; i++) {
//     if(arr[i] > small) {
//         console.log(arr[i]);
//     }
// }


// let str = prompt("Enter your string: ");
// let ans = "";
// for(let i=0; i<str.length; i++) {
//     if(ans.indexOf(str[i]) == -1) {
//         ans += str[i];
//     }
// }
// console.log(ans);


// let countryname = [];
// let name = prompt("enter country name: ");
// while(true) {
//     if(name == "no") {
//         break;
//     }
//     else {
//         countryname.push(name);
//         name = prompt("enter country name: ");
//     }
// }
// console.log(countryname);
// let largest = -1;
// for (let i=0; i<countryname.length; i++) {
//     if(countryname[i].length > largest) {
//         largest = i;
//     }
// }
// console.log(countryname[largest]);