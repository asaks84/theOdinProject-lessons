let pcPoints = 0;
let playerPoints = 0;
let roundResult = '';
let roundCounter = 1;

const buttons = Array.from(document.querySelectorAll('.choiceBtn'));
const butonStart = document.querySelector('button.startPlay');
const machineScore = Array.from(document.querySelectorAll('.machinePoint'));
const playerScore = Array.from(document.querySelectorAll('.playerPoint'));
const machineChoice = document.querySelector('#machineChoice');
const slider = document.querySelector('.slider');
const restultTimer = 1500;

// game functions
function isTheWinner() {
    console.error('THE GAME IS FUCKIN OVER!');
    buttons.forEach(button => {
        button.classList.add('disabled')
    });
    if (pcPoints > playerPoints) {
        console.log('%c HAHA, LOOSER!', 'color:red;');
    } else if (pcPoints < playerPoints) {
        console.log('%c NICE! YOU WON THE GAME!', 'color: green;');
    };
};
function gameOver() {
    return pcPoints == 5 || playerPoints == 5
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
    showRoundResult(roundResult);

    // printing round results on console
    console.warn(`Round: %c${roundCounter}`, 'color: red;');
    console.log(`${capitalyze('You')}: ${capitalyze(playerMove)}`);
    console.log(`Pc: ${capitalyze(pcMove)}`);
    console.log(`Points:\nPc: ${pcPoints}\nYou: ${playerPoints}`);
    console.log(`%c${roundResult.toUpperCase()}`, 'color: white;');
    ++roundCounter;
    if (gameOver()) {
        isTheWinner()
        return
    } loadSlider()
};

function controls(e) {
    const control = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (gameOver()) return
    if (!control) return;
    control.click();
};

// UI

function fadeOut(disable, dontRemove, transitionTime) {
    if (transitionTime) disable.style.transitionDuration = transitionTime;
    
    disable.classList.remove('visible');
    disable.classList.add('hidden');
   
    if (dontRemove != true) {
        disable.addEventListener('transitionend', () => disable.classList.add('displayNone'));
    };
};

function fadeIn(enable, timer, transitionTime) {
    if (!timer) timer = 0;
    if (transitionTime) enable.style.transitionDuration  = transitionTime;

    if (enable.classList.contains('displayNone')) {
        enable.classList.remove('displayNone');
    }
    setTimeout(function () {
        enable.classList.remove('hidden');
        enable.classList.add('visible');
    }, timer);
};

function showRoundResult(result) {
    const divResult = document.querySelector('#roundResult');
    const para = divResult.querySelector('p');

    para.textContent = result;
    para.classList.add('hidden');

    if (result == "It's a Tie!") {
        para.style.color = 'yellow';
    } else if (result == "You Lose!") {
        para.style.color = 'red';
    } else para.style.color = 'green';

    divResult.appendChild(para);

    fadeIn(para);

    setTimeout(() => {
        fadeOut(para,true);
    }, restultTimer);
};

function loadSlider() {

    buttons.forEach(button => {
        button.classList.add('disabled')
    });
    setTimeout(function () {
        machineChoice.removeChild(machineChoice.firstChild);
        machineChoice.appendChild(slider);
        buttons.forEach(button => {
            button.classList.remove('disabled')
        });
    }, restultTimer);
};

function showPcSelection(pcResult) {
    const imgArray = ['./imgs/rockR.png', './imgs/paperR.png', './imgs/scissorR.png'];
    const img = document.createElement('img');

    while (machineChoice.firstChild) {
        machineChoice.removeChild(machineChoice.firstChild);
    };

    img.src = imgArray[pcResult];
    img.width = '70'
    machineChoice.appendChild(img);
}

function addScore(playerPoint, point) {
    playerPoint[point - 1].classList.add('winnerPoint');
};

function startPlaying() {
    const toCloseOpeningScreen = document.querySelector('#openingScreen');
    const gameStart = document.querySelector('#theGame');
    const fadeStart = 600;


    fadeOut(toCloseOpeningScreen);
    toCloseOpeningScreen.addEventListener('transitionend', () => fadeIn(gameStart, fadeStart));
};

// playing the game
buttons.forEach(button => button.addEventListener('click', playRound));
window.addEventListener('keydown', controls);

// start the game
butonStart.addEventListener('click', startPlaying);