function hello()
{
    console.log("Hello");
}

function printName()
{
    console.log("apna college!");
    console.log("shradha khapra");
}

function print1to5()
{
    for(let i=1; i<=5; i++)
    {
        console.log(i);
    }
}


function isAdult()
{
    let age = prompt("Enter your age: ");
    if(age>=18)
    {
        console.log("You are an adult");
    }
    else
    {
        console.log("you child nigga");
    }
}


function rolldice()
{
    console.log(Math.floor(Math.random() * 6)+1);
}


function pirintInfo(name, age)
{
    console.log(`${name}'s age is ${age}`);
}

// pirintInfo("sayan", 22);
// pirintInfo( 22);



function calaverage(a,b,c)
{
    console.log((a+b+c)/3);
}
// calaverage(2,4,6);


function printtable(n)
{
    for(let i=1; i<=10; i++)
    {
        console.log(i*n);
    }
}
// printtable(2);


function returnsun(n)
{
    return (n*(n+1))/2;
}
// console.log(returnsun(4));


let str = ["hi", "hello", "bye", "!"];

function concat(str)
{
    let result="";
    for(let i =0; i<str.length; i++)
    {
        result += str[i];
    }
    return result;
}
// console.log(concat(str));



{
    // var a = 25;//can be accessed from outside the block
    let a  = 25; // cannot be accessed
}
// console.log(a);



// lexical scope -
function outerFunc()
{
    let x = 5;
    let y = 6;

    function innerFunc()
    {
        console.log(x);
    }

    innerFunc();
}


// functino expressions - 
// let name = "shardha";

// let sum = function(a,b)
// {
//     return a+b;
// }
// console.log(sum(1,2));
// sum = "i";
// console.log(sum(1,2));


// higher order functions -
// takes one or multiple functions as arguments
function multiiplegreet(func , n)
{
    for(let i=0; i<n; i++)
    {
        func();
    }
}
function printgreet()
{
    console.log("hello");
}
// multiiplegreet(printgreet, 5);

// returns a function




function oddeventest(request)
{
    if(request == "odd")
    {
        return function(n)
        {
            console.log(!(n%2 == 0));
        }
    }
    else if(request == "even")
    {
        return function(n)
        {
            console.log((n%2 == 0));
        }
    }
    else 
    {
        console.log("invalid");
    }
}
let ans = oddeventest("odd");
// ans(3);


const calculator = 
{
    add: function (a,b)
    {
        return a+b;
    },
    sub: function(a,b)
    {
        return (a-b);
    },
    mul: function(a,b)
    {
        return a*b;
    }
};



const calc = 
{
    num: 5,
    add: function(a,b)
    {
        return a+b;
    },
    sub: function(a,b)
    {
        return a-b;
    },
    mul: function(a,b)
    {
        return a*b;
    }
};

const calcs =
{
    add(a,b)
    {
        return a+b;
    }
};




// assignment -

// js function that returns array elements larger than a number
// let num = prompt("Enter the number: ");
// let arr = [1,2,3,4,5,6,7,8,9];
// let newarr = [];
// for(let i=0; i<arr.length; i++)
// {
//     if(arr[i]>num)
//     {
//         newarr.push(arr[i]);
//     }
// }
// console.log(newarr);


// write a js function to extract unique characters form a string
// let string = "abcdabcdefgggh";
// let ansstring = "";
// for(let i=0; i<string.length; i++)
// {
//     let tempstring = string[i];
//     if(ansstring.indexOf(tempstring) == -1)
//     {
//         ansstring += tempstring;
//     }
// }
// console.log(ansstring);



// function that accepts a list of country names as input and returns the longest country anme as output
// let string = [];
// let inputstring = prompt("Enter the country name: ");
// while(inputstring != -1)
// {
//     string.push(inputstring);
//     inputstring = prompt("Enter the country name: ");
// };

// let maxindex = -1;
// let maxstring = "";
// for(let i=0; i<string.length; i++)
// {
//     if(maxindex < string[i].length)
//     {
//         maxindex = string[i].length;
//         maxstring = string[i];
//     }
// }
// console.log(maxstring);




// funciton to count the number of vowels in a string argument
// let string = "aeioubcdefgh";
// let count = 0;
// for(let i=0; i<string.length; i++)
// {
//     let curr = string[i];
//     if( curr == 'a' ||
//         curr == 'e' ||
//         curr == 'i' ||
//         curr == 'o' ||
//         curr == 'u')
//     {
//         count++;
//     }
// }
// console.log(count);





// js function to generate a random number with a range(start, end);
let start = 2;
let end = 5;
console.log(Math.floor(Math.random() * (end - start + 1)) + start);