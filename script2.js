document.addEventListener('DOMContentLoaded', () => {
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
    const currentTimeDisplay = document.getElementById('currentTime');

    
    video.addEventListener("loadedmetadata", () => {
        progress.max = video.duration;
        updateTotalTime();
    });

    
    video.addEventListener("timeupdate", () => {
        progress.value = video.currentTime;
        updateCurrentTime();
    });

    
    progress.addEventListener("input", () => {
        video.currentTime = progress.value;
    });

    
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
        video.currentTime = Math.max(0, video.currentTime - 10);
    });

    
    forward.addEventListener('click', () => {
        video.currentTime = Math.min(video.duration, video.currentTime + 10);
    });

    
    mute.addEventListener('click', () => {
        video.muted = !video.muted;
        mute.innerHTML = video.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
    });

    
    volume.addEventListener('input', () => {
        video.volume = volume.value;
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

    
    video.addEventListener('ended', () => {
        playPause.innerHTML = '<i class="fas fa-play"></i>';
        progress.value = 0;
    });

    
    function updateCurrentTime() {
        const minutes = Math.floor(video.currentTime / 60);
        const seconds = Math.floor(video.currentTime % 60);
        currentTimeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    
    function updateTotalTime() {
        const totalTimeDisplay = document.getElementById('totalTime');
        const minutes = Math.floor(video.duration / 60);
        const seconds = Math.floor(video.duration % 60);
        totalTimeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
});
