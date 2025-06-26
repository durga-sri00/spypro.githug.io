const songs = [
  {
    title: "Chudu Chudu",
    artist: "Chandu Ravi",
    movie: "Anaganaga ",
    src:"songs/[iSongs.info] 03 - Chudu Chudu.mp3",
    image: "imgs/Anaganaga.jpg"
  },
  { 
    title: "Adiga",
    artist: "Karthik",
    movie: "HI Nanna",
    src:"songs/[iSongs.info] 09 - Adigaa.mp3",
    image: "imgs/Hi Nanna.jpg"
  }
  

];

const songList = document.getElementById("song-list");
const searchInput = document.getElementById("search-input");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const songMovie = document.getElementById("song-movie");
const songImage = document.getElementById("song-image");
const audioPlayer = document.getElementById("audio-player");
const nextUp = document.getElementById("next-up");

let currentSongIndex = -1;

function loadSongs(filter = "") {
  songList.innerHTML = "";
  songs.forEach((song, index) => {
    if (song.title.toLowerCase().includes(filter.toLowerCase())) {
      const li = document.createElement("li");
      li.textContent = `${song.title} - ${song.artist}`;
      li.onclick = () => playSong(index);
      songList.appendChild(li);
    }
  });
}

function playSong(index) {
  const song = songs[index];
  currentSongIndex = index;
  songTitle.textContent = song.title;
  songArtist.textContent = `Artist: ${song.artist}`;
  songMovie.textContent = `Movie: ${song.movie}`;
  songImage.src = song.image;
  audioPlayer.src = song.src;
  audioPlayer.play();
  const nextIndex = (index + 1) % songs.length;
  nextUp.textContent = `Next up: ${songs[nextIndex].title} - ${songs[nextIndex].movie}`;
}

audioPlayer.addEventListener("ended", () => {
  const nextIndex = (currentSongIndex + 1) % songs.length;
  playSong(nextIndex);
});

searchInput.addEventListener("input", (e) => {
  loadSongs(e.target.value);
});

loadSongs();
