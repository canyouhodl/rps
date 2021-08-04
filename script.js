let pScore = 0;
let cScore = 0;

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');

const compRock = document.querySelector('.compRock');
const compPaper = document.querySelector('.compPaper');
const compScissors = document.querySelector('.compScissors');


const playerScore = document.querySelector('.playerScore');
const compScore = document.querySelector('.compScore');

const buttons = document.querySelectorAll('button')

function disableButtons() {
    buttons.forEach(btn => {
        btn.disabled = true;
    });
};

function main() {

    rockBtn.addEventListener('click', () => {
        playRound('rock');
    })
    
    paperBtn.addEventListener('click', () => {
        playRound('paper');
    })
    
    scissorsBtn.addEventListener('click', () => {
        playRound('scissors');
    })


}


function computerPlay() {
    const rng = Math.floor(Math.random() * 3) + 1;
    switch(rng) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function show() {
    compRock.classList.remove('hide');
    compScissors.classList.remove('hide');
    compPaper.classList.remove('hide');
    rockBtn.classList.remove('hide');
    paperBtn.classList.remove('hide');
    scissorsBtn.classList.remove('hide');
}




function playRound(playerHand) {
    const message = document.querySelector('.message');
    let computerHand = computerPlay();

    if(playerHand === 'rock' && computerHand === 'scissors' || 
    playerHand === 'paper' && computerHand === 'rock' ||
    playerHand === 'scissors' && computerHand === 'paper') {
        pScore++;
        setTimeout(function() { show(); }, 1000);
        playerScore.innerText = `Player: ${pScore}`;
        compScore.innerText = `Computer: ${cScore}`;
        message.innerText = `You win! ${playerHand} beats ${computerHand}`;
        if(computerHand === 'scissors') {
            compRock.classList.add('hide');
            compPaper.classList.add('hide');
        }
        else if (computerHand === 'rock') {
            compScissors.classList.add('hide');
            compPaper.classList.add('hide');
        }
        else if (computerHand === 'paper') {
            compRock.classList.add('hide');
            compScissors.classList.add('hide');
        }

        if(playerHand === 'rock') {
            scissorsBtn.classList.add('hide');
            paperBtn.classList.add('hide');
        }
        else if (playerHand === 'paper') {
            rockBtn.classList.add('hide');
            scissorsBtn.classList.add('hide');
        }
        else if (playerHand === 'scissors') {
            rockBtn.classList.add('hide');
            paperBtn.classList.add('hide');
        }

        if (pScore === 5) {
            alert('You won the game! Reload the page to play again');
            disableButtons();
        }
    } 
    else if (computerHand === 'rock' && playerHand === 'scissors' || 
    computerHand === 'paper' && playerHand === 'rock' ||
    computerHand === 'scissors' && playerHand === 'paper') {
        cScore++;
        message.innerText = `You Lose! ${computerHand} beats ${playerHand}`;

        playerScore.innerText = `Player: ${pScore}`;
        compScore.innerText = `Computer: ${cScore}`;
        setTimeout(function() { show(); }, 1000);
        if (computerHand === 'rock') {
            compScissors.classList.add('hide');
            compPaper.classList.add('hide');
        }
        else if (computerHand === 'paper') {
            compRock.classList.add('hide');
            compScissors.classList.add('hide');
        }
        else if (computerHand === 'scissors') {
            compRock.classList.add('hide');
            compPaper.classList.add('hide');
        }


        if(playerHand === 'rock') {
            scissorsBtn.classList.add('hide');
            paperBtn.classList.add('hide');
        }
        else if (playerHand === 'paper') {
            rockBtn.classList.add('hide');
            scissorsBtn.classList.add('hide');
        }
        else if (playerHand === 'scissors') {
            rockBtn.classList.add('hide');
            paperBtn.classList.add('hide');
        }
        
        if (cScore === 5) {
            buttons.disabled = true;
            alert('You lost the game! Reload the page to play again');
            disableButtons();
        }
    } 
    else if (playerHand === computerHand) {
        if(computerHand === 'scissors') {
            compRock.classList.add('hide');
            compPaper.classList.add('hide');
            rockBtn.classList.add('hide');
            paperBtn.classList.add('hide');
        }
        else if (computerHand === 'rock') {
            compScissors.classList.add('hide');
            compPaper.classList.add('hide');
            scissorsBtn.classList.add('hide');
            paperBtn.classList.add('hide');
        }
        else if (computerHand === 'paper') {
            compRock.classList.add('hide');
            compScissors.classList.add('hide');
            rockBtn.classList.add('hide');
            scissorsBtn.classList.add('hide');
        }



        setTimeout(function() { show(); }, 1000);
        playerScore.innerText = `Player: ${pScore}`;
        compScore.innerText = `Computer: ${cScore}`;

        message.innerText = 'Draw!'
    }
    return

}




// function game(playerHand) {
//     let pScore = 0;
//     let cScore = 0;
//     let compHand = computerPlay();
//     while (pScore < 5 && cScore < 5) {

//         const winner = playRound(playerHand);
//         switch(winner) {
//             case 'player':
//                 ++pScore;
//                 console.log(`You win. Score is ${pScore} to ${cScore}`)
//                 break;
//             case 'computer':
//                 ++cScore;
//                 console.log(`You Lose. Score is ${pScore} to ${cScore}`)
//                 break;
//             case 'draw':
//                 console.log(`Draw. Score is ${pScore} to ${cScore}`)
//                 break;
//         }
//     }

//     if (pScore === 5) {
//         console.log(`You won the game! Final score: ${pScore} to ${cScore}`);
//         return 'player';
//     }
//     if (cScore === 5) {
//         console.log(`You lost the game! Final score: ${pScore} to ${cScore}`);
//         return 'computer';
//     }
// }



main();