let boxes=document.querySelectorAll(".btn");
let resetbtn=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msg-container");
let para=document.querySelector("#para");
let turnO=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((btn) =>{
    btn.addEventListener("click",()=>{
       
        if(turnO===true){
            btn.innerText= "O";
            turnO= false;
        }else{
            btn.innerText="X";
            turnO= true;
        }
        btn.disabled=true;

        checkWinner();
    });
});

const disableBoxes= ()=> {
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes= ()=> {
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
        msgContainer.classList.add("hide");
    }
}

const resetGame =()=>{
    turnO= true;
    enableBoxes();
    
}

const showWinner=(winner) =>{
    para.innerText= `Congratulations, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner= ()=>{
    for(let pattern of winPatterns){
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1);

                showWinner(pos1);
            }
        }
    }
}
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);