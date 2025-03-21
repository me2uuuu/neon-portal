let nekoCoins = 100;
let score = 0;

const cardPool = [
  { name: "Cyber Warrior", rarity: "Common", power: 10, img: "fire-cat.png" },
  { name: "Neon Assassin", rarity: "Common", power: 12, img: "wind-cat.png" },
  { name: "AI Hacker", rarity: "Rare", power: 20, img: "ice-cat.png" },
  { name: "Quantum Sorcerer", rarity: "Rare", power: 22, img: "dark-neon-cat.png" },
  { name: "Glitch Phantom", rarity: "SSR", power: 35, img: "thunder-cat.png" },
  { name: "Neon Overlord", rarity: "SSR", power: 50, img: "cyber-cat.png" }
];

document.getElementById("coinValue").innerText = nekoCoins;
document.getElementById("scoreValue").innerText = score;

document.getElementById("gachaButton").addEventListener("click", drawGacha);
document.getElementById("sound-btn").addEventListener("click", toggleSound);

function drawGacha() {
  if (nekoCoins < 10) {
    alert("❌ NEKO 코인이 부족합니다!");
    return;
  }

  nekoCoins -= 10;

  const roll = Math.random();
  let rarity = "Common";
  if (roll < 0.1) rarity = "SSR";
  else if (roll < 0.3) rarity = "Rare";

  const candidates = cardPool.filter(c => c.rarity === rarity);
  const card = candidates[Math.floor(Math.random() * candidates.length)];

  document.getElementById("card1").innerHTML = `<img src="${card.img}" alt="${card.name}"><p>${card.name} (${card.rarity}, Power: ${card.power})</p>`;
  score += card.power;

  document.getElementById("coinValue").innerText = nekoCoins;
  document.getElementById("scoreValue").innerText = score;

  if (card.rarity === "SSR") {
    nekoCoins += 50;
    alert("🎉 SSR 카드 획득! 보너스 +50 NEKO 코인!");
    document.getElementById("coinValue").innerText = nekoCoins;
  }

  document.getElementById("click-sound").play();
}

function toggleSound() {
  const bgm = document.getElementById("bgm");
  const btn = document.getElementById("sound-btn");
  if (bgm.paused) {
    bgm.play();
    btn.innerText = "🔊 사운드 OFF";
  } else {
    bgm.pause();
    btn.innerText = "🔇 사운드 ON";
  }
}
