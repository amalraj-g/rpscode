const computer = document.getElementById("comp");
const player = document.getElementById("user");
const remedy = document.getElementById("result");
const rock = document.getElementById("R");
const paper = document.getElementById("P");
const scissor = document.getElementById("S");
main();

function main(){
    rock.addEventListener("click", function(){
        Outputs("R");
    })
    paper.addEventListener("click", function(){
        Outputs("P");
    })
    scissor.addEventListener("click",function(){
        Outputs("S");
    })
    
}

const compChoose = {
    1: "R",
    2: "P",
    3: "S"
  }
function computerGen(){
    const numberOfChances= 3;
    const randomNo = Math.floor(Math.random() * numberOfChances + 1);
    
    computer.innerHTML = compChoose[randomNo];
    return compChoose[randomNo];
}

function Outputs(userChance){
    player.innerHTML= userChance;
    const compResult=computerGen();
    switch(userChance + compResult){
    case "RP":
    case "PS":
    case "SR":
        remedy.innerHTML= "Comp wins";
        break;

    case "RS":
    case "PR":
    case "SP":
        remedy.innerHTML = "User wins";
        break;

    case "RR":
    case "PP":
    case "SS":
        remedy.innerHTML = "Draw!";
        break;
    } 

}
