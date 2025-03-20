let score = 0;
let nekoCoins = 100;
const cat = document.getElementById("neon-cat");
const scoreDisplay = document.getElementById("scoreValue");
const coinDisplay = document.getElementById("coinValue");

// 네온캣 이동 함수
function moveCat() {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 150;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    cat.style.left = `${newX}px`;
    cat.style.top = `${newY}px`;
}

// 클릭 시 점수 증가
function clickCat() {
    score += 5;
    nekoCoins += 2;
    scoreDisplay.innerText = score;
    coinDisplay.innerText = nekoCoins;
    moveCat();
}

// 가챠 이동
function goToGacha() {
    if (nekoCoins >= 10) {
        nekoCoins -= 10;
        coinDisplay.innerText = nekoCoins;
        window.location.href = "gacha.html";
    } else {
        alert("NEKO 코인이 부족합니다!");
    }
}

// 초기 실행
moveCat();
setInterval(moveCat, 2000);
