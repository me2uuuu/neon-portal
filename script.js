const { ethers } = window;

const NEKO_ADDRESS = "0x..."; // 배포 후 주소 변경
const NEKO_ABI = [...]; // ERC-20 ABI 추가

let userAddress;
let nekoTokenContract;

async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.enable();
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            userAddress = await signer.getAddress();
            nekoTokenContract = new ethers.Contract(NEKO_ADDRESS, NEKO_ABI, signer);
            document.getElementById("connectWallet").style.display = "none";
            await updateNekoBalance();
        } catch (error) {
            console.error(error);
            alert("지갑 연결 오류");
        }
    } else {
        alert("MetaMask 설치 필요");
    }
}

async function updateNekoBalance() {
    const balance = await nekoTokenContract.balanceOf(userAddress);
    const formattedBalance = ethers.formatUnits(balance, 18);
    document.getElementById("nekoBalance").textContent = `💰 NEKO 코인: ${formattedBalance}`;
}

let score = 0;
const cat = document.getElementById("neon-cat");
const scoreDisplay = document.getElementById("score");

function moveCat() {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 150;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    cat.style.left = newX + "px";
    cat.style.top = newY + "px";
    cat.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.7 + Math.random() * 0.6})`;
}

function clickCat() {
    score++;
    scoreDisplay.innerHTML = `점수: ${score}`;
    moveCat();
}

const bgm = document.getElementById("bgm");
const soundBtn = document.getElementById("sound-btn");

soundBtn.addEventListener("click", function() {
    bgm.play();
    soundBtn.style.display = "none";
});

moveCat();
setInterval(moveCat, 2000);

window.onload = function() {
    if (window.ethereum && window.ethereum.isConnected()) {
        connectWallet();
    }
};
