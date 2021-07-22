



function computerPlay() {
    let hand;
    let num = Math.floor(Math.random()*3);

    if (num === 0) {
        hand = 'rock';
    }
    else if (num === 1) {
        hand = 'paper';
    }
    else if (num === 2) {
        hand = 'scissors';
    }
    else {
        hand = 'invalid';
    }
    return hand;
}






function playRound() {
    let playerSelection = prompt("Choose your hand").toLowerCase();
    let computerSelection = computerPlay();


    if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose! Paper beats rock');
        return 'lose';
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log('Draw!')
        return 'draw';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win! Scissors beat paper.')
        return 'win';
    }

    else if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log('Draw!');
        return 'draw';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {

        console.log('You win! Paper beats rock.');
        return 'win';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You lose! Rock beats scissors.');
        return 'lose';
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose! Paper beats rock.');
        return 'lose';
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log('Draw!');
        return 'draw';

    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {

        console.log('You Win! Scissors beat paper.')
        return 'win';
    }

    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You Win! Rock beats scissors.')
        return 'win';

    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You lose! Scissors beat paper');
        return 'lose';

    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log('Draw!');
        return 'draw';
    }
    else {
        console.log('Invalid! Choose from rock, paper, and scissors')
        return 'invalid';
    }
}


function game() {
    let humScore = 0;
    let compScore = 0;
    let gamesPlayed = 0;

    while (gamesPlayed < 5) {
        
        let round = playRound();
        switch(round) {
            case 'win':
                ++gamesPlayed;
                humScore++;
                console.log(`Score You: ${humScore} Computer: ${compScore}`);
                break;
            
            case 'lose':
                ++gamesPlayed;
                compScore++;
                console.log(`Score You: ${humScore} Computer: ${compScore}`);
                break;
            
            case 'draw':
                ++gamesPlayed;
                humScore++;
                compScore++;
                console.log(`Score You: ${humScore} Computer: ${compScore}`);
      
        }
    }

    if (humScore > compScore) {
        console.log(`YOU WIN ${humScore} to ${compScore}!`);
    }
    else if (compScore > humScore) {
        console.log(`YOU LOSE ${humScore} to ${compScore} :( `);
    }
    else {
        console.log(`DRAW! ${humScore} to ${compScore}`)
    }



}

game();