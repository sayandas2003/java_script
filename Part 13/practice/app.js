// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector('#fact');
//     p.innerText = fact;
// })

// let url = "https://catfact.ninja/fact";
// let url2 = "https://dog.ceo/api.breeds/image/random";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch(e) {
//         console.log("error - ", e);
//         return "no fact found";
//     }
// }






let newurl = "http://universities.hipolabs.com/search?name=";
let btn3 = document.querySelector("#countrybutton");

btn3.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country);

    let colleges = await getColleges(country);
    show(colleges);
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