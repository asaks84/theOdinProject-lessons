let pcPoints = 0;
let playerPoints = 0;
let roundResult = '';
let roundCounter = 1;

const buttons = document.querySelectorAll('.choiceBtn');
const butonStart = document.querySelector('button.startPlay');


// game functions
function isTheWinner() {
    if (pcPoints > playerPoints) {
        console.log('%c HAHA, LOOSER!', 'color:red;');
    } else if (pcPoints < playerPoints) {
        console.log('%c NICE! YOU WON THE GAME!', 'color: green;');
    };
};
function gameOver() {
    if (pcPoints == 5 || playerPoints == 5) {
        console.error('THE GAME IS FUCKIN OVER!');
        buttons.forEach(button => { 
            button.setAttribute("disabled", "true");
            button.classList.add('disabled')
        });
        isTheWinner();
    };
};
function capitalyze(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function computerPlay() {
    const randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0: return 'ROCK';
        case 1: return 'PAPER';
        case 2: return 'SCISSOR';
    };
};
function playRound(playerSelection) {
    const pcMove = computerPlay();
    const playerMove = playerSelection.target.value.toUpperCase();

    console.warn(`Round: %c${roundCounter}`, 'color: red;')

    // setting the round result
    if (pcMove == playerMove) {
        roundResult = "It's a Tie!";
    } else if (
        (pcMove == 'ROCK' && playerMove == 'SCISSOR') ||
        (pcMove == 'PAPER' && playerMove == 'ROCK') ||
        (pcMove == 'SCISSOR' && playerMove == 'PAPER')) {
        ++pcPoints;
        roundResult = "You Lose!";
    } else {
        ++playerPoints;
        roundResult = "You Win!";
    };

    //printing round results
    console.log(`${capitalyze('You')}: ${capitalyze(playerMove)}`);
    console.log(`Pc: ${capitalyze(pcMove)}`);
    console.log(`Points:\nPc: ${pcPoints}\nYou: ${playerPoints}`);
    console.log(`%c${roundResult.toUpperCase()}`, 'color: white;');
    ++roundCounter;
    gameOver();
};
function controls(e) {
    const control = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!control) return;
    control.click();
};

// UI

function fadeOut(disable, transitionTime) {
    if (transitionTime) disable.setAttribute('style', transitionTime);
    disable.classList.remove('visible');
    disable.classList.add('hidden');
    disable.addEventListener('transitionend', () => disable.classList.add('displayNone'));
};
function fadeIn(enable, timer, transitionTime) {
    if (!timer) timer = 550;
    if (enable.classList.contains('displayNone')) {
        enable.classList.remove('displayNone');
    }
    setTimeout(function () {
        enable.classList.remove('hidden');
        enable.setAttribute('style', transitionTime);
        enable.classList.add('visible');
    }, timer);
};

function startPlaying() {
    const toCloseOpeningScreen = document.querySelector('#openingScreen');
    const gameStart = document.querySelector('#theGame');
    const fadeInDuration = 'transition-duration: .7s';
    const fadeStart = 600;

    fadeOut(toCloseOpeningScreen);
    toCloseOpeningScreen.addEventListener('transitionend', () => fadeIn(gameStart, fadeStart, fadeInDuration));
};

// playing the game
buttons.forEach(button => button.addEventListener('click', playRound));
window.addEventListener('keydown', controls);

// start the game
butonStart.addEventListener('click', startPlaying);