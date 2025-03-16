const { ethers } = window;

// 스마트 컨트랙트 정보 (테스트넷 배포 후 주소 변경 필요)
const NEKO_ABI = [...]; 
const GACHA_CONTRACT_ABI = [...];

const NEKO_ADDRESS = "0x...";
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
            nekoTokenContract = new ethers.Contract(NEKO_ADDRESS, NEKO_ABI, signer);
            gachaContract = new ethers.Contract(GACHA_CONTRACT_ADDRESS, GACHA_CONTRACT_ABI, signer);
            document.getElementById("connectButton").style.display = "none";
            document.getElementById("drawButton").disabled = false;
            await updateNekoBalance();
        } catch (error) {
            console.error(error);
            alert("지갑 연결 오류");
        }
    } else {
        alert("MetaMask를 설치하세요!");
    }
}

async function updateNekoBalance() {
    const balance = await nekoTokenContract.balanceOf(userAddress);
    document.getElementById("nekoCoins").textContent = `💰 NEKO 코인: ${ethers.formatUnits(balance, 18)}`;
}

async function drawCard() {
    try {
        const balance = await nekoTokenContract.balanceOf(userAddress);
        if (balance < ethers.parseUnits("10", 18)) {
            alert("NEKO 코인이 부족합니다!");
            return;
        }
        const tx = await gachaContract.drawCard();
        await tx.wait();
        await updateNekoBalance();
    } catch (error) {
        console.error(error);
        alert("가챠 실패");
    }
}

// 배경 음악 컨트롤
const bgm = document.getElementById("bgm");
document.getElementById("sound-btn").addEventListener("click", () => {
    bgm.play();
    document.getElementById("sound-btn").style.display = "none";
});
