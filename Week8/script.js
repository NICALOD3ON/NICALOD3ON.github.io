const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

// const playPauseImg = document.querySelector("#play-pause-img");
// console.log(playPauseImg);

playPauseButton.addEventListener("click", playPauseVideo);

function playPauseVideo()
{
    if (myVideo.paused || myVideo.ended){
        playPauseImg.scr =
        myVideo.play();
    } else {
        playPauseImg.scr = 
        myVideo.pause();
    }
}

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

// muteUnmuteButton.addEventListener("click", toggleSound);
// function toggleSound(){
//     if (myVideo.muted){
//         muteUnmuteButton.style.backgroundColor = "#d5cea3";
//         myVideo.muted = false;
//     } else {
//         muteUnmuteButton
//     }
// }

// We create an object array containing the videos
const videoList = [
    { name: "Zenscape", link: "zenscape.mp4" },
    { name: "Stardust", link: "stardust.mp4" },
  ];
  
  let loop = false;
  
//   const playPauseButton = document.querySelector("#play-pause-btn");
  // Event listener to toggle between playing and pausing video on clicking the button
  playPauseButton.addEventListener("click", togglePlay);
  const playPauseImg = document.querySelector("#play-pause-img");
  
//   const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
  // Event listener to mute or unmute audio on clicking the button
  muteUnmuteButton.addEventListener("click", toggleAudio);
  const muteUnmuteImg = document.querySelector("#mute-unmute-img");
  
  const increaseVolumeButton = document.querySelector("#increase-volume-btn");
  // Event listener to increase volume on clicking the button
  increaseVolumeButton.addEventListener("click", increaseVolume);
  
  const decreaseVolumeButton = document.querySelector("#decrease-volume-btn");
  // Event listener to decrease volume on clicking the button
  decreaseVolumeButton.addEventListener("click", decreaseVolume);
  
  const loopButton = document.querySelector("#loop-btn");
  // Event listener to loop or replay the video on clicking the button
  loopButton.addEventListener("click", loopVideo);
  
  const step1Button = document.querySelector("#step-1-btn");
  // Event listener to navigate to step 1 timestamp in video on clicking the button
  step1Button.addEventListener("click", gotoStep1);
  

  const progressBar = document.querySelector("#progress-bar-fill");
  // myVideo.removeAttribute("controls");
  
  // Event listener to check time update on video to update the progress bar
  myVideo.addEventListener("timeupdate", updateProgressBar);
  
  // Event listener to check current volume
  myVideo.addEventListener("volumechange", updateVolume);
  
  // Event listener to check if the video is ended to replay it
  myVideo.addEventListener("ended", replay);
  
  const firstVideoButton = document.querySelector("#first-video-btn");
  
  // Event listener to play the first video
  firstVideoButton.addEventListener("click", function playIt() {
    myVideo.pause();
    playVideo(0);
  });
  
  function updateVolume() {
    const volume = myVideo.volume;
    console.log("Volume changed:", volume);
  }
  
  //volume values range from 0 to 1 with an increment of 0.1
  function increaseVolume() {
    if (myVideo.volume < 0.9) {
      myVideo.volume += 0.1;
    }
  }
  
  //since you do not want the value to go to negative the check is not at 0 but 0.11
  function decreaseVolume() {
    if (myVideo.volume > 0.11) {
      myVideo.volume -= 0.1;
    }
  }
  
  //if the timestamp for step 1 is at 16.41s then it will set the currenttime to that
  function gotoStep1() {
    myVideo.currentTime = 16.41;
  }
  
  const secondVideoButton = document.querySelector("#second-video-btn");
  secondVideoButton.addEventListener("click", function playIt() {
    myVideo.pause();
    playVideo(1);
  });
  
  //video will be played if it is currently paused or ended
  //otherwise the same function will pause the video
  function togglePlay() {
    if (myVideo.paused || myVideo.ended) {
      myVideo.play();
      playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    } else {
      myVideo.pause();
      playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    }
  }
  
  //to mute the video we check if it is already muted or not, if not
  //mute it or unmute it.
  function toggleAudio() {
    if (myVideo.muted) {
      myVideo.muted = false;
      muteUnmuteButton.style.backgroundColor = "#d5cea3";
    } else {
      myVideo.muted = true;
      muteUnmuteButton.style.backgroundColor = "#7b775e";
    }
  }
  
  //depending on the number, it will fetch the right video and its name
  //from the VideoList array, see at the top.
  function playVideo(no) {
    myVideo.src = videoList[no].link;
    videoName.textContent = videoList[no].name;
    // myVideo.load();
    // myVideo.play();
  }
  
  //to loop or replay the video, we set and check the value of loop
  //loop is a boolean variable, originally false, but can be set to true
  // by clicking the loop button
  
  function replay() {
    console.log("loop is", loop);
    if (loop) {
      myVideo.currentTime = 0;
      myVideo.play();
    }
  }
  
  //this function will set the value of loop to true or false
  function loopVideo() {
    if (loop) {
      loop = false;
      loopButton.style.backgroundColor = "#d5cea3";
    } else {
      loop = true;
      loopButton.style.backgroundColor = "#7b775e";
    }
    console.log("loop is", loop);
  }
  
  //we increase the width of the progress bar depending on the percentage
  // how much video is played in comparison to how much is left or its duration.
  function updateProgressBar() {
    videoTime.textContent = myVideo.currentTime.toFixed(2);
    const value = (myVideo.currentTime / myVideo.duration) * 100;
    progressBar.style.width = value + "%";
  }
  
  // We use this function to toggle in and out of full screen
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      // If no element is in fullscreen, request fullscreen on the video player
      myVideo.requestFullscreen();
    } else {
      // Otherwise, exit fullscreen
      document.exitFullscreen();
    }
  }
  
  // Event listener for double-click on the video to toggle fullscreen
  myVideo.addEventListener("dblclick", toggleFullscreen);
  
  // Event listener for fullscreen change event to update UI
  document.addEventListener("fullscreenchange", function () {
    if (document.fullscreenElement === myVideo) {
      console.log("Entered fullscreen");
    } else {
      console.log("Exited fullscreen");
    }
  });