 let hex=["1","2","3","4",'5','6','7','8','9','0','a','b','c','d','e','f']
;
 let button=document.querySelector(".btn");
 button.addEventListener("click",generateHexColor);
 document.addEventListener("keydown",generateHexColor);


function generateHexColor(){
    let hexCode="#"
    for(let i =0;i<6;i++){
        let choice =Math.floor(Math.random()*hex.length)
        hexCode+=hex[choice];
    }
    // alert(hexCode);
    document.querySelector("body").style.backgroundColor=hexCode;
    document.querySelector("span").textContent=hexCode;
}
