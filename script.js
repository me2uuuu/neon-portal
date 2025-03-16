const { ethers } = window;

const NEKO_ADDRESS = "0x...";  // 배포 후 실제 주소로 교체
const GACHA_CONTRACT_ADDRESS = "0x...";

let userAddress;
let nekoTokenContract;
let gachaContract;

async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.enable();
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            userAddress = await signer.getAddress();
            document.getElementById("connect-wallet").innerText = "✅ 연결됨";
            await updateNekoBalance();
        } catch (error) {
            alert("지갑 연결 오류");
        }
    } else {
        alert("MetaMask를 설치해주세요!");
    }
}

async function updateNekoBalance() {
    const balance = await nekoTokenContract.balanceOf(userAddress);
    document.getElementById("nekoCoins").innerText = `💰 NEKO 코인: ${ethers.formatUnits(balance, 18)}`;
}

document.getElementById("connect-wallet").addEventListener("click", connectWallet);
document.getElementById("sound-btn").addEventListener("click", function() {
    document.getElementById("bgm").play();
    this.style.display = "none";
});
 
