// NEKO 코인 시스템
let nekoCoins = 100;
let score = 0;

document.getElementById("coinValue").innerText = nekoCoins;
document.getElementById("scoreValue").innerText = score;

const cardPool = [
    { name: "Cyber Warrior", rarity: "Common", power: 10, img: "fire-cat.png" },
    { name: "Neon Assassin", rarity: "Common", power: 12, img: "wind-cat.png" },
    { name: "AI Hacker", rarity: "Rare", power: 20, img: "ice-cat.png" },
    { name: "Quantum Sorcerer", rarity: "Rare", power: 22, img: "dark-neon-cat.png" },
    { name: "Glitch Phantom", rarity: "SSR", power: 35, img: "thunder-cat.png" },
    { name: "Neon Overlord", rarity: "SSR", power: 50, img: "cyber-cat.png" }
];

// 게임 시작 기능 추가
function startGame() {
    document.getElementById("gameArea").innerHTML = `
        <p>🕹 게임 시작! 목표 점수를 획득하세요!</p>
        <button onclick="playGame()">🔥 공격하기</button>
    `;
}

// 게임 플레이 기능 추가
function playGame() {
    let attackPower = Math.floor(Math.random() * 20) + 1;
    score += attackPower;
    document.getElementById("scoreValue").innerText = score;

    alert(`🔥 공격 성공! +${attackPower} 점 획득!`);

    // 목표 점수 도달 시 보상
    if (score >= 100) {
        nekoCoins += 30;
        document.getElementById("coinValue").innerText = nekoCoins;
        alert("🎉 목표 달성! 보너스 +30 NEKO 코인 지급!");
    }
}

// 카드 뽑기 기능
function drawCard() {
    if (nekoCoins < 10) {
        alert("❌ NEKO 코인이 부족합니다! 광고를 보거나 게임을 진행하세요.");
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

    document.getElementById("cardDisplay").innerHTML = `
        <img src="${drawnCard.img}" alt="${drawnCard.name}" style="width: 120px; height: 160px;">
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

// 광고 보기 기능
function watchAd() {
    alert("📺 광고를 봤습니다! +20 NEKO 코인 지급!");
    nekoCoins += 20;
    document.getElementById("coinValue").innerText = nekoCoins;
}

// 난이도 설정 (게임 시작 연결)
function setDifficulty(level) {
    alert(`${level} 난이도로 설정됨`);
    startGame();  // 난이도를 설정하면 게임이 시작됨.
}
