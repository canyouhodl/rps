let pScore = 0;
let cScore = 0;

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');

const buttons = document.querySelectorAll('.button');


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



function playRound(playerHand) {
    const message = document.querySelector('.message');
    let computerHand = computerPlay();
    let result = '';

    if(playerHand === 'rock' && computerHand === 'scissors' || 
    playerHand === 'paper' && computerHand === 'rock' ||
    playerHand === 'scissors' && computerHand === 'paper') {
        pScore++;
        result = `You win! ${playerHand} beats ${computerHand}`;
        message.innerText = `You win! ${playerHand} beats ${computerHand}`;
        if (pScore === 5) {
            alert('You won the game!');
        }
    } 
    if(computerHand === 'rock' && playerHand === 'scissors' || 
    computerHand === 'paper' && playerHand === 'rock' ||
    computerHand === 'scissors' && playerHand === 'paper') {
        result = `Lose! ${computerHand} beats ${playerHand}`;
        message.innterText = result;
        if (cScore === 5) {
            alert('You lost the game!');
        }
    } 
    if (playerHand === computerHand) {
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