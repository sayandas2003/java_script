// // let arr = [1,2,3,4,5];

// // let print = function(el)
// // {
// //     console.log(el);
// // };

// // arr.forEach(print);

// // arrow function
// // arr.forEach((el)=>{console.log(el)});




// let students =
// [
//     {
//         name: "sayan",
//         marks: 98 
//     },
//     {
//         name: "sahil",
//         marks: 99
//     },
//     {
//         name: "plaban",
//         marks: 90
//     }
// ];

// let gpa = students.map((el)=>{
//     return el.marks/10;
// });

// students.forEach(function(student)
// {
//     console.log(this.student);
//     console.log(student.marks);
// });

// let num = [1,2,3,4];
// let doublearr = num.map((el)=>
//     {
//         return el*2;
//     })
// console.log(doublearr);




// let nums = [1,2,3,4,5,6,7,8,9,10];
// let ans = nums.filter((el)=>{return el%2==0});

// // reduce-
// let newnum = [1,2,3,4];
// let finalval = newnum.reduce((res, el)=>{
//     console.log(res);
//     return res+el;
// });
// console.log(finalval);


// // finding maximum in an array using reduce function
// let maxfindarr = [1,2,3,4,5,6,32,65,2,3,43,21];
// let maxel = maxfindarr.reduce((res, el) =>{
//     return res > el?  res : el;

// });
// console.log(maxel);

// // 1. check if all numbers in our array are multiples of 10 or not
// let tenarr = [10,20,30,40,50,60,70,80,90];
// let checkmul = tenarr.every((el)=>{
//     return el%10==0;
// });
// console.log(checkmul);


// // 2. create a function to find the min number in an array
// let minarr = [1,2,3,4,5,6,7,8,9];
// let minarrcheck = minarr.reduce((min, el)=>{
//     return min<el? min:el;
// })
// console.log(minarrcheck);


// // default value-
// let defaultsum = function(a, b=3)
// {
//     console.log(a + b);
// }



// // spread with object literals
// const data = 
// {
//     email: "sayandas@gmail.com",
//     password: "abcd",
// };
// const datacopy = {...data, id:123};




// // rest - 
// function sum(...args)
// {
//     //arguments
//     for(let i=0; i<args.length; i++)
//     {
//         console.log("you gave us: ", args[i]);
//     }
// }


// let sumadd = (function sumadd(...args){
//     args.reduce((add , el)=>
//     {
//         return add + el;
//     })
// });



// // minimum value- 
// function minvalue(...args)
// {
//     return args.reduce((min, el)=>{
//         if(el<min) return el;
//         else return min;
//     })
// };



// // destructuring objects -
// const studentfinal = {
//     name: "karan",
//     age: 14,
//     class: 9,
//     subjects: ["hindi", "english", "math", "science"],
//     username: "karan@123",
//     password: "abcd"
// };

// let {username, password} = studentfinal;







// practice questions - 

// 1. square and sum the array elements using the arrow function 
//      and then find the average of the array

let nums = [1,2,3,4,5];

const square = nums.map((el)=>{ return el * el});
console.log(square);

let sum = square.reduce((ans, el)=>{return ans += el},0);
console.log(sum);

let avg = sum / nums.length;
console.log(avg);


// 2. create a new array using the map function whose each element 
// is equal to the original element plus 5.

let newarr = [1,2,3,4,5];
let plusfive = newarr.map((el)=>{
    return el + 5;
});
console.log(plusfive);



// 3. create a new array whose elements are in uppercase of 
// words present in the original array
let strings = ["adam", "bob", "catlyn", "donald", "eve"];
console.log(strings.map((el)=>{ return el.toUpperCase();}));



// 4. write a function called doubleAndReturnArgs which accepts 
// an array and a variable number of arguments. The function
// should return a new array with the original array values 
// and all of the additional arguments doubled

function doubleAndReturnArgs(arr,...args)
{
    return [arr, ...args.map((el)=>{return el*2;})];
};

console.log(doubleAndReturnArgs([1,2,3,4,5], 4,5,5,6,6,7));




// 5. write a function called mergeObjects that accepts two objects and
// returns a new object which contains all the keys and values of the
// first object and second object.
const obj1 = {
    name: "sayan",
    age: 23
};
const obj2 = {
    names: "ranisha",
    ages: 24
};

const mergeObjects = ((obj1, obj2)=>{return {...obj1, ...obj2};});
console.log(mergeObjects(obj1, obj2));