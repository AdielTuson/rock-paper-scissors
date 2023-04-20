//prompt a pop-up box with a message for the user, and ask for his choice
let userSelection = window.prompt('You are going to play the most ancient and noble game of all time. A game that kings used to settle wars. A game that has been used throughout history to solve the biggest and most complicated conflicts that mankind have ever faced. It is known by many names, but you might know it as ROCK, PAPER, SCISSORS. In this game you will face a brutal opponent, the computer. Choose your weapon.' , '');

//a function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: 
            return 'Rock';
            break;

        case 1: 
            return 'Paper';
            break;

        case 2: 
            return 'Scissors'
            break;
    }
}

//assign the getComputerChoice() functions result to a variable
let computerSelection = getComputerChoice();
console.log(computerSelection);

/*write a function that will take the user's and the computer's choices,
evaluate who is the winner and return
a string that declares the winner of the round.*/
function playRound(userSelection, computerSelection) {
    switch(userSelection.toUpperCase()) {
        case 'ROCK':
            if (computerSelection === 'Paper')
                return ("You Lose! Paper beats Rock");
            else if (computerSelection ==='Scissors')
                return ("You Win! Rock beats Scissors");
            else 
                return "It's a tie!";
            break;
        
        case 'PAPER':
            if (computerSelection === 'Scissors')
                return ("You Lose! Scissors beats Paper")
            else if (computerSelection === 'Rock')
                return ("You Win! Paper beats Rock")
            else
                return "It's a tie!";
            break;

        case 'SCISSORS':
            if (computerSelection === 'Rock')
                return ("You Lose! Rock beats Scissors");
            else if (computerSelection === 'Paper')
                return ("You Win! Scissors beats Paper")
            else 
                return ("It's a tie!")
            break;
    }  
} 
console.log(playRound(userSelection, computerSelection));
