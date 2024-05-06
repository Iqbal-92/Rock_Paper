let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorPara = document.querySelector("#usre-score");
const compScorepara= document.querySelector("#com-score");

const gemCompChoice = () =>{
     const options =["rock","paper","scissors"];
     const randIdx =Math.floor(Math.random() * 3);
     return options[randIdx];
}

const drawGame =()=>{
    
    msg.innerText = "Game was draw.Play again.";
    msg.style.backgroundColor = "#081b31";

}

const showWinner = (userWin ,userChoice,compChoice)=>{
    if(userWin){
     userScore++;
     userScorPara.innerText = userScore;
        msg.innerText = `you win! `;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        
        msg.innerText = `you loss. `;
        msg.style.backgroundColor = "red";

    }

}

const playGame = (userChoice)=>{

    const compChoice =gemCompChoice();

    if (userChoice === compChoice){
       drawGame();
    }else{
        let userWin =true;
        if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else{
            compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice =choice.getAttribute("Id");    
    playGame(userChoice);
    })
})
