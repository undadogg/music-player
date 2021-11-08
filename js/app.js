/* SONG TITLES */
var songs = [
    {
        title: 'Godsmack - When Legends Rise',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/71ee11vyMuL._SL1500_.jpg',
        number: 1
    },
    {
        title: 'Fall Out Boy -  My Songs Know What You Did In The Dark',
        cover: 'https://m.media-amazon.com/images/M/MV5BNzhhZDJjOWQtOTJiOC00NGJkLWI3ZGUtNjUyOGY2MmFiNjQ5XkEyXkFqcGdeQXVyNzQwMzAwNTI@._V1_.jpg',
        number: 2
    },
    {
        title: 'Ludovico Einaudi - Petricor',
        cover: 'https://m.media-amazon.com/images/I/61Lsdkab0kL.jpg',
        number: 3
    }
]

var i;
var songIndex = 0;

let disc = document.querySelector('.disc img'),
    audio = document.querySelector('#music__audio'),
    displayIndex = document.querySelector('#song__index'),
    nextBtn = document.querySelector('.controlls__prev i'),
    prevBtn = document.querySelector('.controlls__next i'),
    playBtn = document.querySelector('.controlls__play i'),
    timeline = document.querySelector('.music__progress'),
    title = document.querySelector('.title__display p')

/* LOAD SONG */
function loadSong(song){
    audio.src = `./music/${song}.mp3`
}

loadSong(songs[songIndex].title)

document.addEventListener('DOMContentLoaded', () => {
    title.textContent = `${songs[songIndex].title}`
})

playBtn.addEventListener('click', playSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

/*------- PREV SONG -------*/
function prevSong(){
    disc.classList.remove('playing')
    timeline.classList.remove('visible') 
    playBtn.classList.remove('fa-pause')
    playBtn.classList.add('fa-play')
    playBtn.parentElement.classList.remove('active')

    songIndex--

    if(songIndex < 0){
        //set index to highest number of songs
        songIndex = songs.length - 1
    }

    displayIndex.textContent = `${songIndex}`
    title.textContent = `${songs[songIndex].title}`
    disc.setAttribute('src', songs[songIndex].cover)

    loadSong(songs[songIndex].title)
}

/*------- NEXT SONG -------*/
function nextSong(){
    disc.classList.remove('playing')
    timeline.classList.remove('visible')
    playBtn.classList.remove('fa-pause')
    playBtn.classList.add('fa-play')
    playBtn.parentElement.classList.remove('active')

    songIndex++

    if(songIndex > songs.length){
        //set index 0
        songIndex = 0
    }    

    displayIndex.textContent = `${songIndex}`
    title.textContent = `${songs[songIndex].title}`
    disc.setAttribute('src', songs[songIndex].cover)

    loadSong(songs[songIndex].title)
}

/*------- PLAY SONG -------*/
function playSong(){
    if(playBtn.className == 'fas fa-play'){
        playBtn.classList.remove('fa-play')
        playBtn.classList.add('fa-pause')
        disc.classList.add('playing')
        playBtn.parentElement.classList.add('active')
        disc.style.animationPlayState = 'running' 
        timeline.classList.add('visible')
        audio.play()
    }
    /* PAUSE SONG */
    else {
        playBtn.classList.remove('fa-pause')
        playBtn.classList.add('fa-play')
        playBtn.parentElement.classList.remove('active')
        disc.style.animationPlayState = 'paused'
        timeline.classList.remove('visible')
        audio.pause()
    }
}
