
const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});


const video = document.getElementById('video');
const playPause = document.getElementById('playPause');
const rewind = document.getElementById('rewind');
const forward = document.getElementById('forward');
const mute = document.getElementById('mute');
const volume = document.getElementById('volume');
const progress = document.getElementById('progress');
const fullscreen = document.getElementById('fullscreen');

playPause.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPause.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        video.pause();
        playPause.innerHTML = '<i class="fas fa-play"></i>';
    }
});

rewind.addEventListener('click', () => {
    video.currentTime -= 10;
});

forward.addEventListener('click', () => {
    video.currentTime += 10;
});

mute.addEventListener('click', () => {
    video.muted = !video.muted;
    mute.innerHTML = video.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
});

volume.addEventListener('input', () => {
    video.volume = volume.value;
});

video.addEventListener('timeupdate', () => {
    progress.value = (video.currentTime / video.duration) * 100;
});

progress.addEventListener('input', () => {
    video.currentTime = (progress.value / 100) * video.duration;
});

fullscreen.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
});