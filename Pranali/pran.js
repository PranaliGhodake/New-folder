/*let a = prompt("What is your age?");
a = Number.parseInt(a);
//let a=9;
if(a<0){
    alert("invalid age");
}
else if(a<9){
    alert("you are too small kid");
}
else if(a<19 && a>=9){
    alert("your not 18 yet");
}
else{
    alert("you can drive");
}*/

let a = prompt("What is your age?");

if (isNaN(a)) {

  alert("Invalid age. Please enter a number.");
} else if (a < 0) {
  alert("Invalid age. Age cannot be negative.");
} else if (a < 9) {
  alert("You are too young to drive.");
} else if (a < 19) {
  alert("You are not 18 yet.");
} else {
  alert("You can drive.");
}
