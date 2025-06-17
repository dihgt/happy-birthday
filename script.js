// Animasi ketikan
const typingText = document.getElementById("typing-text");
const message = "Selamat Ulang Tahun, Dina 💖";
let i = 0;

function typeWriter() {
  if (i < message.length) {
    typingText.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Popup logic
const showMessage = document.getElementById("show-message");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");

showMessage.addEventListener("click", () => {
  popup.classList.add("show");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});

// Efek bunga
const canvas = document.getElementById("flowers");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const petals = [];
for (let i = 0; i < 50; i++) {
  petals.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 4 + 2,
    d: Math.random() * 1 + 0.5,
  });
}

function drawPetals() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#f7c6c7";
  ctx.beginPath();
  for (let i = 0; i < petals.length; i++) {
    const p = petals[i];
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  updatePetals();
}

function updatePetals() {
  for (let i = 0; i < petals.length; i++) {
    const p = petals[i];
    p.y += p.d;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  }
}

setInterval(drawPetals, 33);
