// // console.log("Hello World!");
// // console.log("Apna College!");

// let a = 10;
// let b = 5;
// console.log("Sum is: ", a + b);

// // this is a comment line


// let pencilPrice = 10;
// let eraserPrice = 5;
// // let output = "The toal price is : " + (pencilPrice + eraserPrice) + " Rupees";
// let output = `The total Price is : ${pencilPrice+eraserPrice} Rupees` // back ticks
// console.log(output);
// console.log(`The total Price is : ${pencilPrice+eraserPrice} Rupees`)



// let color = "red";
// if(color === "yellow")
// {
//     console.log("slow down");
// }
// if(color === "red")
// {
//     console.log("stop");
// }
// if(color === "green")
// {
//     console.log("go");
// }





// practice questions -

// let str = "abcd";
// if((str.length>3) && (str[0]==='a'))
// {
//     console.log("Good String!");
// }
// else console.log("Bad String!");



// // alert("something is wrong!");
// // let firstname = prompt("Enter your name:");
// // console.log(firstname);

// let firstname = prompt("Enter your first name:");
// let lastname = prompt("Enter your last name:");
// console.log(`Welcome ${firstname} ${lastname}!`);

// let name = prompt("Enter Name: ");
// let age = prompt("Enter age: ");
// alert(`${name} is ${age} years old`);

// let num = 3;
// switch(num)
// {
//     case(1):
//         console.log("January, Feb, March");
//         break;
//     case(2):
//         console.log("april, may, june");
//         break;
//     case(3):
//         console.log("july, aug, sep");
//         break;
//     case(4):
//         console.log("october, nov, dec");    
// }


// let str = "Animal";
// if((str.length>5) && (str[0]==='A' || str[0]==='a'))
// {
//     console.log("Golden String");
// }


// let num1 = 8;
// let num2 = 7;
// let num3 = 6;

// if(num1>num2)
// {
//     if(num1>num3) console.log(`${num1} is the greatest number.`);
// }
// else if(num3>num2) console.log(`${num3} is the greatest number`);
// else console.log(`${num2} is the greatest number`);



let num1 = prompt("Enter your first number: ");
let num2 = prompt("Enter your second number: ");
let lastindexnum1 = num1.length - 1;
let laastindexnum2 = num2.length - 1;
if(num1[lastindexnum1] === num2[laastindexnum2])
{
    console.log("Yes they have the same last digit");
}
else {
    console.log("no they dont have same last digit");
}