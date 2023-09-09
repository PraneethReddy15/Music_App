
let audioElement =new Audio('hukum.mp3');
let playsong=document.getElementById('masterplay');
let giffy=document.getElementById('giff');
let myprogress=document.getElementById('myprogress');
let playThisSong=document.getElementById('playthissong')
let playThisSong1=document.getElementById('playthissong1')
let playThisSong2=document.getElementById('playthissong2')
let playThisSong3=document.getElementById('playthissong3')
let playThisSong4=document.getElementById('playthissong4')
let playThisSong5=document.getElementById('playthissong5')

let innerContent=document.getElementById('innercontent');
playsong.addEventListener("click",plays);

function plays(){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        playsong.classList.remove('fa-circle-play');
        playsong.classList.add("fa-circle-pause");
        giffy.style.opacity=1;
        document.getElementById("firegif").style.backgroundImage="url('giphy1.gif')";
        document.getElementById("firegif").style.backgroundSize="cover";
                
    }
    else{
        audioElement.pause()
        playsong.classList.remove('fa-circle-pause');
        playsong.classList.add('fa-circle-play');
        giffy.style.opacity=0;
        document.getElementById("firegif").style.backgroundImage="none";
        
    }

}
audioElement.addEventListener('timeupdate',timeup);

function timeup(){
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogress.value=progress;
    
}
myprogress.addEventListener('change',changetime);

function changetime(){
    audioElement.currentTime=myprogress.value * audioElement.duration/100 ;
}
//1 song
playThisSong.addEventListener("click",changesong);

function changesong(){
    audioElement.src="spirit.mp3";
    audioElement.play();
    playsong.classList.remove('fa-circle-play');
    playsong.classList.add("fa-circle-pause");
    innerContent.innerHTML="Spirit Of Jersey";
    document.getElementById("firegif").style.backgroundImage="url('giphy1.gif')";

}

//2 song
playThisSong1.addEventListener("click",changesong1);

function changesong1(){
    audioElement.src="hukum.mp3";
    audioElement.play();
    playsong.classList.remove('fa-circle-play');
    playsong.classList.add("fa-circle-pause");
    innerContent.innerHTML="Hukum – Thalaivar Alappara";
    document.getElementById("firegif").style.backgroundImage="url('giphy1.gif')";
    document.getElementById("firegif").style.backgroundSize="cover";

}
//3 song
playThisSong2.addEventListener("click",changesong2);

function changesong2(){
    audioElement.src="Dosti.mp3";
    audioElement.play();
    playsong.classList.remove('fa-circle-play');
    playsong.classList.add("fa-circle-pause");
    innerContent.innerHTML="Dosti";
    document.getElementById("firegif").style.backgroundImage="url('giphy1.gif')";
    document.getElementById("firegif").style.backgroundSize="cover";

}
//4 song
playThisSong3.addEventListener("click",changesong3);

function changesong3(){
    audioElement.src="Nuvvani Idhi Needani.mp3";
    audioElement.play();
    playsong.classList.remove('fa-circle-play');
    playsong.classList.add("fa-circle-pause");
    innerContent.innerHTML="Nuvvani Idhi Needani";
    document.getElementById("firegif").style.backgroundImage="url('giphy1.gif')";
    document.getElementById("firegif").style.backgroundSize="cover";

}
//5 song
playThisSong4.addEventListener("click",changesong4);

function changesong4(){
    audioElement.src="Ye Chota Nuvvunna.mp3";
    audioElement.play();
    playsong.classList.remove('fa-circle-play');
    playsong.classList.add("fa-circle-pause");
    innerContent.innerHTML="Ye Chota Nuvvunna";
    document.getElementById("firegif").style.backgroundImage="url('giphy1.gif')";
    document.getElementById("firegif").style.backgroundSize="cover";

}
//6 song
playThisSong5.addEventListener("click",changesong5);

function changesong5(){
    audioElement.src="Dheera Dheera.mp3";
    audioElement.play();
    playsong.classList.remove('fa-circle-play');
    playsong.classList.add("fa-circle-pause");
    innerContent.innerHTML="Dheera Dheera";
    document.getElementById("firegif").style.backgroundImage="url('giphy1.gif')";
    document.getElementById("firegif").style.backgroundSize="cover";

}
