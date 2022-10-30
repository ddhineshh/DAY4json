//anonymous function

var tag;
var prime = function(num)
{
    for(let i=2; i<=num-1; i++)
    {
        if (num % i ==0)
        {
            tag = 7
            break;
        }
        
    }
    if (tag == 7)
        {
        console.log("not prime")
        }
    else{
        console.log("prime")
        }   
} 
prime(10);


// normal function

function primee(num){
    for(let i=2; i<=num-1; i++)
    {
        if (num % i ==0)
        {
            tag = 8
            break;
        }
        
    }
    if (tag == 8)
        {
        console.log("not prime")
        }
    else
        console.log("prime")
}
primee(7)

//arrow function

let primeee = (num) =>{
        for(let i=2; i<=num-1; i++)
        {
            if (num % i ==0)
            {
                tag = 9
                break;
            }
            
        }
        if (tag == 9)
            {
            console.log("not prime")
            }
        else
            console.log("prime")
    }
    primeee(2)

//IIFE
var tag
(function(num){
    for(let i=2; i<=num-1; i++)
        {
            if (num % i ==0)
            {
                tag = 4
                break;
            }
            
        }
        if (tag == 4)
            {
            console.log("not prime")
            }
        else
            console.log("prime")
})(5)

