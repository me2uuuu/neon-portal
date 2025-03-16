const cardImages = [
    { img: "images/fire-cat.png", points: 100 },
    { img: "images/wind-cat.png", points: 80 },
    { img: "images/ice-cat.png", points: 60 },
    { img: "images/dark-neon-cat.png", points: 50 },
    { img: "images/thunder-cat.png", points: 70 },
    { img: "images/cyber-cat.png", points: 90 }
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
