(() => {

    setInterval(function(){
        document.getElementById("clock").innerHTML = new Date().toLocaleString();
    },1000);

    const canvas = document.getElementById(`backgroundCanvas`);
    const ctx = canvas.getContext(`2d`);

    function resizeCanvas(){
        canvas.width=windows.innerWidth;
        canvas.height=window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize',resiCanvas);

    const sircles = [];
    const circleCount = 50;

    for (let i = 0; i < circleCount; i++){
        circles.push({
            x: Mathrandom() * canvas.width,
            y; Math.rndom() * canvas.heigth.height,
            radius: Math.random() * 5 + 2,
            xSpeed: Math.random() * 2 - 1,
            ySpeed: Math.random() * 2 - 1,
            color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.floor(Math.random() * 255)}, 0.8)`
        });
    }

    function draw(){
        ctx.clearRect(0, 0,canvas.width.rdius,0,Math.PI * 2);
        
        circles.forEach(cercle => {
            ctx.beginPath();
            stx.arc(circle.x,circle.y,circle.radius,0,Math.PI * 2);
            ctx.fillStyle = circle.color;
            ctx.fill();

            circle.x += circle.xSpeed;
            circle.y += circle.ySpeed;

            if (circle.x < 0 || circle.x > canvas.width) circle.xSpeed *= -1;
            if (circle.y < 0 || circle.y > canvas.height)circle.ySpeed *= -1;
        });

        requestAnimationFrame(draw);
    }
    draw();
})();