const cardImages = [
    { img: "./fire-cat.png", points: 100, rarity: "Legendary" },
    { img: "./wind-cat.png", points: 80, rarity: "Rare" },
    { img: "./ice-cat.png", points: 60, rarity: "Rare" },
    { img: "./dark-neon-cat.png", points: 50, rarity: "Common" },
    { img: "./thunder-cat.png", points: 70, rarity: "Rare" },
    { img: "./cyber-cat.png", points: 90, rarity: "Epic" }
];

let score = 0;
let nekoCoins = 100; // 기본 100 NEKO 시작

const scoreDisplay = document.getElementById("score");
const nekoDisplay = document.getElementById("nekoCoins");
const gachaButton = document.getElementById("gacha-btn");

// 카드 뽑기 이벤트 (애니메이션 추가)
gachaButton.addEventListener("click", function() {
    if (nekoCoins < 10) {
        alert("❌ NEKO 코인이 부족합니다!");
        return;
    }

    nekoCoins -= 10; // 코인 차감
    nekoDisplay.innerText = `💰 NEKO 코인: ${nekoCoins}`;

    const randomIndex = Math.floor(Math.random() * cardImages.length);
    const selectedCard = cardImages[randomIndex];

    const cardElement = document.getElementById("card-result");
    cardElement.innerHTML = `<img src="${selectedCard.img}" alt="Gacha Card">`;
    
    // 등급별 효과 추가
    cardElement.classList.remove("common", "rare", "epic", "legendary");
    cardElement.classList.add(selectedCard.rarity.toLowerCase());

    // 애니메이션 효과 (반짝이게)
    cardElement.style.animation = "glow 0.8s infinite alternate";

    // 점수 증가
    score += selectedCard.points;
    scoreDisplay.innerText = `점수: ${score}`;
});

// 배경음악 ON/OFF 기능 추가 (localStorage 적용)
const bgm = document.getElementById("bgm");
const soundBtn = document.getElementById("sound-btn");

// 기존 설정 기억하기 (localStorage 활용)
if (localStorage.getItem("bgmStatus") === "on") {
    bgm.play();
    soundBtn.innerText = "🔇 사운드 OFF";
}

soundBtn.addEventListener("click", function() {
    if (bgm.paused) {
        bgm.play();
        soundBtn.innerText = "🔇 사운드 OFF";
        localStorage.setItem("bgmStatus", "on");
    } else {
        bgm.pause();
        soundBtn.innerText = "🔊 사운드 ON";
        localStorage.setItem("bgmStatus", "off");
    }
});
