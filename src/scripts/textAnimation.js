let isAnimating = false;

export function textAnimator(elementId, text, speed) {
    const textElement = document.getElementById(elementId);
    let index = 0;

    if (isAnimating) return;
    isAnimating = true;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            isAnimating = false;
        }
    }

    type();
}
