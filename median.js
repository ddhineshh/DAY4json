//anonymous
let m,n
let medd = function(passs){
    let arr1 = [1,2,4,3]
    let arr2 = [66,10]
    let arr = [...arr1,...arr2].sort((m,n)=>m-n)
    return arr
}
medd()
let a = medd()
console.log(a)
let med = function(pass){
    if(a.length%2 == 0){
        let medi = (a[(a.length/2)-1]+a[a.length/2])/2
        console.log(medi)
    }
    else
        {
            let d = parseInt((a.length)/2)
        console.log(a[d])
        }
}
med();

//IIFE

(function(a){
    if(a.length%2 == 0){
        let medi = (a[(a.length/2)-1]+a[a.length/2])/2
        console.log(medi)
    }
    else
        {
            let d = parseInt((a.length)/2)
        console.log(a[d])
        }

})(a)