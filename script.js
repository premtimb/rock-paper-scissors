let playerScore = 0;
let computerScore= 0;
const winningScore = 5;

const buttons = document.querySelectorAll('button[data-choice]');
const resultDiv = document.getElementById('round-result');
const scoreDiv = document.getElementById('score');
const winnerDiv = document.getElementById('winner');
const playAgainButton = document.getElementById('play-again');


function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return `It's a tie! You both chose ${playerChoice}.`;
    }

    const playerWins = (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
                       (playerChoice === 'Paper' && computerChoice === 'Rock') ||
                       (playerChoice === 'Scissors' && computerChoice === 'Paper');

    if(playerWins){
        playerScore++;
        return `You win! Your selection:${playerChoice} beats Computer's selection: ${computerChoice}`;
    }else{
        computerScore++;
        return `You lose! Computer's selection: ${computerChoice} beats Your selection: ${playerChoice}`;
    }
}

function updateScore(){
    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function checkForWinner(){
    if(playerScore >= winningScore || computerScore >= winningScore){
        if(playerScore > computerScore){
            winnerDiv.textContent = 'Congratulations! You have won the game!';
        }else {
            winnerDiv.textContent = 'Sorry! The Computer has won the game!';
        }
        buttons.forEach(button => button.disabled=true);

        playAgainButton.style.display = 'inline-block';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(playerScore >= winningScore || computerScore >= winningScore){
            return;
        }
        const playerChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        const roundResult = playRound(playerChoice, computerChoice);
        resultDiv.textContent = roundResult;
        updateScore();
        checkForWinner();
    });
});

playAgainButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    resultDiv.textContent = 'Click a button to play!';
    winnerDiv.textContent = '';
    buttons.forEach(button => button.disabled = false);
    playAgainButton.style.display = 'none';
});