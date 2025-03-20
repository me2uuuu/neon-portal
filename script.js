// ✅ NEKO 코인 시스템
let nekoCoins = 100;
let score = 0;

document.getElementById("coinValue").innerText = nekoCoins;
document.getElementById("scoreValue").innerText = score;

// ✅ 카드 풀
const cardPool = [
    { name: "Cyber Warrior", rarity: "Common", power: 10, img: "fire-cat.png" },
    { name: "Neon Assassin", rarity: "Common", power: 12, img: "wind-cat.png" },
    { name: "AI Hacker", rarity: "Rare", power: 20, img: "ice-cat.png" },
    { name: "Quantum Sorcerer", rarity: "Rare", power: 22, img: "dark-neon-cat.png" },
    { name: "Glitch Phantom", rarity: "SSR", power: 35, img: "thunder-cat.png" },
    { name: "Neon Overlord", rarity: "SSR", power: 50, img: "cyber-cat.png" }
];

// ✅ 가챠 기능
function drawGacha() {
    if (nekoCoins < 10) {
        // 알림 UI 생성
        const alertBox = document.createElement("div");
        alertBox.classList.add("alert");
        alertBox.innerText = "❌ NEKO 코인이 부족합니다! 광고를 보거나 게임을 진행하세요.";
        document.body.appendChild(alertBox);
        
        // 3초 후 알림 박스 제거
        setTimeout(() => {
            alertBox.remove();
        }, 3000);
        return;
    }

    nekoCoins -= 10;
    document.getElementById("coinValue").innerText = nekoCoins;

    const roll = Math.random();
    let rarity;
    if (roll < 0.1) {
        rarity = "SSR";
    } else if (roll < 0.3) {
        rarity = "Rare";
    } else {
        rarity = "Common";
    }

    const possibleCards = cardPool.filter(card => card.rarity === rarity);
    const drawnCard = possibleCards[Math.floor(Math.random() * possibleCards.length)];

    document.getElementById("card1").innerHTML = `
        <img src="${drawnCard.img}" alt="${drawnCard.name}">
        <p>${drawnCard.name} (등급: ${drawnCard.rarity}, Power: ${drawnCard.power})</p>
    `;

    score += drawnCard.power;
    document.getElementById("scoreValue").innerText = score;

    if (drawnCard.rarity === "SSR") {
        nekoCoins += 50;
        document.getElementById("coinValue").innerText = nekoCoins;
        alert("🎉 SSR 카드 획득! 보너스 +50 NEKO 코인!");
    }
}

// ✅ 사운드 기능
document.getElementById("sound-btn").addEventListener("click", function() {
    let bgm = document.getElementById("bgm");
    if (bgm.paused) {
        bgm.play();
        this.innerText = "🔊 사운드 OFF";
    } else {
        bgm.pause();
        this.innerText = "🔇 사운드 ON";
    }
});
