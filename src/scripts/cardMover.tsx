export function initializeCardMovement() {
    const cards = document.querySelectorAll<HTMLDivElement>(
        ".proba1, .proba2, .proba3, .proba4"
    );

    cards.forEach((card, index) => {
        setNormalStyle(card, index);
        card.addEventListener("mouseover", handleMouseOver);
        card.addEventListener("mouseout", handleMouseOut);
    });

    function handleMouseOver(event: MouseEvent) {
        const focusedCard = event.currentTarget as HTMLDivElement;
        cards.forEach((card) => {
            if (card === focusedCard) {
                card.style.transform = getTransformStyle(card);
                card.style.zIndex = "1000";
                card.style.backgroundColor = "black";
            } else {
                card.style.transform = "scale(0.9) translateY(20px)";
                card.style.zIndex = "1";
                card.style.backgroundColor = "black";
            }
        });
    }

    function handleMouseOut(event: MouseEvent) {
        const focusedCard = event.currentTarget as HTMLDivElement;
        const index = Array.from(cards).indexOf(focusedCard);
        setNormalStyle(focusedCard, index);
        cards.forEach((c, i) => setNormalStyle(c, i));
    }

    function setNormalStyle(card: HTMLDivElement, index: number) {
        card.style.zIndex = "1";
        switch (index) {
            case 0:
                card.style.transform =
                    "rotate(-10deg) scale(1) translateX(150px) translateY(0)";
                card.style.backgroundColor = "black";
                break;
            case 1:
                card.style.transform =
                    "rotate(-5deg) scale(1) translateX(0px) translateY(-60px)";
                card.style.backgroundColor = "black";
                break;
            case 2:
                card.style.transform =
                    "rotate(5deg) scale(1) translateX(-50px) translateY(-60px)";
                card.style.backgroundColor = "black";
                break;
            case 3:
                card.style.transform =
                    "rotate(10deg) scale(1) translateX(-150px) translateY(10px)";
                card.style.backgroundColor = "black";
                break;
            default:
                break;
        }
    }

    function getTransformStyle(card: HTMLDivElement): string {
        const transforms = [
            { rotate: "0deg", scale: "1.15", translateX: "0px" },
            { rotate: "0deg", scale: "1.15", translateX: "0px" },
            { rotate: "0deg", scale: "1.15", translateX: "0px" },
            { rotate: "0deg", scale: "1.15", translateX: "0px" },
        ];
        const index = Array.from(cards).indexOf(card);
        const transform = transforms[index];
        return `rotate(${transform.rotate}) scale(${transform.scale}) translateX(${transform.translateX})`;
    }
}
