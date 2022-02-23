let pcPoints = 0;
let playerPoints = 0;

function computerPlay() {
    const randomNum = Math.floor(Math.random() * 3);
    let pcSelect;

    if (randomNum == 1) {
        pcSelect = 'Rock';
    } else if (randomNum == 2) {
        pcSelect = 'Paper';
    } else pcSelect = 'Scissor';
    pcSelect = pcSelect.toUpperCase();
    return pcSelect;
}

function playerSelection() {
    let userSelect = prompt('Make your move (rock, paper, scissor)').toUpperCase();

    while (userSelect != 'ROCK' && userSelect != 'PAPER' && userSelect != 'SCISSOR') {
        userSelect = prompt('Make your move (rock, paper, scissor).   ~type it right~').toUpperCase();
    }
    return userSelect;
}

function playRound() {
    const pcMove = computerPlay();
    const playerMove = playerSelection();

    console.log(`PC: ${pcMove}`);
    console.log(`YOU: ${playerMove}`);

    // creating the conditions
    if (pcMove == playerMove) {
        console.log("It's a Tie!")
    } else if (
        (pcMove == 'ROCK' && playerMove == 'SCISSOR') ||
        (pcMove == 'PAPER' && playerMove == 'ROCK') ||
        (pcMove == 'SCISSOR' && playerMove == 'PAPER')
    ) {
        ++pcPoints;
        console.log('You Lose!');
    } else {
        ++playerPoints;
        console.log('You Win!');
    }

    console.log(`POINTS:\nPC: ${pcPoints}\nUSER: ${playerPoints}`)
}
function game() {
    for(i=0;i<5;i++){
        playRound();
    }
    if(pcPoints > playerPoints) {
        console.log('You lost the game!')
    } else if(pcPoints < playerPoints) {
        console.log('You won the game!')
    } else { console.log('No winner for now!') }
}
game();