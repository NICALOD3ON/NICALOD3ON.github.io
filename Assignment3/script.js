const circles = document.querySelectorAll('.circle');
const startBtn = document.getElementById('start-btn');
const startContainer = document.querySelector('.start-container');
const gameContainer = document.querySelector('.game-container');

const COLORS = ['#ff6347', '#1e90ff', '#32cd32', '#ffd700', '#9400d3', '#ff4500'];
const NUM_CIRCLES = 6;
let sequence = [];
let playerSequence = [];
let round = 0;
let canClick = false;

console.log("Script loaded"); // Check if script is loading correctly

startBtn.addEventListener('click', startGame);

function startGame() {
    console.log("Start button clicked"); // Check if start button click event is detected
    startContainer.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    round = 1;
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
    }, 1000); // Adjust speed of sequence playback
}

function lightUp(index) {
    circles[index].style.backgroundColor = COLORS[index];
    setTimeout(() => {
        circles[index].style.backgroundColor = 'transparent';
    }, 500); // Adjust how long each circle stays lit up
}

circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        if (canClick) {
            playerSequence.push(index);
            checkSequence();
        }
    });
});

function checkSequence() {
    if (playerSequence.length === sequence.length) {
        if (playerSequence.every((value, index) => value === sequence[index])) {
            // Player got the sequence right
            round++;
            playerSequence = [];
            setTimeout(() => {
                sequence = generateSequence();
                playSequence();
            }, 1000); // Delay before next round starts
        } else {
            // Player got it wrong
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
