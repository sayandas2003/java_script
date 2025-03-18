// let msg = "    hello     ";
// let msg1 = "  hel  lo   "
// msg.trim();

// let password = prompt("Set your password!");
// let newpassword = password.trim();
// console.log(`Your password is: ${newpassword}`);

// let msg = "ILoveCoding";
// let hi = msg.slice(-1);
// let replace = msg.replace("I", "He");
// let repeat = msg.repeat(3);


// let msg = "help";
// let newmsg = msg.trim().toUpperCase();
// console.log(newmsg);


// let name = "ApnaCollege";
// let newname = name.replace("Apna","Our");
// let newn = name.slice(4).replace("l","t");



// let students = ["sayan", "Ranisha", "Ankita"];

// let start = ['january', 'july', 'march', 'august'];
// // start.shift().shift().unshift("june").unshift("july");

// start.shift()
// start.shift()
// let check = start.unshift("june")
// start.unshift("july");


// let cars = ["audi", "bmw", "xuv", "maruti"];


// let start = ["january", "july", "march", "august"];
// let words = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];

// let test  = ['a', 'k', 'b', 'z', 'n', 'm'];



// let nums = [[1,2], [3,4], [5,6]];


// let tictactoe = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];



// PRACTICE QUESTONS -

// let arr = [7, 9, 0, -2];
// let n = 3;

// let str = prompt("please enter a string: ");

// if(str.length == 0)
// {
//     console.log("string is empty");
// }
// else console.log("string is not empty");

// let character = prompt("please enter a character");
// if(character>='a' && character<='z') console.log("Character is is lowercase!");
// else console.log("character is in upper case!");


// let str = prompt("Enter your string!");
// console.log(`your original string is ${str} & the trimmed string is ${str.trim()}`);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let element = Number(prompt("Enter your element: "));
// if(arr.indexOf(element)!=-1) console.log("element found!");
// else console.log("element not found!");




let arr = [7, 9, 0, -2];
let n = 3;
for (let i=0; i<n; i++) {
    console.log(arr[i]);
}

let arr1 = [7, 9, 0, -2];
let n1 = 3;
for (let i=arr1.length - 1; i>=arr1.length -n; i--) {
    console.log(arr[i]);
}

let string1 = "";
if(string1.length > 0) console.log("not blank");
else console.log("blank");