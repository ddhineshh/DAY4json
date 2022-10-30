//anonymous

let rotate = function(array,k){
    for(i=0; i<k; i++){
        array.unshift(array.pop())
    }
    console.log(array)
}
rotate([1,2,3,4,5,6],3);

//IIFE

(function (array,k){
    for(i=0; i<k; i++){
        array.unshift(array.pop())
    }
    console.log(array)
})
([3,4,5,6,7,8],3)