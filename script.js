

function computerPlay(){
    let array = ["rock", "paper","scissor"]
    return array[Math.floor(Math.random()*array.length)];
}

function game(){
function playRound(playerSelection, computerSelection){

    if ((computerSelection =="rock")&&(playerSelection=="scissor")){
    
        return "computer";
    } else if ((computerSelection =="paper")&&(playerSelection=="rock")){
       
        return "computer";
    }  else if ((computerSelection =="scissor")&&(playerSelection=="paper")){
       
        return "computer";
    } else if ((computerSelection =="scissor")&&(playerSelection=="rock")){
        
        return "player";
    } else if ((computerSelection =="rock")&&(playerSelection=="paper")){
        return "player";
    }  else if ((computerSelection =="paper")&&(playerSelection=="scissor")){
        
        return "player";
    } else{
        return "tie";
    }

}
const playerSelection = prompt("Enter your choice r = for rock\n p=papaer\n s = sissor").toLowerCase();
const computerSelection = computerPlay();
console.log("computer "+computerSelection);
console.log("player "+ playerSelection)
    return playRound(playerSelection, computerSelection);
}
let cmp =0;
let play = 0;
for (let i = 1; i <= 5; i++){

    let ans = game();

    if(ans == "computer"){
        cmp++;
    }else if(ans == "player"){
        play++;
    }else{
        console.log(ans);
    }
}
console.log("cmp "+cmp +" ::::"+ " play "+ play );
if (cmp>play){
    console.log("computer wins");
}else if (play>cmp){
    console.log("You are winner");
}else{
    console.log("match is tie");
}
