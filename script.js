//Do the below programs in anonymous function & IIFE
// a) Print odd numbers in an array using anonymous function
var num=function(arr){
    var result=[]
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]%2==1){
            result.push(arr[i])
        }
    }
    return(result)    
}
console.log(num([1,4,3,5,2,12,34,21,79]))
// a) Print odd numbers in an array using IIFE function
(function(arr){
    var result=[]
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]%2==1){
            result.push(arr[i])
        }
    }
    console.log(result)
})([1,4,3,5,2,12,34,21,79])
//b)Convert all the strings to title caps in a string array using anonymous function
var array=function(str){
    var result=[]
    str=str.split(" ")
    for(var i=0;i<str.length;i++)
    {
      str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase()
      result.push(str[i])
    }
    return result.join(" ")
}
console.log(array('hello world'))
//b)Convert all the strings to title caps in a string array using IIFE function
(function(str){
    var result=[]
    str=str.split(" ")
    for(var i=0;i<str.length;i++)
    {
      str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase()
      result.push(str[i])
    }
    console.log(result.join(" "))
})('hello world')
//c)Sum of all numbers in an array using anonymous function
var sum=function(arr){
    num=0
    for(i=0;i<arr.length;i++){
        num=num+arr[i]
    }
    return num
}
console.log(sum([2,4,13,67,3,54,1]))
//c)Sum of all numbers in an array using IIFE function
(function(arr){
    num=0
    for(i=0;i<arr.length;i++){
        num=num+arr[i]
    }
    console.log(num)
})([2,5,8,10,55,3,0])
//d)Return all the prime numbers in an array using anonymous function
var prime=function(arr){
    a=[]
    num=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]==2){
            a[i]=1
        }
        for(j=2;j<arr[i];j++){
            if(arr[i]%j==0){
                a[i]=0
                break
            }
            else{
                a[i]=1
                }
        }
    }
    for(i=0;i<a.length;i++){
        if(a[i]==1){
            num.push(arr[i])
        }
    }
    return num
}
console.log(prime([131,51,8,11,2,5]))
//d)Return all the prime numbers in an array using IIFE function
(function(arr){
    a=[]
    num=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]==2){
            a[i]=1
        }
        for(j=2;j<arr[i];j++){
            if(arr[i]%j==0){
                a[i]=0
                break
            }
            else{
                a[i]=1
                }
        }
    }
    for(i=0;i<a.length;i++){
        if(a[i]==1){
            num.push(arr[i])
        }
    }
    console.log(num)
})([4,51,8,11,3,5])
//e)Return all the palindromes in an array using anonymous function
var palin=function(arr){
    var arr1=[]
    var a=""
    var result=[]
    for(i=0;i<arr.length;i++)
    {
        a=arr[i].toString()
        arr1.push(a.split("").reverse().join(""))
    }
    arr1=arr1.map(Number)
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]<9){
            result.push(arr[i])
        }
        else if(arr[i]==arr1[i]){
            result.push(arr[i])
        }
    }
    return result
}
console.log(palin([10,9,55,69,131,242,51]))
//e)Return all the palindromes in an array using IIFE function
(function(arr){
    var arr1=[]
    var a=""
    var result=[]
    for(i=0;i<arr.length;i++)
    {
        a=arr[i].toString()
        arr1.push(a.split("").reverse().join(""))
    }
    arr1=arr1.map(Number)
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]<9){
            result.push(arr[i])
        }
        else if(arr[i]==arr1[i]){
            result.push(arr[i])
        }
    }
    console.log(result) 
})([10,9,55,69,131,242,51])
//f)Return median of two sorted arrays of the same size using anonymous function.
var num=function(arr,arr1){
    result=[]
    result=[...arr,...arr1]
    return result.sort((a , b) => a-b)
}
console.log(num([2,1,6,4,0],[44,3,8,2,100]))
//f)Return median of two sorted arrays of the same size using IIFE function.
(function(arr,arr1){
    result=[]
    result=[...arr,...arr1]
    console.log(result.sort((a , b) => a-b))
})([2,1,6,4,0],[44,3,8,2,100])
//g)Remove duplicates from an array using anonymous function.
var a=function(arr){
    result=[]
    for(i=0;i<arr.length;i++){
        if(result.indexOf(arr[i])==-1){
            result.push(arr[i])
        }
    }    
    return result
}
console.log(a([1,2,5,3,2,8]))
//g)Remove duplicates from an array using IIFE function.
(function(arr){
    result=[]
    for(i=0;i<arr.length;i++){
        if(result.indexOf(arr[i])==-1){
            result.push(arr[i])
        }
    }    
    console.log(result)
})([1,2,5,3,2,8])
//h)Rotate an array by k times using anonymous function
var num=function(arr,k){
    for(var i=0;i<k;i++){
          a=arr.pop()
          arr.splice(0,0,a)
    }
    return arr
}
console.log(num([1,2,5,3,2,8],10))
//h)Rotate an array by k times using IIFE function
(function(arr,k){
    for(var i=0;i<k;i++){
          a=arr.pop()
          arr.splice(0,0,a)
    }
    console.log(arr)
})([1,2,5,3,2,8],10)
//2)Do the below programs in arrow functions.
//a)Print odd numbers in an array using arrow function
var num=(arr)=>{
    var result=[]
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]%2==1){
            result.push(arr[i])
        }
    }
    return(result)    
}
console.log(num([1,4,3,5,2,12,34,21,79]))
//b)Convert all the strings to title caps in a string array using arrow function
var array=(str)=>{
    var result=[]
    str=str.split(" ")
    for(var i=0;i<str.length;i++)
    {
      str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase()
      result.push(str[i])
    }
    return result.join(" ")
}
console.log(array('hello world'))
//c)Sum of all numbers in an array
var sum=(arr)=>{
    num=0
    for(i=0;i<arr.length;i++){
        num=num+arr[i]
    }
    return num
}
console.log(sum([2,4,13,67,3,54,1]))
//d)Return all the prime numbers in an array using arrow function
var prime=(arr)=>{
    a=[]
    num=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]==2){
            a[i]=1
        }
        for(j=2;j<arr[i];j++){
            if(arr[i]%j==0){
                a[i]=0
                break
            }
            else{
                a[i]=1
                }
        }
    }
    for(i=0;i<a.length;i++){
        if(a[i]==1){
            num.push(arr[i])
        }
    }
    return num
}
console.log(prime([131,51,8,11,2,5]))
//e)Return all the palindromes in an array using arrow function
var palin=(arr)=>{
    var arr1=[]
    var a=""
    var result=[]
    for(i=0;i<arr.length;i++)
    {
        a=arr[i].toString()
        arr1.push(a.split("").reverse().join(""))
    }
    arr1=arr1.map(Number)
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]<9){
            result.push(arr[i])
        }
        else if(arr[i]==arr1[i]){
            result.push(arr[i])
        }
    }
    return result
}
console.log(palin([10,9,55,69,131,242,51]))