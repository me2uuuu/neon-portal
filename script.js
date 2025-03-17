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

// 🃏 가챠 카드 뽑기
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * cardImages.length);
        const selectedCard = cardImages[randomIndex];

        this.innerHTML = `<img src="${selectedCard.img}" alt="Gacha Card">`;
        score += selectedCard.points;
        scoreDisplay.innerText = `점수: ${score}`;
    });
});

// 🎵 사운드 컨트롤
const bgm = document.getElementById("bgm");
const soundBtn = document.getElementById("sound-btn");

soundBtn.addEventListener("click", function() {
    bgm.play();
    soundBtn.style.display = "none";
});

// 🐱 고양이 클릭 이벤트
const cat = document.getElementById("neon-cat");

function moveCat() {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 150;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    cat.style.left = newX + "px";
    cat.style.top = newY + "px";

    const rotate = Math.random() * 360;
    const scale = 0.7 + Math.random() * 0.6;
    cat.style.transform = `rotate(${rotate}deg) scale(${scale})`;
}

function clickCat() {
    score++;
    scoreDisplay.innerHTML = "점수: " + score;
    moveCat();
}

moveCat();
setInterval(moveCat, 2000);

