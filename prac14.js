/*let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((value1) => {
    return value1.json()
}).then((value2) => {
    console.log(value2)
})*/



console.log(document.cookie)
document.cookie = "name=pranali112233"
document.cookie = "name2=pran1122"
document.cookie = "name=Pranali"
let key = prompt("enter the key")
let value = prompt("entee value")
document.cookie = `${encodeURIComponent(key)}= ${encodeURIComponent(value)}`
console.log(document.cookie)