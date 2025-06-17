// Confetti efek
function startConfetti() {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
}

// Musik auto play fallback
window.addEventListener("click", () => {
  const music = document.getElementById("music");
  if (music.paused) music.play();
});

// Jalankan confetti setelah sedikit delay
setTimeout(startConfetti, 1000);
