document.addEventListener("DOMContentLoaded", () => {
const canvas = document.getElementById("backgroundCanvas");

// nullチェック（重要）
if (!canvas) {
console.error("canvas要素が見つかりません");
return;
}

const ctx = canvas.getContext("2d");

// =====================
// キャンバスサイズ設定
// =====================
function resizeCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// =====================
// 円の初期化
// =====================
const circles = [];
const circleCount = 50;

function createCircles() {
circles.length = 0; // リセット


for (let i = 0; i < circleCount; i++) {
  circles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 5 + 2,
    xSpeed: Math.random() * 2 - 1,
    ySpeed: Math.random() * 2 - 1,
    color: `rgba(${Math.floor(Math.random() * 255)}, 
                 ${Math.floor(Math.random() * 255)}, 
                 ${Math.floor(Math.random() * 255)}, 
                 0.8)`
  });
}


}

createCircles();

// =====================
// 描画処理
// =====================
function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);


circles.forEach(circle => {
  // 円描画
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  ctx.fillStyle = circle.color;
  ctx.fill();

  // 移動
  circle.x += circle.xSpeed;
  circle.y += circle.ySpeed;

  // 壁反射
  if (circle.x < 0 || circle.x > canvas.width) {
    circle.xSpeed *= -1;
  }
  if (circle.y < 0 || circle.y > canvas.height) {
    circle.ySpeed *= -1;
  }
});

requestAnimationFrame(draw);


}

// =====================
// アニメーション開始
// =====================
draw();
});
