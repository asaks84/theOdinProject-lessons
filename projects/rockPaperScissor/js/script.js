let pcPoints = 0;
let playerPoints = 0;
let roundResult = '';
let roundCounter = 1;

const buttons = document.querySelectorAll('button');

function computerPlay() {
    const randomNum = Math.floor(Math.random() * 3);
    let pcSelect;

    if (randomNum == 1) {
        pcSelect = 'Rock';
    } else if (randomNum == 2) {
        pcSelect = 'Paper';
    } else pcSelect = 'Scissor';
    return pcSelect.toUpperCase();
}
function isTheWinner(){
    if(pcPoints > playerPoints) {
        console.error('You lost the game!');
    } else if(pcPoints < playerPoints) {
        console.warn('You won the game!');
    }
}
function gameOver(){
    if(pcPoints == 3 || playerPoints == 3){
        console.error('GAME IS FUCKIN OVER!');
        buttons.forEach(button => button.setAttribute("disabled", "true"));
        isTheWinner();
    }
};
function playRound(playerSelection) {
    const pcMove = computerPlay();
    const playerMove = playerSelection.target.value.toUpperCase();

    console.warn(`Round: ${roundCounter}`)
    // creating the conditions
    if (pcMove == playerMove) {
        roundResult ="It's a Tie!";
    } else if (
        (pcMove == 'ROCK' && playerMove == 'SCISSOR') ||
        (pcMove == 'PAPER' && playerMove == 'ROCK') ||
        (pcMove == 'SCISSOR' && playerMove == 'PAPER')) {
            ++pcPoints;
            roundResult ="You Lose!";
    } else {
        ++playerPoints;
        roundResult ="You Win!";
    } console.log(roundResult);

    console.log(`PC: ${pcMove}`);
    console.log(`YOU: ${playerMove}`);
    console.log(`POINTS:\nPC: ${pcPoints}\nUSER: ${playerPoints}`);
    ++roundCounter;
    gameOver();
}

// UI

buttons.forEach(button => button.addEventListener('click', playRound));