const cardImages = [
    { img: "./fire-cat.png", points: 100, rarity: "SSR" },
    { img: "./wind-cat.png", points: 80, rarity: "SR" },
    { img: "./ice-cat.png", points: 60, rarity: "R" },
    { img: "./dark-neon-cat.png", points: 50, rarity: "R" },
    { img: "./thunder-cat.png", points: 70, rarity: "SR" },
    { img: "./cyber-cat.png", points: 90, rarity: "SSR" }
];

let score = 0;
const scoreDisplay = document.getElementById("score");

document.querySelectorAll(".card").forEach((card, index) => {
    card.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * cardImages.length);
        const selectedCard = cardImages[randomIndex];

        this.innerHTML = `<img src="${selectedCard.img}" alt="Gacha Card"><p>${selectedCard.rarity}</p>`;
        this.style.color = selectedCard.rarity === "SSR" ? "#ff00ff" : selectedCard.rarity === "SR" ? "#00ffcc" : "#ffffff";

        // 클릭 효과
        this.classList.add("clicked");
        setTimeout(() => this.classList.remove("clicked"), 500);

        // 위치 고정
        const containerWidth = document.querySelector('.card-container').offsetWidth;
        const cardWidth = this.offsetWidth;
        const gap = 20; // .card-container의 gap 값
        const totalCards = 3;
        const startX = (containerWidth - (cardWidth * totalCards + gap * (totalCards - 1))) / 2;
        this.style.left = `${startX + index * (cardWidth + gap)}px`;

        score += selectedCard.points;
        scoreDisplay.innerHTML = `점수: ${score}`;
    });

    // 초기 위치 설정
    const containerWidth = document.querySelector('.card-container').offsetWidth;
    const cardWidth = card.offsetWidth;
    const gap = 20;
    const totalCards = 3;
    const startX = (containerWidth - (cardWidth * totalCards + gap * (totalCards - 1))) / 2;
    card.style.left = `${startX + index * (cardWidth + gap)}px`;
});

const bgm = document.getElementById("bgm");
const soundBtn = document.getElementById("sound-btn");

soundBtn.addEventListener("click", function() {
    bgm.play();
    soundBtn.style.display = "none";
});
