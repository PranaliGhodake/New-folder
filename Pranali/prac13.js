/*let promise = new Promise(function(resolve,reject){
    alert("hello")
    resolve(56)
})

console.log("hello one")
setTimeout(function(){
    console.log("hello two in2 sec")
},2000)

console.log("my name is " + "hello three")
console.log(promise)*/


/*let p1= new Promise((resolve, reject) => {
    console.log("prpmise is pending")
    setTimeout(() => {
        console.log("I am a promise and I am rejected")
        //console.log("I am a promise and I am fulfilled")
        //resolve(true)
    reject(new Error("i am an error"))
    } , 5000)
})

let p2= new Promise((resolve, reject) => {
    console.log("prpmise is pending")
    setTimeout(() => {
        //console.log("I am a promise and I am rejected")
        console.log("I am a promise and I am fulfilled")
        resolve(true)
   // reject(new Error("i am an error"))
    } , 5000)
})

console.log(p1,p2)*/

/*const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = () => {
            resolve("Script has been loaded")
        }
        script.onerror = () => { reject(0) }
    })
}

let p1 = loadScript("http://localhost:3000/index.js")
p1.then((value) => {
    console.log(value)
}).catch((error) => {
    console.log("we are sorry but we are having problems loading this script.")
})*/


/*setTimeout(() => {
    console.log("hacking wifi.......Please wait....")
}, 1000)

try {
    console.log("rahul")
} catch (error) {
    console.log("error")
}
setTimeout(() => {
    console.log("fetching user name and password.......Please wait....")
}, 2000)

setTimeout(() => {
    console.log("hacking pranali's insta id.......Please wait....")
}, 3000)

setTimeout(() => {
    console.log("username and password fetched.......Please wait....")
}, 4000)*/


try {
    let age = prompt("enter your age")
    age = Number.parseInt(age)
    if (age > 150) {
        throw new ReferenceError("this is probably not true")

    }
} catch (error) {
    console.log("error.name")
    console.log("error.message")
    console.log("error.stack")
}
console.log("this script is still running")