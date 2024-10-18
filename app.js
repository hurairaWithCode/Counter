let counter = document.querySelector(".count");
let increment = document.querySelector(".Increment-btn");
let decrement = document.querySelector(".decrement-btn");
let inputfeild = document.querySelector(".feild");
let reset = document.querySelector(".reset");


increment.addEventListener('click',()=>{
    let countvalue = parseInt(counter.innerText);
    let feildValue = parseInt(inputfeild.value);
    counter.innerText= countvalue+ feildValue;
});
decrement.addEventListener('click',()=>{
    let countvalue = parseInt(counter.innerText);
    let feildValue = parseInt(inputfeild.value);
    counter.innerText=countvalue- feildValue;
});
reset.addEventListener('click',()=>{
    counter.innerText=0;
});

let firstname="AbuHuraira";
let name = `Your name is  ${firstname} ,
Hi! nice to meet you`;
console.log(name);

