// Countdown Elements
const daysEl = document.getElementById("days");
const hrsEl = document.getElementById("hrs");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

// Media Elements
const backgroundVideo = document.getElementById("myVideo");
const audioElement = document.getElementById("myAudio");

// Countdown to Christmas 2025
function pasko() {
  const christmasDate = new Date("December 25, 2025 00:00:00").getTime();
  const currentDate = new Date().getTime();
  const timeDifference = christmasDate - currentDate;

  if (timeDifference <= 0) {
    daysEl.textContent = "0";
    hrsEl.textContent = "0";
    minsEl.textContent = "0";
    secsEl.textContent = "0";
    alert("Pasko na! Maligayang Pasko!");
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  daysEl.textContent = days;
  hrsEl.textContent = hours;
  mins.textContent = minutes;
  secs.textContent = seconds;
}

// Initialize Countdown
pasko();
setInterval(pasko, 1000);

// Media Controls
backgroundVideo.addEventListener('play', () => {
  const userConfirmed = confirm("🎅 Click OK to start Christmas music!");
  if(userConfirmed) {
    try {
      audioElement.muted = false;
      audioElement.play();
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  }
});

// Click-to-Toggle Audio Control
document.body.addEventListener('click', () => {
  if(audioElement.paused) {
    audioElement.play().catch(error => {
      console.log("Audio requires user interaction");
    });
  } else {
    audioElement.pause();
  }
});

// Browser Autoplay Fallback
window.addEventListener('load', () => {
  audioElement.play().catch(error => {
    console.log("Autoplay blocked - waiting for user interaction");
  });
});
