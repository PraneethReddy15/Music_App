let audioElement = new Audio('./songs/Mockingbird.mp3');
let playsong = document.getElementById('masterplay');
let forward = document.getElementById('forward');
let backward = document.getElementById('backward');
let giffy = document.getElementById('giff');
let myprogress = document.getElementById('myprogress');
let innerContent = document.getElementById('innercontent');
let playThisSong = document.getElementById('playthissong');
let playThisSong1 = document.getElementById('playthissong1');
let playThisSong2 = document.getElementById('playthissong2');
let playThisSong3 = document.getElementById('playthissong3');
let playThisSong4 = document.getElementById('playthissong4');
let playThisSong5 = document.getElementById('playthissong5');

const songs = [
    { title: 'Mockingbird - Eminem', src: './songs/Mockingbird.mp3' },
    { title: 'Love Me Like You Do - Ellie', src: './songs/LoveMeLikeYouDo.mp3' },
    { title: 'Fe!n - Travis Scott', src: './songs/Fein.mp3' },
    { title: 'Daylight - David Kushner', src: './songs/Daylight.mp3' },
    { title: 'Fall Back - Lithe', src: './songs/FallBack.mp3' },
    { title: 'Anuvanuvuu - Arjit Singh', src: './songs/Anuvanuvuu.mp3' }
];

let currentIndex = 0;

playsong.addEventListener("click", plays);
forward.addEventListener("click", forwardSong);
backward.addEventListener("click", backwardSong);

function plays() {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        playsong.classList.remove('fa-circle-play');
        playsong.classList.add("fa-circle-pause");
        giffy.style.opacity = 1;
        document.getElementById("gif").style.backgroundImage = "url('./util/bg1.gif')";
        document.getElementById("gif").style.backgroundSize = "cover";
    } else {
        audioElement.pause();
        playsong.classList.remove('fa-circle-pause');
        playsong.classList.add('fa-circle-play');
        giffy.style.opacity = 0;
        document.getElementById("gif").style.backgroundImage = "";
    }
}

audioElement.addEventListener('timeupdate', timeup);

function timeup() {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogress.value = progress;
}

myprogress.addEventListener('change', changetime);

function changetime() {
    audioElement.currentTime = myprogress.value * audioElement.duration / 100;
}

playThisSong.addEventListener("click", function() { changesong(0); });
playThisSong1.addEventListener("click", function() { changesong(1); });
playThisSong2.addEventListener("click", function() { changesong(2); });
playThisSong3.addEventListener("click", function() { changesong(3); });
playThisSong4.addEventListener("click", function() { changesong(4); });
playThisSong5.addEventListener("click", function() { changesong(5); });

function changesong(index) {
    currentIndex = index;
    audioElement.src = songs[index].src;
    audioElement.play().then(() => {
        playsong.classList.remove('fa-circle-play');
        playsong.classList.add("fa-circle-pause");
        innerContent.innerHTML = songs[index].title;
        document.getElementById("gif").style.backgroundImage = "url('./util/bg1.gif')";
        document.getElementById("gif").style.backgroundSize = "cover";
    }).catch((error) => {
        console.error("Error playing audio:", error);
        alert("Failed to load the audio file.");
    });
}

function forwardSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    changesong(currentIndex);
}

function backwardSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    changesong(currentIndex);
}

// Keyboard shortcuts
document.addEventListener('keydown', e => {
    if (e.code === "Space") {
        e.preventDefault();
        plays();
    } else if (e.code === "ArrowRight") {
        e.preventDefault();
        forwardSong();
    } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        backwardSong();
    }
});

audioElement.addEventListener('error', (e) => {
    console.error("Error loading audio:", e);
    alert("Failed to load the audio file. Please check the file path and format.");
});
