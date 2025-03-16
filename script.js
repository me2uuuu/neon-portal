const cardImages = [
    { img: "https://me2uuuu.github.io/neon-portal/fire-cat.png", points: 100 },
    { img: "https://me2uuuu.github.io/neon-portal/wind-cat.png", points: 80 },
    { img: "https://me2uuuu.github.io/neon-portal/ice-cat.png", points: 60 },
    { img: "https://me2uuuu.github.io/neon-portal/dark-neon-cat.png", points: 50 },
    { img: "https://me2uuuu.github.io/neon-portal/thunder-cat.png", points: 70 },
    { img: "https://me2uuuu.github.io/neon-portal/cyber-cat.png", points: 90 }
];

let score = 0;
const scoreDisplay = document.getElementById("score");

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * cardImages.length);
        const selectedCard = cardImages[randomIndex];

        this.innerHTML = `<img src="${selectedCard.img}" alt="Gacha Card">`;
        score += selectedCard.points;
        scoreDisplay.innerText = `점수: ${score}`;
    });
});

const bgm = document.getElementById("bgm");
const soundBtn = document.getElementById("sound-btn");

soundBtn.addEventListener("click", function() {
    bgm.play();
    soundBtn.style.display = "none";
});
