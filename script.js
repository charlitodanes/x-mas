let daysEl = document.getElementById("days");
let hrsEl = document.getElementById("hrs");
let minsEl = document.getElementById("mins");
let secsEl = document.getElementById("secs");

function pasko() {
  const xmas = new Date("2023-12-25 00:00:00").getTime();
  const now = new Date().getTime();
  const days_left = xmas - now;
  const days = Math.floor(days_left / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((days_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((days_left % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((days_left % (1000 * 60)) / 1000);

  daysEl.innerHTML = days;
  hrsEl.innerHTML = hrs;
  minsEl.innerHTML = mins;
  secsEl.innerHTML = secs;
  if (days_left <= 0) {
    alert("Pasko na!");
  } 
}
pasko();

setInterval(pasko, 1000);



const body = document.getElementById("body");
const audio = document.getElementById("myAudio");
let isAudioPlaying = false;

body.addEventListener("click", function () {
  if (isAudioPlaying) {
    audio.pause();
    isAudioPlaying = false;
  } else {
    audio.muted = false;
    audio.play();
    isAudioPlaying = true;
  }
});


