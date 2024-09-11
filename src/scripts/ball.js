const ball = document.querySelector('.ball');
const sections = document.querySelectorAll('main > div');
let currentSection = 0;
let direction = 1; // 1: right, -1: left

window.addEventListener('scroll', () => {
    const sectionTop = sections[currentSection].getBoundingClientRect().top;
    const sectionBottom = sections[currentSection].getBoundingClientRect().bottom;

    // Amikor a labda eléri az elem tetejét
    if (sectionTop <= window.innerHeight * 0.8 && sectionBottom >= window.innerHeight * 0.2) {
        ball.style.top = sectionTop + 'px';

        // Gurulás balra vagy jobbra
        let newLeft = parseInt(ball.style.left) + direction * 5;
        if (newLeft <= 0 || newLeft >= window.innerWidth - 50) {
            direction *= -1; // Megfordítja az irányt
        }
        ball.style.left = newLeft + 'px';
    }

    // Amikor a labda eléri az elem szélét, lejjebb kell esnie
    if (sectionBottom < window.innerHeight) {
        currentSection++;
        ball.style.top = sections[currentSection].getBoundingClientRect().top + 'px';
    }
});
