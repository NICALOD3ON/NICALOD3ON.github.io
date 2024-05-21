const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

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