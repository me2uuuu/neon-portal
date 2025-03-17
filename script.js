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

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * cardImages.length);
        const selectedCard = cardImages[randomIndex];

        this.innerHTML = `<img src="${selectedCard.img}" alt="Gacha Card"><p>${selectedCard.rarity}</p>`;
        this.style.color = selectedCard.rarity === "SSR" ? "#ff00ff" : selectedCard.rarity === "SR" ? "#00ffcc" : "#ffffff";

        // 배경 효과 트리거
        this.classList.add("clicked");
        setTimeout(() => this.classList.remove("clicked"), 500); // 애니메이션 시간과 맞춤

        score += selectedCard.points;
        scoreDisplay.innerHTML = `점수: ${score}`;
    });
});

const bgm = document.getElementById("bgm");
const soundBtn = document.getElementById("sound-btn");

soundBtn.addEventListener("click", function() {
    bgm.play();
    soundBtn.style.display = "none";
});
