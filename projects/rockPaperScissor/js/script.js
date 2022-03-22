let pcPoints = 0;
let playerPoints = 0;
let roundResult = '';
let roundCounter = 1;

const buttons = Array.from(document.querySelectorAll('.choiceBtn'));
const butonStart = document.querySelector('button.startPlay');
const machineScore = Array.from(document.querySelectorAll('.machinePoint'));
const playerScore = Array.from(document.querySelectorAll('.playerPoint'));

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
        case 0: {
            showPcSelection('0');
            return 'ROCK';
        }
        case 1: {
            showPcSelection('1');
            return 'PAPER';
        }
        case 2: {
            showPcSelection('2');
            return 'SCISSOR';
        }
    };
};
function playRound(playerSelection) {
    const pcMove = computerPlay();
    const playerMove = playerSelection.target.getAttribute('data-value').toUpperCase();

    // send pc Selection to UI

    // setting the round result
    if (pcMove == playerMove) {
        roundResult = "It's a Tie!";
    } else if (
        (pcMove == 'ROCK' && playerMove == 'SCISSOR') ||
        (pcMove == 'PAPER' && playerMove == 'ROCK') ||
        (pcMove == 'SCISSOR' && playerMove == 'PAPER')) {
        ++pcPoints;
        roundResult = "You Lose!";
        addScore(machineScore, pcPoints);
    } else {
        ++playerPoints;
        roundResult = "You Win!";
        addScore(playerScore, playerPoints);
    };

    //printing round results
    console.warn(`Round: %c${roundCounter}`, 'color: red;');
    console.log(`${capitalyze('You')}: ${capitalyze(playerMove)}`);
    console.log(`Pc: ${capitalyze(pcMove)}`);
    console.log(`Points:\nPc: ${pcPoints}\nYou: ${playerPoints}`);
    console.log(`%c${roundResult.toUpperCase()}`, 'color: white;');
    ++roundCounter;
    gameOver();
};
function controls(e) {
    const control = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (pcPoints == 5 || playerPoints == 5) return
    if (!control) return;
    control.click();
};

// UI
function showPcSelection(pcResult) {
    const machineChoice = document.querySelector('#machineChoice');
    const imgArray= [ './imgs/rockR.png' , './imgs/paperR.png' , './imgs/scissorR.png'];
    const img = document.createElement('img');

    while (machineChoice.firstChild) {
        machineChoice.removeChild(machineChoice.firstChild);
      }

     img.src = imgArray[pcResult];
    img.width = '70'


    machineChoice.appendChild(img);
}

function addScore(playerPoint, point) {
    playerPoint[point - 1].classList.add('winnerPoint');
};

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
    const container = document.querySelector('div#container');
    const toCloseOpeningScreen = document.querySelector('#openingScreen');
    const gameStart = document.querySelector('#theGame');
    const fadeInDuration = 'transition-duration: .7s';
    const fadeStart = 600;

    container.classList.add('bgGame');
    fadeOut(toCloseOpeningScreen);
    toCloseOpeningScreen.addEventListener('transitionend', () => fadeIn(gameStart, fadeStart, fadeInDuration));
};

// playing the game
buttons.forEach(button => button.addEventListener('click', playRound));
window.addEventListener('keydown', controls);

// start the game
 butonStart.addEventListener('click', startPlaying);