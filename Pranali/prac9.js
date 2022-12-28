/*let a = first.getAttribute("class")
console.log(a)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))


let a = document.getElementsByTagName('div')[0]
a.innerHTML = a.innerHTML + '<h1>Hellow World</h1>';*/

first.insertAdjacentHTML('beforebegin','<div class="test">beforebegin</div>');
first.insertAdjacentHTML('beforeend','<div class="test">beforeend</div>');
first.insertAdjacentHTML('afterbegin','<div class="test">afterbegin</div>');
first.insertAdjacentHTML('afterend','<div class="test">afterend</div>');