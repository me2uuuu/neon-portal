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

        // 카드 표시
        this.innerHTML = `<img src="${selectedCard.img}" alt="Gacha Card"><p>${selectedCard.rarity}</p>`;
        this.style.color = selectedCard.rarity === "SSR" ? "#ff00ff" : selectedCard.rarity === "SR" ? "#00ffcc" : "#ffffff";

        // 애니메이션 효과
        this.classList.add("clicked");
        setTimeout(() => this.classList.remove("clicked"), 500);

        // 점수 업데이트
        score += selectedCard.points;
        scoreDisplay.innerHTML = `점수: ${score}`;
    });
});

// 배경 음악 설정
const bgm = document.getElementById("bgm");
const soundBtn = document.getElementById("sound-btn");

soundBtn.addEventListener("click", function() {
    bgm.play();
    soundBtn.style.display = "none";
});
