/*let arr=[12,5,3,7,8]
let a;
do{
a=prompt("enter a number")
a=Number.parseInt(a)
arr.push(a)
}while(a != 0);
console.log(arr)*/


/*let arr=[2,3,6,0,8]
let n=arr.filter((x)=>{
    return x%2==0;
})
console.log(n)*/

let arr=[1,2,3,4]
let n=arr.reduce((x,y)=>{
    return x*y;
})
console.log(n)
