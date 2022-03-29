var compound = new Compound(window.ethereum); 


const ethinput = document.getElementById('stake-token');
const ethoutnput = document.getElementById('redeem-token');

async function connectwallet() {
    if (typeof window.ethereum !== "undefined") {
        try {
          await ethereum.request({ method: "eth_requestAccounts" });
        } catch (error) {
          console.log(error);
        }
        document.getElementById("connectButton").innerHTML = "Connected";
        const accounts = await ethereum.request({ method: "eth_accounts" });
        console.log(accounts);
      } else {
        document.getElementById("connectButton").innerHTML =
          "Please install MetaMask";
      }
}

async function staketoken() {
    const tokenamount = +ethinput.value;
    console.log('Supplying ETH to the Compound Protocol...');
    const trx = await compound.supply(Compound.ETH, tokenamount);
    console.log('Info', trx);  
}

async function redeemtoken() {
    const tokenamount = +ethoutnput.value;
    console.log('Redeeming ...');
    const trx = await compound.redeem(Compound.cETH, tokenamount); 
    console.log('Info', trx);
  
}

module.export = {
    connectwallet,
    staketoken,
    redeemtoken
}