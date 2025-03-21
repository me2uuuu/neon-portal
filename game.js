let score = 0;
let nekoCoins = 100;
let moveSpeed = 2000;
let minSpeed = 500;

const cat = document.getElementById("neon-cat");
const scoreDisplay = document.getElementById("scoreValue");
const coinDisplay = document.getElementById("coinValue");
const bgm = document.getElementById("bgm");

const catQuotes = [
  "네온 속도를 느껴봐!", 
  "더 빠르게! 더 빠르게!", 
  "잡아봐라! 😆",
  "난 네온 세계의 최강자다!", 
  "점수 더 쌓아봐! 😼"
];

function moveCat() {
  const maxX = window.innerWidth - 150;
  const maxY = window.innerHeight - 150;
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);
  cat.style.left = newX + "px";
  cat.style.top = newY + "px";

  const rotate = Math.random() * 360;
  const scale = Math.max(0.5, moveSpeed / 2000);
  cat.style.transform = `rotate(${rotate}deg) scale(${scale})`;
}

function clickCat() {
  score += 5;
  nekoCoins += 2;
  scoreDisplay.innerText = score;
  coinDisplay.innerText = nekoCoins;

  const randomQuote = catQuotes[Math.floor(Math.random() * catQuotes.length)];
  alert(randomQuote);

  if (moveSpeed > minSpeed) moveSpeed -= 200;

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

moveCat();
setInterval(moveCat, moveSpeed);
