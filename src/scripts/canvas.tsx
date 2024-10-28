interface MousePosition {
    x: number | undefined;
    y: number | undefined;
}

interface Circle {
    x: number;
    y: number;
    dx: number;
    dy: number;
    radius: number;
    minRadius: number;
    color: string;
    draw: () => void;
    update: () => void;
}

export function bannerCanvas(canvas: HTMLCanvasElement) {
    const c = canvas.getContext("2d");
    if (!c) return;

    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const mouse: MousePosition = {
        x: undefined,
        y: undefined,
    };

    window.addEventListener("mousemove", (event) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    });

    window.addEventListener("resize", () => {
        canvasWidth = window.innerWidth;
        canvasHeight = window.innerHeight;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        init();
    });

    const maxRadius = 40;
    const colorArray = ["#6a0dad", "#8a2be2", "#9370db", "#dda0dd"];
    let circleArray: Circle[] = [];

    function Circle(
        this: Circle,
        x: number,
        y: number,
        dx: number,
        dy: number,
        radius: number
    ) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

        this.draw = () => {
            if (c) {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.fillStyle = this.color;
                c.fill();
            }
        };

        this.update = () => {
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

            // interactivity
            if (
                mouse.x &&
                mouse.y &&
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

        for (let i = 0; i < 500; i++) {
            const radius = Math.random() * 3 + 1;
            const x = Math.random() * (canvasWidth - radius * 2) + radius;
            const y = Math.random() * (canvasHeight - radius * 2) + radius;
            const dx = (Math.random() - 0.5) * 3;
            const dy = (Math.random() - 0.5) * 3;
            circleArray.push(new (Circle as any)(x, y, dx, dy, radius));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        if (c) {
            c.clearRect(0, 0, canvasWidth, canvasHeight);

            for (let i = 0; i < circleArray.length; i++) {
                circleArray[i].update();
            }
        }
    }

    init();
    animate();
}
