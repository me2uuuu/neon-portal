document.addEventListener("DOMContentLoaded", () => {
    let score = 0;
    let nekoCoins = 100;
    let moveSpeed = 2000;
    let minSpeed = 500;
    let moveInterval;

    const cat = document.getElementById("neon-cat");
    const scoreDisplay = document.getElementById("scoreValue");
    const coinDisplay = document.getElementById("coinValue");
    const bgm = document.getElementById("bgm");

    function moveCat() {
        const maxX = window.innerWidth - 150;
        const maxY = window.innerHeight - 150;
        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);
        cat.style.left = newX + "px";
        cat.style.top = newY + "px";
    }

    function clickCat() {
        score += 5;
        nekoCoins += 2;
        scoreDisplay.innerText = score;
        coinDisplay.innerText = nekoCoins;

        if (moveSpeed > minSpeed) {
            moveSpeed -= 200;
            restartMoveInterval();
        }

        moveCat();
    }

    function goToGacha() {
        if (nekoCoins >= 10) {
            nekoCoins -= 10;
            coinDisplay.innerText = nekoCoins;
            window.location.href = "gacha.html";
        } else {
            alert("NEKO 코인이 부족합니다!");
        }
    }

    function restartMoveInterval() {
        clearInterval(moveInterval);
        moveInterval = setInterval(moveCat, moveSpeed);
    }

    moveCat();
    restartMoveInterval();

    cat.addEventListener("click", clickCat);
});
