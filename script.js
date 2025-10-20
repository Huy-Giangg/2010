// Khi bấm nút Nhận quà
document.getElementById("gift-btn").addEventListener("click", function () {
  const giftScreen = document.getElementById("gift-screen");
  const container = document.querySelector(".container");
  const music = document.getElementById("bg-music");

  // Hiện nội dung chính
  giftScreen.style.display = "none";
  container.style.display = "block";

  // Phát nhạc
  music.play();

  // Bắt đầu hiệu ứng
  startHearts();
  startFireworks("fireworks-left");
  startFireworks("fireworks-right");
});


// 🎈 Hiệu ứng trái tim bay
function startHearts() {
  const canvas = document.getElementById("hearts");
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const hearts = [];
  function createHeart() {
    hearts.push({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      size: 15 + Math.random() * 15,
      speed: 1 + Math.random() * 2,
      alpha: 0.7 + Math.random() * 0.3
    });
  }

  function drawHeart(x, y, size, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = "rgba(255,105,180,0.8)";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    ctx.bezierCurveTo(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (Math.random() < 0.05) createHeart();
    for (let i = 0; i < hearts.length; i++) {
      const h = hearts[i];
      h.y -= h.speed;
      drawHeart(h.x, h.y, h.size, h.alpha);
      if (h.y < -20) hearts.splice(i, 1);
    }
    requestAnimationFrame(animate);
  }
  animate();
}


// 🎆 Hiệu ứng pháo hoa hai bên
function startFireworks(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  const particles = [];

  function createFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.5;
    const color = `hsl(${Math.random() * 360}, 100%, 60%)`;
    for (let i = 0; i < 30; i++) {
      particles.push({
        x,
        y,
        angle: Math.random() * 2 * Math.PI,
        speed: Math.random() * 4 + 2,
        life: 80,
        color
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.life -= 1;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 2, 2);
      if (p.life <= 0) particles.splice(i, 1);
    }
    if (Math.random() < 0.05) createFirework();
    requestAnimationFrame(animate);
  }
  animate();
}
