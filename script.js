const text = "Octey_Monteur";
const container = document.getElementById("animated-text");

[...text].forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.classList.add("letter");
    span.style.animationDelay = `${index * 0.08}s`; // décalage pour chaque lettre
    container.appendChild(span);
});

const countEl = document.getElementById("tiktok-count");
const target = 923; // ← tu mets ici le nombre d'abonnés
let current = 0;
const duration = 1000; // durée totale de l'anim en ms
const frameRate = 30; // en ms
const steps = duration / frameRate;
const increment = Math.ceil(target / steps);

const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
        countEl.textContent = target.toLocaleString("fr-FR");
        clearInterval(counter);
    } else {
        countEl.textContent = current.toLocaleString("fr-FR");
    }
}, frameRate);

const tiktoklink = document.getElementById("tiktoklink");
tiktoklink.addEventListener("click", (event) => {
    window.open("http://tiktok.com/@octey_monteur")
})

const twitterlink = document.getElementById("twitterlink");
twitterlink.addEventListener("click", (event) => {
    window.open("https://x.com/Octeyy_Monteur")
})

const buttons = document.querySelectorAll(".play");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const videoId = btn.dataset.target;
    const video = document.getElementById(videoId);
    if (video.paused) {
  video.play();
  btn.textContent = "||";
  
} else {
  video.pause();
  btn.textContent = "▶";
}

  });
});

const videos = document.querySelectorAll("video");

videos.forEach(video => {
  video.addEventListener("pause", () => {
    video.classList.add("paused");
  });

  video.addEventListener("play", () => {
    video.classList.remove("paused");
  });

  // Appliquer le flou au chargement si la vidéo est déjà en pause
  if (video.paused) {
    video.classList.add("paused");
  }
});
