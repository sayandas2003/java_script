


// *********** THIS KEYWORD WITH ARROW AND NORMAL FUNCTION **********
// const studentnew =
// {
//     name: "aman",
//     marks: 95,
//     prop: this, // this object has global scope

//     getName: function()
//     {
//         console.log(this);
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




// const arrayAverage = (arr) => {
//     let avg = 0;
//     for(let i=0; i<arr.length; i++) {
//         avg += arr[i];
//     }
//     return avg / arr.length;
// }

// const isEven = n => {
//     if(n % 2 == 0) return "even";
//     else return "odd";
// }


let length = 4;
function callback() {
    console.log(this.length);
}
const object = {
    length : 5,
    method(callback) {
        callback();
    },
};

object.method(callback, 1, 2);