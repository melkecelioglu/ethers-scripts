import "dotenv/config";
import { ethers } from "ethers";

const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.JsonRpcProvider(infuraUrl);

console.log("Current block number:", await provider.getBlockNumber());
//console.log("atg.eth is:", await provider.resolveName("atg.eth"));
//console.log("let me find the ens name from wallet address: ", await provider.lookupAddress("0x34aA3F359A9D614239015126635CE7732c18fDF3"));
//just read address

let atgBalance = await provider.getBalance("sanfordstout.eth");
//atgBalance= atgBalance.add(BigNumber.from(5000));
//console.log("vitalik.eth is:", await provider.resolveName("vitalik.eth"));
const vitaliksBalance = await provider.getBalance("vitalik.eth");
//console.log("vitalik.eth has ", ethers.formatEther(vitaliksBalance));

/**
    if(vitaliksBalance.gt(atgBalance)){
        console.log("vitalik has more than the other one");
    }
    else{
        console.log("atg has more");
    }
*/
console.log("1.5 eth is: ", ethers.parseEther("1.5"), "wei");
console.log("1.5 eth is: ", ethers.formatEther(ethers.parseEther("1.5")))