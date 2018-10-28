const Web3 = require("web3");

const web3 = new Web3(window.web3.currentProvider);

function pay() {
  const money = document.getElementById("form2").value;
  web3.eth.sendTransaction(
    {
      from: web3.eth.accounts[0],
      to: "0x1F7B80023Cd24469D8542B8d1f55A4a36a002886",
      value: web3.toWei(money, "ether")
    },
    function(err, transactionHash) {
      if (!err) console.log(transactionHash + " success");
    }
  );
}
