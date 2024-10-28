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
        const hoveredCard = event.currentTarget as HTMLDivElement;
        cards.forEach((card) => {
            if (card instanceof HTMLDivElement) {
                card.style.transform = "rotate(0deg) scale(1)";
                card.style.zIndex = "1";
                card.style.backgroundColor = "black";
            }
        });

        hoveredCard.style.transform = getTransformStyle(hoveredCard);
        hoveredCard.style.zIndex = "1000";
        hoveredCard.style.backgroundColor = "aqua";

        const index = Array.from(cards).indexOf(hoveredCard);
        for (let i = index + 1; i < cards.length; i++) {
            const card = cards[i] as HTMLDivElement;
            card.style.transform = getTransformStyle(card, i - index);
        }
    }

    function handleMouseOut(event: MouseEvent) {
        const card = event.currentTarget as HTMLDivElement;
        const index = Array.from(cards).indexOf(card);
        setNormalStyle(card, index);
        cards.forEach((c, i) => setNormalStyle(c, i));
    }

    function setNormalStyle(card: HTMLDivElement, index: number) {
        card.style.zIndex = "1";

        switch (index) {
            case 0:
                card.style.transform = "rotate(-10deg) scale(1)";
                card.style.backgroundColor = "black";
                break;
            case 1:
                card.style.transform = "rotate(0deg) scale(1)";
                card.style.backgroundColor = "black";
                break;
            case 2:
                card.style.transform = "rotate(10deg) scale(1)";
                card.style.backgroundColor = "black";
                break;
            case 3:
                card.style.transform = "rotate(20deg) scale(1)";
                card.style.backgroundColor = "black";
                break;
            default:
                break;
        }
    }

    function getTransformStyle(
        card: HTMLDivElement,
        indexOffset: number = 0
    ): string {
        const transforms = [
            { rotate: "0deg", scale: "1.25", translateX: "0px" },
            { rotate: "0deg", scale: "1.25", translateX: "0px" },
            { rotate: "0deg", scale: "1.25", translateX: "0px" },
            { rotate: "0deg", scale: "1.25", translateX: "0px" },
        ];
        const index = Array.from(cards).indexOf(card);
        const transform = transforms[index + indexOffset] || transforms[0];
        return `rotate(${transform.rotate}) scale(${transform.scale}) translateX(${transform.translateX})`;
    }
}
