/*let sum=0
let n=prompt("enter the value of n")
n=Number.parseInt(n)
for(let i=1;i<n;i++)
{
    sum *= (i*1)

}
console.log(sum)*/


let obj={
    pran:90,
    sum:89,
    polo:88
}
for(let a in obj){
    console.log("marks of " + a + " are " + obj[a])
}

for(let b of "41 42 43 44 45"){
    console.log(b)
}