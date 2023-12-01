let red = document.querySelector(".red");
let green = document.querySelector(".green")
let yellow = document.querySelector(".yellow")
let blue = document.querySelector(".blue")
let reset = document.querySelector(".reset") // too much code
red.addEventListener("click" , function (){ // could've used regular functions for these
    document.body.style.backgroundColor = "red";
})
green.addEventListener("click" , function (){
    document.body.style.backgroundColor = "green";
})
yellow.addEventListener("click" , function (){
    document.body.style.backgroundColor = "yellow";
})
blue.addEventListener("click" , function (){
    document.body.style.backgroundColor = "blue";
})
reset.addEventListener("click" , function (){
    document.body.style.backgroundColor = "white";
})