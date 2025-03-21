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

document.getElementById("gachaButton").addEventListener("click", () => {
  if (nekoCoins < 10) {
    alert("❌ NEKO 코인이 부족합니다!");
    return;
  }

  nekoCoins -= 10;
  document.getElementById("coinValue").innerText = nekoCoins;

  for (let i = 1; i <= 3; i++) {
    const roll = Math.random();
    let rarity = roll < 0.1 ? "SSR" : roll < 0.3 ? "Rare" : "Common";
    const pool = cardPool.filter(c => c.rarity === rarity);
    const card = pool[Math.floor(Math.random() * pool.length)];

    document.getElementById(`card${i}`).innerHTML = `
      <img src="${card.img}" alt="${card.name}" />
      <p>${card.name} (${card.rarity}, Power: ${card.power})</p>
    `;

    score += card.power;
  }

  document.getElementById("scoreValue").innerText = score;
});

document.getElementById("sound-btn").addEventListener("click", function() {
  const bgm = document.getElementById("bgm");
  if (bgm.paused) {
    bgm.play();
    this.innerText = "🔊 사운드 OFF";
  } else {
    bgm.pause();
    this.innerText = "🔇 사운드 ON";
  }
});
