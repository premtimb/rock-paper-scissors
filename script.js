function getComputerChoice(){
    let computerChoice = Math.random();
    if(computerChoice < 1/3){
        return "rock";
    }else if (computerChoice < 2/3){
        return "paper";
    }else return "scissors";
}

function getHumanChoice(){
    let humanChoice = prompt("Lets Play whats your choice", "")
    return humanChoice.toLowerCase();
}
function playGame(){
    let humanScore=0;
    let computerScore=0;
    function playRound(humanChoice,computerChoice){
        if(humanChoice === computerChoice){
            console.log("Its a tie. ")
        }else if((humanChoice === 'rock' && computerChoice === 'scissors') || 
                (humanChoice === 'paper' && computerChoice === 'rock') ||
                (humanChoice === 'scissors' && computerChoice === 'paper'))
                {
                    humanScore++;
                    console.log(`You won. You choose ${humanChoice} and Computer ${computerChoice}`)
        } else {
            computerScore++;
            console.log(`You lost. You choose ${humanChoice} and Computer ${computerChoice}`)
        } 
    }
    for (let round=1; round<=5;round++){
        console.log(`Round: ${round}`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();


        playRound(humanSelection, computerSelection)
        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    }

    if(humanScore > computerScore){
        console.log(`You won the game ${humanScore} - ${computerScore}`);
    } else if (humanScore < computerScore){
        console.log(`You lost the game ${humanScore} - ${computerScore}`);
    } else {
        console.log(`Game tied.`)
    }
}

playGame();
