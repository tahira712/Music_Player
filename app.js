document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("myAudio");
  const playBtn = document.getElementById("play");
  const pauseBtn = document.getElementById("pause");
  const volumeRange = document.getElementById("volumeRange");
  const loop = document.getElementById("loop");
  const shuffle = document.getElementById("shuffle");
  const songName = document.querySelector(".songName");
  const coverImg = document.getElementById("coverImg");
  const durationElement = document.querySelector(".duration");
  const curTimeElement = document.querySelector(".curTime");
  let artist = document.querySelector(".artist");
  let currentIndex = 0;

  const data = [
    {
      id: 1,
      songName: "Rim Tim Dagi Tim",
      songUrl: "./music/01.mp3",
      coverUrl: "./img/01.jpg",
      artist: "Baby Lasagna",
    },
    {
      id: 2,
      songName: "Save Your Tears",
      songUrl: "./music/02.mp3",
      coverUrl: "./img/02.jpg",
      artist: "The Weeknd",
    },
    {
      id: 3,
      songName: "Mockingbird",
      songUrl: "./music/03.mp3",
      coverUrl: "./img/03.jpg",
      artist: "Eminem",
    },
    {
      id: 4,
      songName: "Made in Romania",
      songUrl: "./music/04.mp3",
      coverUrl: "./img/04.jpg",
      artist: "Ionut Cercel",
    },
    {
      id: 5,
      songName: "Bohemian Rhapsody",
      songUrl: "./music/05.mp3",
      coverUrl: "./img/05.jpg",
      artist: "The Queen",
    },
  ];

  function playAudio() {
    audio.play();
  }

  function pauseAudio() {
    audio.pause();
  }

  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  function formatDuration(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }


  playBtn.addEventListener("click", () => {
    playAudio();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
  });

  pauseBtn.addEventListener("click", () => {
    pauseAudio();
    pauseBtn.style.display = "none";
    playBtn.style.display = "inline";
  });

  volumeRange.addEventListener("input", () => {
    audio.volume = volumeRange.value;
  });

  loop.addEventListener("click", () => {
    audio.loop = true;
    // console.log("Loop:", audio.loop);
  });


  audio.addEventListener("loadedmetadata", () => {
    const durationInSeconds = audio.duration;
    const formattedDuration = formatDuration(durationInSeconds);
    durationElement.textContent = formattedDuration;
  });

  audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    curTimeElement.textContent = `${formatTime(currentTime)}`;
  });

  forward.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= data.length) {
      currentIndex = 0;
    }
    const song = data[currentIndex];
    audio.src = song.songUrl;
    coverImg.src = song.coverUrl;
    songName.textContent = song.songName;
    artist.textContent = song.artist;
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
    audio.play();
  });
});
