// anonymous function

let caps = function (str) {
    str = str.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
    } 
    console.log(str.join(" "))
}
caps("FULL STACK DEVELOPER")

// normal function

function cap (str){
    str = str.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
    } 
    console.log(str.join(" "))
}
cap("FULL STACK DEVELOPER")

//arrow function

let capss = (str) =>{
    str = str.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
    } 
    console.log(str.join(" "))
}
capss("FULL STACK DEVELOPER");

//IIFE 

(function(str) {
    str = str.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
    } 
    console.log(str.join(" "))
})("FULL STACK DEVELOPER");



