const cardImages = [
    { img: "audio/fire-cat.png", points: 100 },
    { img: "audio/wind-cat.png", points: 80 },
    { img: "audio/ice-cat.png", points: 60 },
    { img: "audio/dark-neon-cat.png", points: 50 },
    { img: "audio/thunder-cat.png", points: 70 },
    { img: "audio/cyber-cat.png", points: 90 }
];

let score = 0;
const cards = document.querySelectorAll(".card");

// 카드 클릭 이벤트
cards.forEach(card => {
    card.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * cardImages.length);
        const selectedCard = cardImages[randomIndex];

        this.innerHTML = `<img src="${selectedCard.img}" alt="Gacha Card">`;

        // 점수 업데이트
        score += selectedCard.points;
        document.getElementById("score").innerText = `점수: ${score}`;
    });
});

// 사운드 ON 버튼 기능 추가
const bgm = document.getElementById("bgm");
const soundBtn = document.getElementById("sound-btn");

soundBtn.addEventListener("click", function() {
    bgm.play();
    soundBtn.style.display = "none"; // 버튼 숨기기
});
