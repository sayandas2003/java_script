// for(let i=1; i<=15; i++)
// {
//     if(i%2 != 0) console.log(i);
// }


// let fav_movie = "Munna Bhai";
// let guess = prompt("enter your movie!");
// while(fav_movie != guess && guess!="Quit")
// {
//     guess = prompt("giving you another chance!");
// }
// console.log("Cograts!! you guessed it correctly! or you gave up!");


// let heroes = [["superman", "batman", "wonder woman"], ["spiderman", "ironman", "thor"]];

// for(list of heroes)
// {
//     // console.log(list);
//     for(name of list)
//     {
//         console.log(name);
//     }
// }






// let todo = [];
// let req = prompt("Please Enter your request");
// console.log(req);

// while(1)
// {
//     if(req == "quit")
//     {
//         console.log("quitting app");
//         break;
//     }

//     if(req == "list")
//     {
//         console.log("--------");
//         for(task of todo)
//         {
//             console.log(task);
//         }
//         console.log("--------");
//     }

//     else if(req == "add")
//     {
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }

//     else if(req == "delete")
//     {
//         let del = prompt("Enter which task you want to delete: ");
//         let index = todo.indexOf(del);
//         if (index !== -1)
//             {
//             todo.splice(index, 1);
//             console.log("Item deleted!");
//             }
//             else
//             {
//             console.log("Task not found!");
//             }
//     }

//     req = prompt("Please Enter your request");
// }




// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// for(let i=0; i<arr.length; i++)
// {
//     if(num==arr[i])
//         {
//             console.log(arr.splice(i,1));
//         }
// }


// let number = 287152
// let numbercopy = number;
// let count = 0;
// while(number>0)
// {
//     number = Math.floor(number/10);
//     count++;
// }
// console.log(`The number of digits in ${numbercopy} is ${count}`)

// let sum = 0;
// for(let i=0; i<count; i++)
// {
//     sum = sum + (numbercopy%10);
//     numbercopy = Math.floor(numbercopy/10);
// }
// console.log(`The sum of the digits are ${sum}`);



// let num = 7;
// let fac = 1;
// while(num>0)
// {
//     fac = fac * num;
//     num--;
// }
// console.log(fac);



let arr = [1,2,3,4,5,6,2,3];

let largest = -1;
for(let i=0; i<arr.length; i++)
{
    if(arr[i]>largest) largest = arr[i];
}
console.log(largest);