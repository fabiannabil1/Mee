const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function drawCircuit() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#76ff03";
  ctx.lineWidth = 0.7;

  for (let x = 0; x < canvas.width; x += 40) {
    for (let y = 0; y < canvas.height; y += 40) {
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x, y);
      const offsetX = Math.random() * 40 - 20;
      const offsetY = Math.random() * 40 - 20;
      ctx.lineTo(x + offsetX, y + offsetY);
      ctx.stroke();
    }
  }
}

setInterval(drawCircuit, 100);
