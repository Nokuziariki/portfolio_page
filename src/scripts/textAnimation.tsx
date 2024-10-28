let isAnimating = false;

export function textAnimator(elementId: string, text: string, speed: number) {
    const textElement = document.getElementById(
        elementId
    ) as HTMLElement | null;
    let index = 0;

    if (!textElement || isAnimating) return;
    isAnimating = true;

    function type() {
        if (index < text.length) {
            if (textElement) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        } else {
            isAnimating = false;
        }
    }

    type();
}
