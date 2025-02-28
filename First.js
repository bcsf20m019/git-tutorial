let userScore=0
let compScore=0
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#text")
let userScorePara=document.querySelector("#user-score")
let compScorePara=document.querySelector("#comp-score")

const genCompChoice=()=>{
const options= ['rock','paper','scissor']
const randIdx =Math.floor(Math.random()*3)
return options[randIdx]
};
const drawGame=()=>{
     msg.innerText="Game is draw"
     msg.style.backgroundColor="#ff0d79"
}
const showWinner=(userWins ,userChoice,compChoice)=>{
    if (userWins){
        userScore++;
        userScorePara.innerText=userScore
        msg.innerText=`You win!.Your ${userChoice} beats ${compChoice}`
     msg.style.backgroundColor="green"
      msg.style.color="white"
    }
    else{
        compScore++;
        compScorePara.innerText=compScore
        msg.innerText=`You lose!. ${compChoice} beats your ${userChoice}`
         msg.style.backgroundColor="red"
        msg.style.color="white"
    }
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if (userChoice===compChoice){
     drawGame();
    }
    else{
       let userWins=true
       if (userChoice==="rock")
       userWins=compChoice==="paper"?false:true
       else if(userChoice==="paper")
       userWins=compChoice==="scissor"?false:true
       else{
        userWins=compChoice==="rock"?false:true
       }
        showWinner(userWins,userChoice,compChoice)
    }
}
 choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
   const userChoice = choice.getAttribute("id")
   playGame(userChoice);
  })
});


 