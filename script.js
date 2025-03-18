const cardImages = [
    { img: "fire-cat.png", points: 100, rarity: "SSR" },
    { img: "wind-cat.png", points: 80, rarity: "SR" },
    { img: "ice-cat.png", points: 60, rarity: "R" },
    { img: "dark-neon-cat.png", points: 50, rarity: "R" },
    { img: "thunder-cat.png", points: 70, rarity: "SR" },
    { img: "cyber-cat.png", points: 90, rarity: "SSR" }
];

let nekoCoins = parseInt(localStorage.getItem("nekoCoins")) || 100;
document.getElementById("neko-coins").innerHTML = `🪙 NEKO 코인: ${nekoCoins}`;

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function() {
        if (nekoCoins < 10) {
            alert("❌ NEKO 코인이 부족합니다!");
            return;
        }

        nekoCoins -= 10;
        document.getElementById("neko-coins").innerHTML = `🪙 NEKO 코인: ${nekoCoins}`;
        localStorage.setItem("nekoCoins", nekoCoins);

        const randomIndex = Math.floor(Math.random() * cardImages.length);
        const selectedCard = cardImages[randomIndex];

        this.innerHTML = `<img src="${selectedCard.img}" alt="Gacha Card"><p>${selectedCard.rarity}</p>`;
        this.style.color = selectedCard.rarity === "SSR" ? "#ff00ff" : selectedCard.rarity === "SR" ? "#00ffcc" : "#ffffff";

        // 카드 크기 조정 (원래 크기로 돌아가도록)
        this.style.transform = "scale(1.1)";
        setTimeout(() => this.style.transform = "scale(1)", 300);

        // 효과음 재생
        document.getElementById("click-sound").play();
    });
});

// 사운드 버튼 기능
const bgm = document.getElementById("bgm");
const soundBtn = document.getElementById("sound-btn");

soundBtn.addEventListener("click", function() {
    bgm.play();
    soundBtn.style.display = "none"; // 버튼 숨기기
});
