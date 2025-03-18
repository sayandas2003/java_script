// async function greet()
// {
//     // throw "some random error";
//     return "hello!";
// }

// greet()
// .then((result)=>{
//     console.log("promise was accepted: ", result);
// })
// .catch((error)=>{
//     console.log("promise was rejected: ", error);
// })


// let demo = async() => {
//     return 5;
// }



// await keyword - 
// function getNum()
// {
//     // console.log(5);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     })
// }
// async function demo() {
//     await getNum();
//      getNum();
//     getNum();
// }


// color change function with await - 
h1 = document.querySelector("h1");

function changeColor(color, delay)
{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3)
            {
                reject("promise rejected");
                // first of all the whole settimeout fn will be 
                // executed then the reject will be sent to the promise
            }
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        }, delay);
    })
}

async function nextcolor()
{
    try
    {
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("blue", 1000);
        await changeColor("yellow", 1000);
    }
    catch(error)
    {
        console.log("error caught: ", error);
    }
    

    let a = 5;
    console.log(a);
    console.log("new number = ", a + 3);
}
// nextcolor();



// JSON - 
// let jsonRes = '{"fact":"Approximately 40,000 people are bitten by cats in the U.S. annually.","length":68}';
// console.log(jsonRes);
// let validRes = JSON.parse(jsonRes);
// console.log(validRes);


// let student = {
//     name: "sayan",
//     marks: 95,
// }
// console.log(JSON.stringify(student));




// api calls - 

let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json()
//     })
//     .then((data1) => {
//         console.log("data1 = ",data1.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log("data2 = ",data2.fact);
//     })
//     .catch((err)=>{
//         console.log("ERROR - ", err);
//     });

// console.log("i hapy");


async function getFacts()
{
    try
    {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
        return data;
    }
    catch(e)
    {
        console.log("error is: ",e);
    }
}
getFacts()
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("error=",error);
});
console.log("hello");