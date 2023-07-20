//prompt a pop-up box with a message for the user, and ask for his choice

/*let playerSelection = prompt('You are going to play the most ancient and noble game of all time. A game that kings used to settle wars. A game that has been used throughout history to solve the biggest and most complicated conflicts that mankind have ever faced. It is known by many names, but you might know it as ROCK, PAPER, SCISSORS. In this game you will face a brutal opponent, the computer. It will be a five round match. Choose your weapon wisely.' , '');
        console.log(playerSelection)*/

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

//Add event listeners for buttons 
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultsSection = document.querySelector('.results');
//declare variables for keeping track of scores and announcing a winner
let result;
let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', function () {
    result = playRound('rock', getComputerChoice());
    resultsSection.textContent = result;
    checkRoundWinner(result);
    displayScores();
    checkGameWinner();
});

paperBtn.addEventListener('click', function () {
    result = playRound('paper', getComputerChoice());
    resultsSection.textContent = result;
    checkRoundWinner(result);
    displayScores();
    checkGameWinner();
});

scissorsBtn.addEventListener('click', function () {
    result = playRound('scissors', getComputerChoice());
    resultsSection.textContent = result;
    checkRoundWinner(result);
    displayScores();
    checkGameWinner();
});

//a function that will display the scores
function displayScores() {
    resultsSection.textContent = `Player score: ${playerScore}. Computer score: ${computerScore}.`
}

//a function that will announce a winner
function announceWinner(){
    if (playerScore > computerScore) {
        resultsSection.textContent = "You won the game!";
    }
    else if (playerScore < computerScore) {
        resultsSection.textContent = "You lost the game...";
    }
    else {
        resultsSection.textContent = "This match is a draw!";
    }
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


