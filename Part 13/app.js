// api calls - 


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


// async function getFacts()
// {
//     try
//     {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//         return data;
//     }
//     catch(e)
//     {
//         console.log("error is: ",e);
//     }
// }
// getFacts()
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log("error=",error);
// });
// console.log("hello");



// using AXIOS -

let url1 = "https://catfact.ninja/fact";
let btn1 = document.querySelector("#btn1");
let p1 = document.querySelector("#fact");
btn1.addEventListener("click", async ()=>{
    let fact = await getFacts();
    console.log(fact);
    p1.innerText = fact;
})
async function getFacts()
{
    try
    {
        let res = await axios.get(url1);
        return res.data.fact;
    }
    catch(e)
    {
        console.log("error - ", e);
    }
}


let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#btn2");
let img = document.querySelector("#result");

btn2.addEventListener("click", async ()=>{
    let link = await getImg();
    // console.log(link);
    img.setAttribute("src", link);
})
async function getImg()
{
    try
    {
        let res = await axios.get(url2);
        return res.data.message;
    }
    catch(e)
    {
        return "No image found";
    }
}






// sending headers using axios -
// const newurl = "https://icanhazdadjoke.com/";

// async function getJokes()
// {
//     try{
//         const config = {headers: {Accept: "text/plain"}};
//         let res = await axios.get(newurl, config);
//         console.log(res.data);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }




// updating query strings using axios -
let newurl = "http://universities.hipolabs.com/search?name=";
let btn3 = document.querySelector("#countrybutton");

btn3.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let colleges = await getColleges(country);
    show(colleges);
    // for(let i=0; i<colleges.size; i++)
    // {
    //     console.log(colleges[i]);
    // }
})

function show(colleges)
{
    let list = document.querySelector("#countrylist");
    list.innerText = "";
    for(college of colleges)
    {
        console.log(college.name);

        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }
}

async function getColleges(country)
{
    try
    {
        let res = await axios.get(newurl+country);
        return res.data;
    }
    catch(err)
    {
        console.log(err);
        return [];
    }
}