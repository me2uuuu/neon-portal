const cardImages = [
    { img: "img/fire-cat.png", points: 100, rarity: "SSR" },
    { img: "img/wind-cat.png", points: 80, rarity: "SR" },
    { img: "img/ice-cat.png", points: 60, rarity: "R" },
    { img: "img/dark-neon-cat.png", points: 50, rarity: "R" },
    { img: "img/thunder-cat.png", points: 70, rarity: "SR" },
    { img: "img/cyber-cat.png", points: 90, rarity: "SSR" }
];

let neonCoins = 100;
let score = 0;
const scoreDisplay = document.getElementById("score");
const neonCoinDisplay = document.getElementById("neonCoins");
const gachaBtn = document.getElementById("gacha-btn");

// 사운드
const bgm = document.getElementById("bgm");
const ssrSound = document.getElementById("ssrSound");
const soundBtn = document.getElementById("sound-btn");

soundBtn.addEventListener("click", function() {
    bgm.play();
    soundBtn.style.display = "none";
});

// 가챠 시스템
gachaBtn.addEventListener("click", function() {
    if (neonCoins < 10) {
        alert("❌ 네온 코인이 부족합니다!");
        return;
    }

    neonCoins -= 10;
    neonCoinDisplay.textContent = neonCoins;

    document.querySelectorAll(".card").forEach((card, index) => {
        const randomIndex = Math.floor(Math.random() * cardImages.length);
        const selectedCard = cardImages[randomIndex];

        // 카드 애니메이션
        card.style.transform = "rotateY(360deg)";
        setTimeout(() => {
            card.innerHTML = `<img src="${selectedCard.img}" alt="Gacha Card"><p>${selectedCard.rarity}</p>`;
            card.style.color = selectedCard.rarity === "SSR" ? "#ff00ff" : selectedCard.rarity === "SR" ? "#00ffcc" : "#ffffff";
            card.style.transform = "rotateY(0deg)";
        }, 500);

        // SSR 연출
        if (selectedCard.rarity === "SSR") {
            document.body.classList.add("ssr-effect");
            ssrSound.play();
            setTimeout(() => document.body.classList.remove("ssr-effect"), 800);
        }

        score += selectedCard.points;
        scoreDisplay.textContent = `점수: ${score}`;
    });

    // 랜덤 보너스 이벤트
    if (Math.random() < 0.2) {
        let bonus = Math.random() < 0.5 ? 10 : 0;
        neonCoins += bonus;
        neonCoinDisplay.textContent = neonCoins;
        if (bonus > 0) alert("🎉 랜덤 보너스! 10 네온 코인 획득!");
    }
});
