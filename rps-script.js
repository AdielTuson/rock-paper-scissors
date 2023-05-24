//prompt a pop-up box with a message for the user, and ask for his choice
let playerSelection = prompt('You are going to play the most ancient and noble game of all time. A game that kings used to settle wars. A game that has been used throughout history to solve the biggest and most complicated conflicts that mankind have ever faced. It is known by many names, but you might know it as ROCK, PAPER, SCISSORS. In this game you will face a brutal opponent, the computer. Choose your weapon.' , '');
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
    for (let i = 1; i <=5; i++) {
        playRound(playerSelection, getComputerChoice());
            console.log(getComputerChoice());   
            console.log(playRound(playerSelection, getComputerChoice()));
        if (playRound(playerSelection, getComputerChoice()) === 'Win') {
            playerScore++;
        }
        else if (playRound(playerSelection, getComputerChoice()).substring(4,8) === 'Lose') {
            computerScore++;
        }
        
    }
    return "playerScore is " + playerScore + " computerScore is " + computerScore;
}
    console.log(game());
