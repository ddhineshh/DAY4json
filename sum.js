//anonymous

var sum = function(array){
    var sum = 0;
    array.forEach(element => {
        sum += element
        
    });
    console.log(sum)
        
    }
    sum([1,2,3,4,5,6,7,8,9])

    //normal

    function sum(array){
        var sum = 0;
    array.forEach(element => {
        sum += element
        
    });
    console.log(sum)
        
    }
    sum([1,2,3,4,5,6,7,8,9])

    //arrow

    let summ = (array) => {  
        var sum = 0;
        array.forEach(element => {
            sum += element
            
        });
        console.log(sum)

    } 
    summ([1,2,3,4,5,6,7]);

   // IIFE

  (function(array) {
        var sum = 0;
        array.forEach(element => {
            sum = sum + element;
        })
            console.log(sum) 
})

([1,2,3,4,5])

