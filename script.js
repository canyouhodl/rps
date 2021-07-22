let num = Math.floor(Math.random()*3);
let hand;



function computerPlay() {
    if (num === 0) {
        hand = 'rock';
    }
    else if (num === 1) {
        hand = 'paper';
    }
    else {
        hand = 'scissors';
    }
    console.log(hand);
    return hand;
}


console.log(playerSelection);




function playRound(playerSelection, computerSelection) {


    if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose! Paper beats rock');
        ++compScore;
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log('Draw!');
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win! Scissors beat paper.');
        ++humanScore;
    }

    else if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log('Draw');
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win! Paper beats rock.');
        ++humanScore;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You Lose! Rock beats scissors.');
        ++humanScore;

    }

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose! Paper beats rock.');
        ++compScore;
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log('Draw!');

    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You Win! Scissors beat paper.');
        ++humanScore;

    }

    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You Win! Rock beats scissors.');
        ++compScore;

    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You lose! Scissors beat paper');
        ++humanScore;

    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log('Draw');

    }
}
let humanScore = 0;
let compScore = 0;

function game() {
        

    
     
    while (humanScore < 5 || compScore < 5) {
        const computerSelection = computerPlay();
        const playerSelection = prompt("Choose your hand", "").toLowerCase();
        playRound(playerSelection, computerSelection);
        console.log(humanScore);
        console.log(compScore);
    }






    
}

game();