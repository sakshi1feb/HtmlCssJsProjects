const choices=['rock','paper','scissor'];
const stopBtn=document.querySelector('.stop-btn');
let computer,score=0,result;
const computerChoice = () =>{
    return choices[Math.floor(Math.random()*choices.length)]
};

let rpsButtons =document.querySelectorAll('.rps-button');
rpsButtons.forEach((rpsButton)=>{
    rpsButton.addEventListener('click',(e)=>{
        computer=computerChoice()
        userValue=e.target.value;

        switch(userValue+computer){
            case 'rockrock':
            case 'paperpaper':
            case 'scissorscissor':{
                score=score;
                result="It's a Draw!";
            }
            break;
            case 'scissorpaper':
            case 'paperrock':
            case 'rockscissor':{
                score =score+1;
                result='You Win!';
            }break;
            case 'rockpaper':
            case 'scissorrock':
            case 'paperscissor':{
                score =score-1;
                result='You Loose!'
            }
        }
        output(computer,userValue);
    });
});
 function output(computer,player){
    document.querySelector('.score').textContent=score;
    document.querySelector('.output').textContent=`👦 ${player} vs 🤖 ${computer}`;
    document.querySelector('.result').textContent = result;
}
stopBtn.addEventListener('click',()=>{
    // score =0;
    // result ='';
    // document.querySelector('.score').style.display='none';
    // document.querySelector('.output').style.display='none';
    // document.querySelector('.result').style.display='none'
    window.location.reload();
})
