const circles = document.querySelectorAll('.circle');
const startBtn = document.getElementById('start-btn');
const startContainer = document.querySelector('.start-container');
const gameContainer = document.querySelector('.game-container');
const scoreDisplay = document.getElementById('score');

const COLORS = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc', '#ffccff', '#ccffff'];
const NUM_CIRCLES = 6;
let sequence = [];
let playerSequence = [];
let round = 0;
let canClick = false;

startBtn.addEventListener('click', startGame);

function startGame() {
    startContainer.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    round = 1;
    scoreDisplay.textContent = 0;
    playerSequence = [];
    sequence = generateSequence();
    playSequence();
}

function generateSequence() {
    let seq = [];
    for (let i = 0; i < round; i++) {
        let randomIndex = Math.floor(Math.random() * NUM_CIRCLES);
        seq.push(randomIndex);
    }
    return seq;
}

function playSequence() {
    canClick = false;
    let i = 0;
    let interval = setInterval(() => {
        lightUp(sequence[i]);
        i++;
        if (i >= sequence.length) {
            clearInterval(interval);
            canClick = true;
        }
    }, 1000);
}

function lightUp(index) {
    circles[index].style.opacity = 1;
    setTimeout(() => {
        circles[index].style.opacity = 0.5;
    }, 500);
}

circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        if (canClick) {
            playerSequence.push(index);
            lightUp(index); // Light up when clicked
            checkSequence();
        }
    });
});

function checkSequence() {
    if (playerSequence.length === sequence.length) {
        if (playerSequence.every((value, index) => value === sequence[index])) {
            round++;
            scoreDisplay.textContent = round - 1;
            playerSequence = [];
            setTimeout(() => {
                sequence = generateSequence();
                playSequence();
            }, 1000);
        } else {
            alert(`Game Over! You reached round ${round}`);
            resetGame();
        }
    }
}

function resetGame() {
    round = 0;
    sequence = [];
    playerSequence = [];
    canClick = false;
    startContainer.classList.remove('hidden');
    gameContainer.classList.add('hidden');
}
