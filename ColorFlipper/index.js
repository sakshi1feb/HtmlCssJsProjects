let colors=["violet","indigo","blue","yellow","orange","green","red"];
let button =document.querySelector(".btn");
let bgColor;

button.addEventListener("click",simple);
document.addEventListener("keydown",simple);

function simple(){
    let choice=Math.floor(Math.random()* colors.length);
    bgColor=colors[choice];
    document.querySelector("span").textContent=bgColor;
    document.querySelector("body").style.backgroundColor=bgColor;
}
