let daysEl = document.getElementById("days");
let hrsEl = document.getElementById("hrs");
let minsEl = document.getElementById("mins");
let secsEl = document.getElementById("secs");

function pasko() {
  const xmas = new Date("December 25, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const days_left = xmas - now;

  if (days_left <= 0) {
    daysEl.innerHTML = 0;
    hrsEl.innerHTML = 0;
    minsEl.innerHTML = 0;
    secsEl.innerHTML = 0;
    alert("Pasko na!");
    return; // Stop the function if Christmas has passed
  }

  const days = Math.floor(days_left / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((days_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((days_left % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((days_left % (1000 * 60)) / 1000);

  daysEl.innerHTML = days;
  hrsEl.innerHTML = hrs;
  minsEl.innerHTML = mins;
  secsEl.innerHTML = secs;
}

pasko(); // Initial call to display the countdown immediately
setInterval(pasko, 1000); // Update the countdown every second

// Audio handling
const body = document.getElementById("body");
const audio = document.getElementById("myAudio");
let isAudioPlaying = false;

if (body && audio) { // Check if elements exist
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
} else {
  console.error("Element with id 'body' or 'myAudio' not found!");
}
