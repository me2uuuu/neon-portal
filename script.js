// 네온 포탈 P2E 가챠 게임 PoC (NEKO 코인 버전)

const cardPool = [
    { name: "Cyber Warrior", rarity: "Common", power: 10 },
    { name: "Neon Assassin", rarity: "Common", power: 12 },
    { name: "AI Hacker", rarity: "Rare", power: 20 },
    { name: "Quantum Sorcerer", rarity: "Rare", power: 22 },
    { name: "Glitch Phantom", rarity: "Legendary", power: 35 },
    { name: "Neon Overlord", rarity: "Legendary", power: 40 }
];

const rarityChances = {
    "Common": 0.6,
    "Rare": 0.3,
    "Legendary": 0.1
};

let nekoCoins = 100;

// 가챠 시스템 (랜덤 카드 뽑기)
function drawCard() {
    if (nekoCoins < 10) {
        alert("❌ NEKO 코인이 부족합니다! 더 모으세요.");
        return;
    }
    nekoCoins -= 10;
    
    const roll = Math.random();
    let rarity;
    if (roll < rarityChances["Legendary"]) {
        rarity = "Legendary";
    } else if (roll < rarityChances["Legendary"] + rarityChances["Rare"]) {
        rarity = "Rare";
    } else {
        rarity = "Common";
    }
    
    const possibleCards = cardPool.filter(card => card.rarity === rarity);
    const drawnCard = possibleCards[Math.floor(Math.random() * possibleCards.length)];

    // UI 업데이트
    document.getElementById("nekoCoins").textContent = `💰 NEKO 코인: ${nekoCoins}`;
    document.getElementById("cardDisplay").innerHTML = `<div class="card ${drawnCard.rarity.toLowerCase()}">
        🎴 ${drawnCard.name} (등급: ${drawnCard.rarity}, Power: ${drawnCard.power})
    </div>`;

    earnNekoCoins(drawnCard.power);
}

// NEKO 코인 획득 시스템
function earnNekoCoins(amount) {
    nekoCoins += amount;
    document.getElementById("nekoCoins").textContent = `💰 NEKO 코인: ${nekoCoins}`;
}
