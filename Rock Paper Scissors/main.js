// Rock beats scissors and loses to paper
// Scissors beat paper but loses to rock.
// Paper beats rock, but loses to scissors

function getComputerChoice() {
    let game = ['Rock', 'Paper', 'Scissors'];
    return game[Math.floor(Math.random() * game.length)].toLowerCase();
}


function getPlayerChoice() {
    const playerSelection = prompt('Rock. paper or scissors?').toLowerCase();
    return playerSelection;
}
// const playerSelection = 'paper'

// console.log(computerSelection)


const gameDict = {'rock': {'scissors': 'win', 'paper': 'lose', 'rock': 'tie'},
                  'scissors': {'scissors': 'tie', 'paper': 'win', 'rock': 'lose'},
                  'paper': {'scissors': 'lose', 'paper': 'tie', 'rock': 'win'},
                }

function playRound(playerSelection, computerSelection) {
    console.log('player ' + playerSelection + ' Computer ' + computerSelection);
    return gameDict[playerSelection][computerSelection];
}

// console.log(playRound(playerSelection, computerSelection))


function game() {
    let userScore = 0;
    let computerScore = 0;
    let scoresLive = [];

    // let gameResult = playRound(playerSelection, computerSelection);
    for (let i = 0; i < 5; i++) {
        scoresLive.push(playRound(getPlayerChoice(), getComputerChoice()))
        if (scoresLive[i] === 'lose') {
            computerScore += 1;

        } else if (scoresLive[i] === 'win') {
            userScore += 1;
    
        }
    }
    console.log(scoresLive)
    return 'Player points ' +  userScore + ' Computer points ' + computerScore;
}


console.log(game())