import "dotenv/config";
import { ethers } from "ethers";


const infuraUrl = `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.JsonRpcProvider(infuraUrl);

const privateKey = process.env.MY_WALLET_PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey);
const connectedWallet = wallet.connect(provider); 


try {
    const balance = await provider.getBalance(wallet.address);
    console.log("Sepolia balance (ETH): ", ethers.formatEther(balance));
} catch (error) {
    console.error("Error fetching balance:", error.message);
}


try {
    const tx = await connectedWallet.sendTransaction({
        to: "0x1885AeF3bDBce473Da29D71FA2FF964C84Db760A", 
        value: ethers.parseEther("0.01"), 
    });

    console.log("Transaction sent! Hash: ", tx.hash);


    const receipt = await tx.wait();
    console.log("Transaction confirmed! Block Number: ", receipt.blockNumber);
} catch (error) {
    console.error("Transaction failed:", error.message);
}
