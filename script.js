console.log("Welcome To Music");
//initialize
let songIndex=0;
let audioElement=new Audio('D:/Git uploads/music player/assets/enchanted.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"Enchanted", filePath:"D:/Git uploads/music player/assets/enchanted.mp3" , coverPath:"D:/Git uploads/music player/assets/Taylor.jpg"},
    {songName:"Shout out", filePath:"D:/Git uploads/music player/assets/Shout out.mp3" , coverPath:"D:/Git uploads/music player/assets/enhypen.jpg"},
    {songName:"Hare Krishna", filePath:"D:/Git uploads/music player/assets/Hare Krishna.mp3" , coverPath:"D:/Git uploads/music player/assets/krishna1.jpg"},
    {songName:"Dynamite", filePath:"D:/Git uploads/music player/assets/Dynamite.mp3" , coverPath:"D:/Git uploads/music player/assets/BTS.jpg"},
    {songName:"Naruto", filePath:"D:/Git uploads/music player/assets/Naruto.mp3" , coverPath:"D:/Git uploads/music player/assets/naruto.jpg"},
    {songName:"Perfect", filePath:"D:/Git uploads/music player/assets/Perfect.mp3" , coverPath:"C:Users/user/visual stdio/music player/assets/onedirection.jpg"},
    {songName:"On My Way", filePath:"D:/Git uploads/music player/assets/On My Way.mp3" , coverPath:"D:/Git uploads/music player/assets/Alanwalker.jpg"}

]
songItems.forEach((element, i) =>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].src=songs[i].songName;

})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})

//Listen to events

audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    Progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=Progress;
})
myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        masterSongName.innerText=songs[songIndex].songName;
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.src =songs[songIndex-1].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
}
)
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>6){
        songIndex=0;

    }
    else{
        songIndex +=1;
    }
    audioElement.src =songs[songIndex-1].filePath;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<= 0){
        songIndex = 0;

    }
    else{
        songIndex -=1;
    }
    audioElement.src =songs[songIndex-1].filePath;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})