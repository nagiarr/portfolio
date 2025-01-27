const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

// サイズを設定
    function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

// アニメーション用の円の設定
    const circles = [];
    const circleCount = 50;

    for (let i = 0; i < circleCount; i++) {
        circles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 5 + 2,
            xSpeed: Math.random() * 2 - 1,
            ySpeed: Math.random() * 2 - 1,
            color: 'rgba(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', 0.8)'
        });
    }

// 描画関数
    function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circles.forEach(circle => {
        // 円を描画
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();

        // 位置を更新
        circle.x += circle.xSpeed;
        circle.y += circle.ySpeed;

        // 境界を超えた場合の処理
        if (circle.x < 0 || circle.x > canvas.width) circle.xSpeed *= -1;
        if (circle.y < 0 || circle.y > canvas.height) circle.ySpeed *= -1;
    });

    requestAnimationFrame(draw);
    }

// アニメーション開始
    draw();