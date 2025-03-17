const cardImages = [
    { img: "./fire-cat.png", points: 100 },
    { img: "./wind-cat.png", points: 80 },
    { img: "./ice-cat.png", points: 60 },
    { img: "./dark-neon-cat.png", points: 50 },
    { img: "./thunder-cat.png", points: 70 },
    { img: "./cyber-cat.png", points: 90 }
];

let score = 0;
const scoreDisplay = document.getElementById("score");

// Card click event
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * cardImages.length);
        const selectedCard = cardImages[randomIndex];

        this.innerHTML = `<img src="${selectedCard.img}" alt="Gacha Card">`;

        // Update score
        score += selectedCard.points;
        scoreDisplay.innerHTML = `점수: ${score}`;
    });
});

// Sound button functionality
const bgm = document.getElementById("bgm");
const soundBtn = document.getElementById("sound-btn");

soundBtn.addEventListener("click", function() {
    bgm.play();
    soundBtn.style.display = "none"; // 버튼 숨기기
});
