const ball = document.querySelector('.ball');
const sections = document.querySelectorAll('main > div');
let currentSection = 0;
let velocity = { x: 0, y: 0 };
let position = { x: window.innerWidth / 2, y: 10 };
const gravity = 0.5;
const friction = 0.99;
const bounceReduction = 0.7;

function updateBallPosition() {
    // Apply gravity
    velocity.y += gravity;

    // Update position
    position.x += velocity.x;
    position.y += velocity.y;

    // Check for collision with screen edges
    if (position.x <= 0 || position.x >= window.innerWidth - 50) {
        velocity.x *= -bounceReduction;
        position.x = Math.max(0, Math.min(position.x, window.innerWidth - 50));
    }

    // Apply friction
    velocity.x *= friction;
    velocity.y *= friction;

    // Update ball position
    ball.style.left = `${position.x}px`;
    ball.style.top = `${position.y}px`;
}

function checkSectionCollision() {
    const currentSectionRect = sections[currentSection].getBoundingClientRect();
    
    if (position.y + 50 >= currentSectionRect.top && position.y <= currentSectionRect.bottom) {
        // Ball is within the current section
        if (position.y + 50 > currentSectionRect.bottom) {
            // Ball has reached the bottom of the section, move to next
            currentSection++;
            velocity.y = Math.abs(velocity.y) * bounceReduction; // Bounce upwards
        } else {
            // Ball is on the section, stop vertical movement
            position.y = currentSectionRect.top - 50;
            velocity.y = 0;
        }
    }
}

window.addEventListener('scroll', () => {
    // Add a small horizontal velocity when scrolling
    velocity.x += (Math.random() - 0.5) * 2;
});

function animate() {
    updateBallPosition();
    checkSectionCollision();
    requestAnimationFrame(animate);
}

animate();