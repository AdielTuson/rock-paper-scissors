//a function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: 
            return 'Rock';
            
        case 1: 
            return 'Paper';
            
        case 2: 
            return 'Scissors'
    }
}

/* a function that will take the user's and the computer's choices, and return
a string that declares the winner of the round.*/
function playRound(playersChoice, computersChoice) {
    console.log(computersChoice);
    switch(playersChoice.toUpperCase()) {
        case 'ROCK':
            if (computersChoice === 'Paper')
                return "lose";
            else if (computersChoice ==='Scissors')
                return "win";
            else 
                return "tie";
            
        
        case 'PAPER':
            if (computersChoice === 'Scissors')
                return "lose";
            else if (computersChoice === 'Rock')
                return "win";
            else
                return "tie";
            

        case 'SCISSORS':
            if (computersChoice === 'Rock')
                return "lose";
            else if (computersChoice === 'Paper')
                return "win";
            else 
                return "tie";
            
    }  
} 

/*a function called game() will use the playRound() function and keep
the score of both the player and the computer for 5 rounds, and return a
string that declares the winner of the game.*/

//Add event listeners for buttons and sections
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultsSection = document.querySelector('.results');
const computerSection = document.querySelector('.computerChoice'); 

//declare variables for keeping track of scores and announcing a winner
let result;
let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', function () {
    const computerChoice = getComputerChoice();
    computerSection.textContent = ` You have chosen ROCK. Your enemy have chosen ${computerChoice.toUpperCase()}.`;
    result = playRound('rock', computerChoice);
    checkRoundWinner(result);
    displayScores();
    checkGameWinner();
});

paperBtn.addEventListener('click', function () {
    const computerChoice = getComputerChoice(); 
    computerSection.textContent = `You have chosen PAPER. Your enemy have chosen ${computerChoice.toUpperCase()}.`;   
    result = playRound('paper', computerChoice);
    checkRoundWinner(result);
    displayScores();
    checkGameWinner();
});

scissorsBtn.addEventListener('click', function () {
    const computerChoice = getComputerChoice();
    computerSection.textContent = `You have chosen SCISSORS. Your enemy have chosen ${computerChoice.toUpperCase()}.`;
    result = playRound('scissors', computerChoice);
    checkRoundWinner(result);
    displayScores();
    checkGameWinner();
});

//a function that will display the scores
function displayScores() {
    resultsSection.textContent = `You : ${playerScore}         Enemy : ${computerScore}`;
}

//a function that will announce a winner
function announceWinner(){
    if (playerScore > computerScore) {
        resultsSection.textContent = "You won the battle! Your kingdom is eternally grateful";
    }
    else if (playerScore < computerScore) {
        resultsSection.textContent = "You lost the battle... You have failed us all";
    }
    else {
        resultsSection.textContent = "This battle is a draw! You shall try again";
    }

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

//a function that will check for a round winner
function checkRoundWinner(roundResults){
    if (roundResults === 'win'){
        playerScore++
    }
    else if (roundResults === 'lose'){
        computerScore++
    }
}

//a function that will check for a game winner
function checkGameWinner(){
    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
    }
}