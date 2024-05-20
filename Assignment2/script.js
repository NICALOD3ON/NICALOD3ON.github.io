// Get references to DOM elements
const videoPlayer = document.getElementById('custom-video-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const skipToStartBtn = document.getElementById('skip-to-start-btn');
const rewindBtn = document.getElementById('rewind-btn');
const fastForwardBtn = document.getElementById('fast-forward-btn');
const skipToEndBtn = document.getElementById('skip-to-end-btn');
const replayBtn = document.getElementById('replay-btn');
const fullscreenBtn = document.getElementById('fullscreen-btn');

// Function to toggle play/pause
function togglePlay() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
  } else {
    videoPlayer.pause();
    playBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
  }
}

// Function to pause video
function pauseVideo() {
  videoPlayer.pause();
  playBtn.style.display = 'inline-block';
  pauseBtn.style.display = 'none';
}

// Function to skip to start of video
function skipToStart() {
  videoPlayer.currentTime = 0;
}

// Function to rewind video
function rewind() {
  videoPlayer.currentTime -= 10; // Rewind by 10 seconds
}

// Function to fast forward video
function fastForward() {
  videoPlayer.currentTime += 10; // Fast forward by 10 seconds
}

// Function to skip to end of video
function skipToEnd() {
  videoPlayer.currentTime = videoPlayer.duration;
}

// Function to replay video
function replay() {
  videoPlayer.currentTime = 0;
  videoPlayer.play();
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'inline-block';
}

// Function to toggle fullscreen mode
function toggleFullscreen() {
  if (videoPlayer.requestFullscreen) {
    videoPlayer.requestFullscreen();
  } else if (videoPlayer.mozRequestFullScreen) { // Firefox
    videoPlayer.mozRequestFullScreen();
  } else if (videoPlayer.webkitRequestFullscreen) { // Chrome, Safari and Opera
    videoPlayer.webkitRequestFullscreen();
  } else if (videoPlayer.msRequestFullscreen) { // IE/Edge
    videoPlayer.msRequestFullscreen();
  }
}

// Event listeners
playBtn.addEventListener('click', togglePlay);
pauseBtn.addEventListener('click', pauseVideo);
skipToStartBtn.addEventListener('click', skipToStart);
rewindBtn.addEventListener('click', rewind);
fastForwardBtn.addEventListener('click', fastForward);
skipToEndBtn.addEventListener('click', skipToEnd);
replayBtn.addEventListener('click', replay);
fullscreenBtn.addEventListener('click', toggleFullscreen);
