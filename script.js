const { ethers } = window;

const NEKO_ADDRESS = "0x..."; // NEKO 코인 스마트 컨트랙트 주소
const GACHA_CONTRACT_ADDRESS = "0x..."; // 가챠 스마트 컨트랙트 주소

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
            gachaContract = new ethers.Contract(GACHA_CONTRACT_ADDRESS, GACHA_ABI, signer);

            document.getElementById("connectWallet").innerText = "✅ 연결됨";
            document.getElementById("drawCard").disabled = false;
            await updateNekoBalance();
        } catch (error) {
            console.error(error);
            alert("지갑 연결 오류");
        }
    } else {
        alert("MetaMask를 설치하세요.");
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
            alert("NEKO 코인이 부족합니다.");
            return;
        }
        const tx = await gachaContract.drawCard();
        await tx.wait();
        await updateNekoBalance();
        alert("🎴 가챠 성공! 카드가 추가되었습니다.");
    } catch (error) {
        console.error(error);
        alert("가챠 오류 발생");
    }
}

document.getElementById("connectWallet").addEventListener("click", connectWallet);
document.getElementById("drawCard").addEventListener("click", drawCard);
