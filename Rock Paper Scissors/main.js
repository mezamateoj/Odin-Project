function getComputerChoice() {
    let game = ['Rock', 'Paper', 'Scissors'];
    return game[Math.floor(Math.random() * game.length)]
}

const playerSelection = prompt('Rock. paper or scissors?')
const computerSelection = getComputerChoice()


function playRound(playerSelection, computerSelection) {
    
    return playerSelection, computerSelection
}

console.log(playRound(playerSelection, computerSelection))