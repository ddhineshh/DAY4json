//anonymous

let dupli = function(array){
    let res = array.filter((item,i)=> 
    array.indexOf(item) == i);
    console.log(res)
}
dupli(["121","6543","121","546","121"]);

//IIFE

(function(array){
    let res = array.filter((item,i)=> 
    array.indexOf(item) == i);
    console.log(res)
})(["121","6543","121","546","121"])