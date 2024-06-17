const circles = document.querySelectorAll('.circle');
const startBtn = document.getElementById('start-btn');

const COLORS = ['#ff6347', '#1e90ff', '#32cd32', '#ffd700', '#9400d3', '#ff4500'];
const NUM_CIRCLES = 6;
let sequence = [];
let playerSequence = [];
let round = 0;
let canClick = false;

