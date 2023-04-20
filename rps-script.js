//prompt a pop-up box with a message for the user, and ask for his choice
let userSelection = window.prompt('You are going to play the most ancient and noble game of all time. A game that kings used to settle wars. A game that has been used throughout history to solve the biggest and most complicated conflicts that mankind have ever faced. It is known by many names, but you might know it as ROCK, PAPER, SCISSORS. In this game you will face a brutal opponent, the computer. Choose your weapon.' , 'Rock, Paper, or Scissors');

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

let computerSelection = getComputerChoice();
