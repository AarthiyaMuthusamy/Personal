
//getitem thorugh score to check the default value can not to be null 
let score =JSON.parse(localStorage.getItem('score')) ||
{
  wins :0,
  losses:0,
  ties:0
};


updateScore();


 let isAutoplay  = false;
 let interval;
function autoplay(){
if(!isAutoplay){
  interval = setInterval(function(){
    const playermove = pickMove();
    playGame(playermove);
  },1000);
  isAutoplay =true;
}else{
  clearInterval(interval);
  isAutoplay = false;
}
}

function playGame(playermove){
const comMove = pickMove();

if(playermove =='rock'){     
 if(comMove === 'rock'){
  result ='Tie';
 }
 else if(comMove === 'paper'){
  result = 'you lose';
 }
 else if(comMove==='scissors'){
  result = 'you win';
 }

 
}

else if(playermove=='paper'){

if(comMove === 'rock'){
result ='you lose';
}
else if(comMove=== 'paper'){
result = 'Tie';
}
else if(comMove==='scissors'){
result = 'you win';
}



}

  
else if(playermove =='scissors'){

if(comMove === 'rock'){
    result ='you lose';
    }
    else if(comMove === 'paper'){
    result = 'you win';
    }
    else if(comMove==='scissors'){
    result = 'Tie';
    }
  
}


 if(result==='you win'){
  score.wins +=1
}else if(result==='you lose'){
  score.losses+=1;
}
else if(result=='Tie'){
  score.ties+=1;
}



//set the score and convert to the stringy method 
console.log(localStorage.setItem('score',JSON.stringify(score)));

updateScore();

document.querySelector('.result-js').innerHTML = result;


document.querySelector('.result1-js').innerHTML = `You 
<img class="img-result" src="https://supersimple.dev/projects/rock-paper-scissors/images/${playermove}-emoji.png">
<img class="img-result" src="https://supersimple.dev/projects/rock-paper-scissors/images/${comMove}-emoji.png">computer`;




}

function updateScore(){
document.querySelector('.js-score').innerHTML =`wins: ${score.wins} , losses:${score.losses} , Ties: ${score.ties}`;

}

function pickMove(){
const number = Math.random();
let comMove='';
 if(number>=0  && number<1/3){
   comMove = 'rock';
 }
 else if(number>=1/3 && number <2/3){
 comMove= 'paper';
 }
 else if(number >=2/3 && number <=1){
    comMove= 'scissors';
 }

 return comMove;

}


