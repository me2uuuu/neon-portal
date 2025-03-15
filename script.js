// 배경 음악과 버튼
const bgm = document.getElementById('bgm');
const soundBtn = document.getElementById('sound-btn');
let isSoundOn = false;

// 사운드 ON/OFF 토글 기능
soundBtn.addEventListener('click', () => {
    if (isSoundOn) {
        bgm.pause();
        soundBtn.textContent = "🔊 사운드 ON";
    } else {
        bgm.play();
        soundBtn.textContent = "🔇 사운드 OFF";
    }
    isSoundOn = !isSoundOn;
});

// 카드 클릭 시 점수 증가
let score = 0;
const cards = document.querySelectorAll('.card');
const scoreDisplay = document.getElementById('score');

cards.forEach(card => {
    card.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `점수: ${score}`;
    });
});
