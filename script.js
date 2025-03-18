document.addEventListener("DOMContentLoaded", function () {
    const cardImages = [
        { img: "fire-cat.png", points: 100, rarity: "SSR" },
        { img: "wind-cat.png", points: 80, rarity: "SR" },
        { img: "ice-cat.png", points: 60, rarity: "R" },
        { img: "dark-neon-cat.png", points: 50, rarity: "R" },
        { img: "thunder-cat.png", points: 70, rarity: "SR" },
        { img: "cyber-cat.png", points: 90, rarity: "SSR" }
    ];

    let nekoCoins = parseInt(localStorage.getItem("nekoCoins")) || 100;
    const coinDisplay = document.getElementById("neko-coin");
    const soundEffect = document.getElementById("click-sound");

    coinDisplay.innerHTML = `🪙 NEKO 코인: ${nekoCoins}`;

    document.querySelectorAll(".card").forEach(card => {
        card.innerHTML = "✨ Gacha Card ✨"; // 초기 텍스트 설정

        card.addEventListener("click", function () {
            if (nekoCoins < 10) {
                alert("❌ NEKO 코인이 부족합니다!");
                return;
            }

            // 코인 차감 및 저장
            nekoCoins -= 10;
            coinDisplay.innerHTML = `🪙 NEKO 코인: ${nekoCoins}`;
            localStorage.setItem("nekoCoins", nekoCoins);

            // 랜덤 카드 뽑기
            const randomIndex = Math.floor(Math.random() * cardImages.length);
            const selectedCard = cardImages[randomIndex];

            this.innerHTML = `<img src="${selectedCard.img}" alt="Gacha Card"><p>${selectedCard.rarity}</p>`;
            this.style.color = selectedCard.rarity === "SSR" ? "#ff00ff" : selectedCard.rarity === "SR" ? "#00ffcc" : "#ffffff";

            // 카드 애니메이션 (클릭 효과)
            this.style.transform = "scale(1.1)";
            setTimeout(() => this.style.transform = "scale(1)", 300);

            // 효과음 재생
            if (soundEffect) {
                soundEffect.play();
            }
        });
    });

    // 배경음악 제어
    const bgm = document.getElementById("bgm");
    const soundBtn = document.getElementById("sound-btn");

    if (soundBtn && bgm) {
        soundBtn.addEventListener("click", function () {
            if (bgm.paused) {
                bgm.play();
                soundBtn.innerText = "🔊 사운드 OFF";
            } else {
                bgm.pause();
                soundBtn.innerText = "🔇 사운드 ON";
            }
        });
    }
});
