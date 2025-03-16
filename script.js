const cardPool = [
    { name: "Cyber Warrior", rarity: "Common", power: 10, img: "https://me2uuuu.github.io/neon-portal/cyber-cat.png" },
    { name: "Neon Assassin", rarity: "Common", power: 12, img: "https://me2uuuu.github.io/neon-portal/fire-cat.png" },
    { name: "AI Hacker", rarity: "Rare", power: 20, img: "https://me2uuuu.github.io/neon-portal/thunder-cat.png" },
    { name: "Quantum Sorcerer", rarity: "Rare", power: 22, img: "https://me2uuuu.github.io/neon-portal/ice-cat.png" },
    { name: "Glitch Phantom", rarity: "Legendary", power: 35, img: "https://me2uuuu.github.io/neon-portal/dark-neon-cat.png" },
    { name: "Neon Overlord", rarity: "Legendary", power: 40, img: "https://me2uuuu.github.io/neon-portal/wind-cat.png" }
];

const rarityChances = {
    "Common": 0.6,
    "Rare": 0.3,
    "Legendary": 0.1
};

let nekoCoins = 100; 

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

    document.getElementById("cardDisplay").innerHTML = 
        `<img src="${drawnCard.img}" alt="${drawnCard.name}" style="width: 150px; height: 200px;"> 
        <p>${drawnCard.name} (등급: ${drawnCard.rarity}, Power: ${drawnCard.power})</p>`;

    nekoCoins += drawnCard.power;
    document.getElementById("nekoCoins").innerText = `💰 NEKO 코인: ${nekoCoins}`;
}

// 사운드 기능
const bgm = document.getElementById("bgm");
const soundBtn = document.getElementById("sound-btn");

soundBtn.addEventListener("click", function() {
    bgm.play();
    soundBtn.style.display = "none";
});
