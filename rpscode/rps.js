const computer = document.getElementById("comp");
const player = document.getElementById("user");
const remedy = document.getElementById("result");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");
main();

function main(){
    rock.addEventListener("click", function(){
        Outputs("r");
    })
    paper.addEventListener("click", function(){
        Outputs("p");
    })
    scissor.addEventListener("click",function(){
        Outputs("s");
    })
    
}
function computerGen(){
    const numberOfChances= 3;
    const randomNo = Math.floor(Math.random() * numberOfChances + 1);
    const compChoose = {
        1: "r",
        2: "p",
        3: "s"
      }
      computer.innerHTML = compChoose[randomNo];
    
}

function Outputs(userChance){
    player.innerHTML= userChance;
    computerGen();
    switch(userChance + compChoose){
    case "rp":
    case "ps":
    case "sr":
        remedy.innerHTML= "comp wins";
        break;

    case "rs":
    case "pr":
    case "sp":
        remedy.innerHTML = "user wins";
        break;

    case "rr":
    case "pp":
    case "ss":
        remedy.innerHTML = "draw";
        break;
    } 

}
/*if(compChoose === userChance){
        let answer ="draw"
    }
    if(compChoose === "Rock" && userChance === "Paper" ){
     answer ="user wins";
    }
    if(compChoose === "Paper" && userChance === "Scissor"){
     answer ="user wins";
    }
    if(compChoose === "Scissor" && userChance === "Rock"){
        answer ="user wins";
    }
    if(compChoose === "Paper" && userChance === "Rock"){
        answer ="comp wins";
    }
    if(compChoose === "Scissor" && userChance=== "Paper"){
         answer ="comp wins";
    }
    if(compChoose === "Rock" && userChance === "Scissor"){
         answer ="comp wins";
    }
    remedy.innerHTML= answer;
}*/