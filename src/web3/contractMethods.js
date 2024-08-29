import Web3 from "web3";
import { contractABI, contractAddress } from "./contractConfigs";

const getCreationFee = async (contract) => {
  const creationFee = await contract.methods.creationFee_().call();
  return creationFee;
};

const createToken = async (
  name,
  symbol,
  initAmountIn,
  description,
  extended
) => {
  console.log("Hello", { name, symbol, initAmountIn, description, extended });

  if (typeof window.ethereum !== "undefined") {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    try {
      const creationFee = await getCreationFee(contract);
      const valueToSend = parseFloat(initAmountIn) + parseFloat(creationFee);
      const nativeETH = parseFloat(initAmountIn);

      const result = await contract.methods
        .createToken(name, symbol, initAmountIn, description, extended)
        .send({ from: account, value: valueToSend, nativeETH: nativeETH });

      console.log("Token Created:", result);
    } catch (error) {
      console.error("Error creating token:", error);
    }
  } else {
    console.log("Ethereum wallet is not connected");
  }
};

const swapEthForTokens = async (
  token,
  amountIn,
  amountOutMin,
  to,
  deadline
) => {
  if (typeof window.ethereum !== "undefined") {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    try {
      const result = await contract.methods
        .swapEthForTokens(token, amountIn, amountOutMin, to, deadline)
        .send({ from: account, value: amountIn });

      console.log("Swap Successful:", result);
    } catch (error) {
      console.error("Error swapping tokens:", error);
    }
  } else {
    console.log("Ethereum wallet is not connected");
  }
};

const swapTokensForEth = async (
  token,
  amountIn,
  amountOutMin,
  to,
  deadline
) => {
  if (typeof window.ethereum !== "undefined") {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    try {
      const result = await contract.methods
        .swapTokensForEth(token, amountIn, amountOutMin, to, deadline)
        .send({ from: account });

      console.log("Swap Successful:", result);
    } catch (error) {
      console.error("Error swapping tokens for ETH:", error);
    }
  } else {
    console.log("Ethereum wallet is not connected");
  }
};

const getPool = async (tokenAddress) => {
  if (typeof window.ethereum !== "undefined") {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    try {
      const pool = await contract.methods.getPool(tokenAddress).call();
      
      const poolWithStrings = Object.fromEntries(
          Object.entries(pool).map(([key, value]) => 
              typeof value === 'bigint' ? [key, value.toString()] : [key, value]
          )
      );

      return poolWithStrings;
  } catch (error) {
      console.error("Error fetching pool:", error);
      throw error;
  }
  } else {
    console.log("Ethereum wallet is not connected");
  }
};

export { createToken, swapEthForTokens, swapTokensForEth, getPool };
