const musicButton = document.querySelector("#play-pause");
const musicButtonImg = document.querySelector("#play-pause img");
const audio = document.querySelector("audio");
audio.loop = true;

musicButton.addEventListener("click", e => {
    if (audio.paused) {
        audio.play();
        musicButton.title = "pause music";
        musicButtonImg.src = "./src/pause.png";
        musicButtonImg.alt = "pause";
    }
    
    else {
        audio.pause();
        musicButton.title = "play music";
        musicButtonImg.src = "./src/play.png";
        musicButtonImg.alt = "play";
    }
});

window.addEventListener("resize", e => {
    const currentWidth = window.innerWidth;
    if (currentWidth <= 960) {
        audio.pause();
    }
});