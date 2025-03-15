const { ethers } = window;

const NEKO_ABI = [...]; // 실제 ABI로 교체
const CARD_CONTRACT_ABI = [...]; // 실제 ABI로 교체
const GACHA_CONTRACT_ABI = [...]; // 실제 ABI로 교체

const NEKO_ADDRESS = "0x..."; // 배포 후 실제 주소로 교체
const CARD_CONTRACT_ADDRESS = "0x..."; // 배포 후 실제 주소로 교체
const GACHA_CONTRACT_ADDRESS = "0x..."; // 배포 후 실제 주소로 교체

let userAddress;
let nekoTokenContract;
let cardContract;
let gachaContract;

async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.enable();
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            userAddress = await signer.getAddress();
            nekoTokenContract = new ethers.Contract(NEKO_ADDRESS, NEKO_ABI, signer);
            cardContract = new ethers.Contract(CARD_CONTRACT_ADDRESS, CARD_CONTRACT_ABI, signer);
            gachaContract = new ethers.Contract(GACHA_CONTRACT_ADDRESS, GACHA_CONTRACT_ABI, signer);
            document.getElementById("connectButton").style.display = "none";
            document.getElementById("drawButton").disabled = false;
            await updateNekoBalance();
            await displayCards();
        } catch (error) {
            console.error(error);
            alert("Error connecting wallet");
        }
    } else {
        alert("Please install MetaMask");
    }
}

async function updateNekoBalance() {
    const balance = await nekoTokenContract.balanceOf(userAddress);
    const formattedBalance = ethers.formatUnits(balance, 18);
    document.getElementById("nekoCoins").textContent = `💰 NEKO coin: ${formattedBalance}`;
}

async function displayCards() {
    const tokenIds = await cardContract.getTokensOfOwner(userAddress);
    let cardHtml = "";
    for (const tokenId of tokenIds) {
        const tokenURI = await cardContract.tokenURI(tokenId);
        const response = await fetch(tokenURI);
        const metadata = await response.json();
        const name = metadata.name;
        const imageUrl = metadata.image;
        cardHtml += `<div class="card ${metadata.rarity.toLowerCase()}">
            <img src="${imageUrl}" alt="${name}">
            <p>${name} (Grade: ${metadata.rarity}, Power: ${metadata.power})</p>
        </div>`;
    }
    document.getElementById("cardDisplay").innerHTML = cardHtml;
}

async function drawCard() {
    try {
        const balance = await nekoTokenContract.balanceOf(userAddress);
        if (balance < ethers.parseUnits("10", 18)) {
            alert("Insufficient NEKO coins");
            return;
        }
        const allowance = await nekoTokenContract.allowance(userAddress, GACHA_CONTRACT_ADDRESS);
        if (allowance < ethers.parseUnits("10", 18)) {
            const tx = await nekoTokenContract.approve(GACHA_CONTRACT_ADDRESS, ethers.parseUnits("1000", 18));
            await tx.wait();
        }
        const tx = await gachaContract.drawCard();
        await tx.wait();
        await updateNekoBalance();
        await displayCards();
    } catch (error) {
        console.error(error);
        alert("Error drawing card");
    }
}

window.onload = function() {
    if (window.ethereum && window.ethereum.isConnected()) {
        connectWallet();
    }
};
