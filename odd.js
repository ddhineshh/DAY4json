//anonymous function

let odd = function(array){
    for(i=0; i<array.length; i++){
        if (array[i]%2!=0){
            console.log(array[i])
        }
    }
}
odd([1,2,3,4,5,6,7,8,9,10]);

//normal function

function oddd(array){  
    for(i=0; i<array.length; i++){
        if (array[i]%2!=0){
            console.log(array[i])
        }
    }

}
oddd([1,2,3,4,5,6,7,8,9,10,11,13]);

//arrow function

let odddd = (array) => {
    for(i=0; i<array.length; i++){
        if (array[i]%2!=0){
            console.log(array[i])
        }
    }

}
odddd([1,2,3,4,5,6,7,8,9,10,11,13,14,15]);

//IIFE (function(){})();

(function(array){
    
    for(i=0; i<array.length; i++){
        if (array[i]%2!=0){
            console.log(array[i])
        }
    }
})([1,2,3,4,5,6,7,8,9,10,11,13]);

