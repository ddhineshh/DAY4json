
//anonymous

let arr = function (array){
for (i = 0; i < array.length; i++) 
{
    let sp = array[i].split("")
    let count = 0;
    for (j = 0; j < sp.length; j++) 
    {
        if (sp[j] == sp[sp.length - 1 - j]) 
        {
            count++;
        }
    }

    if (count == sp.length) 
    {
        console.log(`Count : ${count} => ${array[i]} : Palindrome`)
    }
    else 
    {
        console.log(`Count : ${count} => ${array[i]} : Not a Palindrome`)
    }
}
}
arr(["naran","121","viki","ashok"])

//normal
let sij = [];
let count = 0;
function arrr(array)
{
    for(i=0 ;i<array.length; i++)
    {
    let si = array[i].split("").reverse().join("")
    sij.push(si)
    for(j=0; j<si.length; j++)
    {
        if(sij[j]==array[i])
        {
            count ++
        }
    }
    if (count == sij.length)
        {
        console.log(`${array[i]} : Palindrome`)
        }
    else
    console.log(`${array[i]} : Not a Palindrome`)
    } 
}
arrr(["bab","malayalam","1234321","program"])

//arrow

let arra = (array) =>
{
    for (i = 0; i < array.length; i++) 
    {
        let sp = array[i].split("")
        let count = 0;
            for (j = 0; j < sp.length; j++) 
                {
                    if (sp[j] == sp[sp.length - 1 - j]) 
                        {
                            count++;
                        }
                }

        if (count == sp.length) 
            {
                console.log(`Count : ${count} => ${array[i]} : Palindrome`)
            }
        else 
            {
                console.log(`Count : ${count} => ${array[i]} : Not a Palindrome`)
            }
    }

}
arra(["naran","121","viki","ashok"]);

//IIFE

(function (array){
    let sij = [];
let count = 0;

{
    for(i=0 ;i<array.length; i++)
    {
    let si = array[i].split("").reverse().join("")
    sij.push(si)
    for(j=0; j<si.length; j++)
    {
        if(sij[j]==array[i])
        {
            count ++
        }
    }
    if (count == sij.length)
        {
        console.log(`${array[i]} : Palindrome`)
        }
    else
    console.log(`${array[i]} : Not a Palindrome`)
    } 
}
})(["bab","malayalam","1234321","program"])