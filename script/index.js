let audioElement = new Audio('./songs/Mockingbird.mp3');
let playsong = document.getElementById('masterplay');
let giffy = document.getElementById('giff');
let myprogress = document.getElementById('myprogress');
let innerContent = document.getElementById('innercontent');
let playThisSong = document.getElementById('playthissong');
let playThisSong1 = document.getElementById('playthissong1');
let playThisSong2 = document.getElementById('playthissong2');
let playThisSong3 = document.getElementById('playthissong3');
let playThisSong4 = document.getElementById('playthissong4');
let playThisSong5 = document.getElementById('playthissong5');

playsong.addEventListener("click", plays);

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

playThisSong.addEventListener("click", function() { changesong('Mockingbird - Eminem', './songs/mockingbird.mp3'); });
playThisSong1.addEventListener("click", function() { changesong('Love Me Like You Do - Ellie', './songs/lovemelikeyoudo.mp3'); });
playThisSong2.addEventListener("click", function() { changesong('Fe!n - Travis Scott', './songs/fein.mp3'); });
playThisSong3.addEventListener("click", function() { changesong('Daylight - David Kushner', './songs/daylight.mp3'); });
playThisSong4.addEventListener("click", function() { changesong('Fall Back - Lithe', './songs/fallback.mp3'); });
playThisSong5.addEventListener("click", function() { changesong('Anuvanuvuu - Arjit Singh', './songs/anuvanuvuu.mp3'); });

function changesong(title, src) {
    audioElement.src = src;
    audioElement.play();
    playsong.classList.remove('fa-circle-play');
    playsong.classList.add("fa-circle-pause");
    innerContent.innerHTML = title;
    document.getElementById("gif").style.backgroundImage = "url('./util/bg1.gif')";
    document.getElementById("gif").style.backgroundSize = "cover";
}

// Keyboard shortcuts
document.addEventListener('keydown', e => {
    if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        plays();
    }
});
