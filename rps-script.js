//prompt a pop-up box with a message for the user, and ask for his choice
let playerSelection = prompt('You are going to play the most ancient and noble game of all time. A game that kings used to settle wars. A game that has been used throughout history to solve the biggest and most complicated conflicts that mankind have ever faced. It is known by many names, but you might know it as ROCK, PAPER, SCISSORS. In this game you will face a brutal opponent, the computer. It will be a five round match. Choose your weapon wisely.' , '');
        console.log(playerSelection)

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
// console.log(getComputerChoice());
//assign the getComputerChoice() functions result to a variable
// let computerSelection = getComputerChoice();
//     console.log(computerSelection);
/* a function that will take the user's and the computer's choices, and return
a string that declares the winner of the round.*/
function playRound(playersChoice, computersChoice) {
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
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i <5; i++) {
        let computerSelection = getComputerChoice();
            console.log(computerSelection);
        playRound(playerSelection, computerSelection);

        if (playRound(playerSelection, computerSelection) === 'win') {
            playerScore++;
            alert (`The computer chose ${computerSelection}. You've chosen ${playerSelection}. You've won this round!`);
        }
        else if (playRound(playerSelection, computerSelection) === 'lose') {
            computerScore++;
            alert (`The computer chose ${computerSelection}. You've chosen ${playerSelection}. You've lost this round!`)
        }
        else {
            alert (`The computer chose ${computerSelection}. You've chosen ${playerSelection}. It's a tie!`)
        }

        if (i < 4) {
        playerSelection = prompt("You're next choice", ''); 
        }
    }
    
    let matchResult = playerScore > computerScore ? ". You've won!" : ". You've lost..";
    alert("playerScore is: " + playerScore + ". computerScore is: " + computerScore + matchResult);
}
    console.log(game());
