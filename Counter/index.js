// code for first counter

let firstReset=document.querySelector(".first-reset");
let firstIncrease=document.querySelector(".first-increase");
let firstDecrease=document.querySelector(".first-decrease");
let secondReset=document.querySelector(".second-reset");
let secondIncrease=document.querySelector(".second-increase");
let secondDecrease=document.querySelector(".second-decrease");
let value1=100;
let value2=200;
// alert(typeof(firstValue))

firstReset.addEventListener("click",function(){
    value1=0;
    document.querySelector(".first-value").textContent = 0;
});

firstIncrease.addEventListener("click",function(){
        value1++;
        // alert(value1);
        document.querySelector(".first-value").innerHTML=value1;

});

firstDecrease.addEventListener("click",function(){
    value1--;
    document.querySelector(".first-value").innerHTML=value1;
});


// code for second counter


secondReset.addEventListener("click",function(){
    value2=0;
    document.querySelector(".second-value").textContent = 0;
});
secondIncrease.addEventListener("click",function(){
    value2++;
    // alert(value1);
    document.querySelector(".second-value").innerHTML=value2;

});

secondDecrease.addEventListener("click",function(){
value2--;
document.querySelector(".second-value").innerHTML=value2;
})
