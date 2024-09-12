export function bannerCanvas(canvas) {
    const c = canvas.getContext("2d");
    var canvasWidth = window.innerWidth;
    var canvasHeight = window.innerHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    var mouse = {
        x: undefined,
        y: undefined,
    };

    window.addEventListener("mousemove", function (event) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
        // console.log(mouse) // az egér helyzete
    });

    window.addEventListener("resize", function () {
        canvasWidth = window.innerWidth;
        canvasHeight = window.innerHeight;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        init();
    });

    var maxRadius = 40;
    var colorArray = ["#6a0dad", "#8a2be2", "#9370db", "#dda0dd"];
    var circleArray = [];

    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

        this.draw = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
        };

        this.update = function () {
            if (
                this.x + this.radius > canvasWidth ||
                this.x - this.radius < 0
            ) {
                this.dx = -this.dx;
            }

            if (
                this.y + this.radius > canvasHeight ||
                this.y - this.radius < 0
            ) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;

            //interactivity
            if (
                mouse.x - this.x < 50 &&
                mouse.x - this.x > -50 &&
                mouse.y - this.y < 50 &&
                mouse.y - this.y > -50
            ) {
                if (this.radius < maxRadius) {
                    this.radius += 1;
                }
            } else if (this.radius > this.minRadius) {
                this.radius -= 1;
            }

            this.draw();
        };
    }

    function init() {
        circleArray = [];

        for (var i = 0; i < 500; i++) {
            var radius = Math.random() * 3 + 1;
            var x = Math.random() * (canvasWidth - radius * 2) + radius;
            var y = Math.random() * (canvasHeight - radius * 2) + radius;
            var dx = (Math.random() - 0.5) * 3;
            var dy = (Math.random() - 0.5) * 3;
            circleArray.push(new Circle(x, y, dx, dy, radius));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, canvasWidth, canvasHeight);

        for (var i = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }
    }

    init();
    animate();
}
