let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const message= document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const generateCompChoice=() =>{
    const options=["rock","paper","scissors"];  //we stored our option in the form of array becuz we can get the index of array which is a number
    //generating random rock paper scissors
    const randomIndex= Math.floor(Math.random()*3);  //we add math.floor method to eliminate decimal val that math random generates and multiply it with 3 becuz we want the option to be between array 1 to 2 
    return options[randomIndex]; //random method that generate random number between 0 to 1 but it cant generate random strings
}

const drawGame= () =>{
    message.innerText= "Game was draw, Play again!";
    message.style.backgroundColor="rgb(27, 27, 143)";
}
const showWinner=(userWin , userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        message.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor= "green";
    }else{
        compScore++;
        compScorePara.innerText= compScore;
        message.innerText= `You lose! ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor= "red";
    }
}

const playGame= (userChoice)=> {     //creating random choice for computer    
    //  console.log("user choice=", userChoice);
     //generating comp choice
     const compChoice=generateCompChoice();
    //  console.log("comp choice=", compChoice);

     if(userChoice===compChoice){
        //drawcondition
        drawGame();
     }else{
        let userWin=true;
        if(userChoice==="rock"){
            //comp will gen scissor or paper cuz if rock draw 
            userWin= compChoice=== "paper"? false : true ; //tracking if user wins of comp 
        }else if(userChoice=== "paper" ){
            userWin= compChoice=== "scissors" ? false:true;  
        }else{
            //comp choice rock paper
            userWin= compChoice=== "rock"? false:true; //comparing with scissors
        }
        showWinner(userWin, userChoice, compChoice);
     }
}
choices.forEach((choice) => {    //what user chooses or clicks
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});