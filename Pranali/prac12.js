/*let a = prompt("what is your name?");
let b = prompt("what is your age?");
let c = prompt("what is your fav color?");
console.log(a+" is "+b+" years old and has "+c+" fav color.");

console.log("start")
setTimeout(function() {
    console.log("hey I am good")
}, 3000);
console.log("End")*/


function loadScript(src,callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("loaded script with SRC: " + src)
        callback();
    }
    document.body.appendChild(script);
}

function hello(){
    alert('hello world');
}

function goodmorning(){
    alert('goodmorning');
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",hello)
