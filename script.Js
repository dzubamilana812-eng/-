let r = document.getElementById("r")
let s = document.getElementById("s")
let p = document.getElementById("p")
let result = document.getElementById("result")
let score = document.getElementById("score")

function computer(){
    let random = Math.floor(Math.random()*3);
        if(random == 0){
            return "r"
        }
        else if(random == 1){
            return "s"
        }
        else if(random == 2){
            return "p"
        }
}
function game(choice){
    let yam= computer();
    if(choice==yam){
        result.textContent="Ничья!" 
    }
    else if((choice=="r" && yam=="s")||(choice=="s" && yam=="p")||(choice=="p" && yam=="r")){
        result.textContent="Победа, хехе" 
            playerScore++
            score.textContent = `${playerScore}:${computerScore}`
    }
    else{
        result.textContent="О нииит, ты проиграл"
        computerScore++   
        score.textContent= `${playerScore}:${computerScore}`
    }
}
r.addEventListener("click", ()=> game("r"))
s.addEventListener("click", ()=> game("s"))
p.addEventListener("click", ()=> game("p"))
let playerScore = 0
let computerScore = 0