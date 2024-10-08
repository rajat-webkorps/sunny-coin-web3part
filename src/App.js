import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { contractABI, contractAddress } from "./web3/contractConfigs";
import {
  createToken,
  swapEthForTokens,
  swapTokensForEth,
  getPool,
} from "./web3/contractMethods";
import "./App.css";
import BigNumber from "bignumber.js";

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [chainId] = useState(11155111);
  const [contract, setContract] = useState(null);
  const [result, setResult] = useState("");

  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [initAmountIn, setInitAmountIn] = useState();
  const [description, setDescription] = useState("");
  const [extended, setExtended] = useState("");

  const [tokenAddress, setTokenAddress] = useState(
    "0x62787c34BfAC7793eB70f46E1aa04b719b969241"
  );
  const [amountIn, setAmountIn] = useState();
  const [amountOutMin, setAmountOutMin] = useState();
  const [getMethodName, setGetMethodName] = useState("");

  const [T2EamountIn, setT2EAmountIn] = useState();
  const [T2EamountOutMin, setT2EAmountOutMin] = useState();

  const [poolInfo, setPoolInfo] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const newWeb3 = new Web3(window.ethereum);
      window.ethereum.on("chainChanged", async () => {
        await connectWallet();
      });
      setWeb3(newWeb3);
    } else {
      alert("Please install MetaMask");
    }
  }, []);

  const switchNetwork = async (desiredChainId) => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: web3.utils.toHex(desiredChainId) }],
      });
      await connectWallet();
    } catch (switchError) {
      if (switchError.code === 4902) {
        console.error(
          "This network is not available in your MetaMask, please add it manually."
        );
      } else {
        console.error("Failed to switch network:", switchError);
      }
    }
  };

  const connectWallet = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      setWalletAddress(accounts[0]);

      const networkId = Number(await web3.eth.net.getId());
      if (networkId !== chainId) {
        alert(`Please switch to the Sepolia network (Chain ID: ${chainId})`);
        await switchNetwork(chainId);
      } else {
        const newContract = new web3.eth.Contract(contractABI, contractAddress);
        setContract(newContract);
        console.log(newContract.methods);
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const handleCreateToken = async (e) => {
    e.preventDefault();
    if (contract) {
      try {
        const response = await createToken(
          tokenName,
          tokenSymbol,
          initAmountIn,
          description,
          extended
        );
        setResult(
          `Token created successfully: ${response.events.TokenCreated.returnValues.token}`
        );
      } catch (error) {
        console.error("Error creating token:", error);
        setResult("Error creating token");
      }
    } else {
      alert("Please connect the wallet and ensure the contract is loaded.");
    }
  };

  const handleGetContractCalls = async () => {
    if (contract && getMethodName) {
      try {
        const args = [];
        const response = await contract.methods[getMethodName](...args).call({
          from: walletAddress,
        });

        // Format the response
        const formattedResponse =
          typeof response === "bigint" ? response.toString() : response;
        setResult(JSON.stringify(formattedResponse));
      } catch (error) {
        console.error("Error calling contract method:", error);
        setResult("Error calling contract method");
      }
    } else if (Number(await web3.eth.net.getId()) !== chainId) {
      alert("Please switch to the Sepolia network");
    } else {
      alert("Please connect the wallet and enter a method name.");
    }
  };

  const handleSwapEthForToken = async (e) => {
    e.preventDefault();
    if (contract) {
      try {
        const currentEpochTime = Math.floor(Date.now() / 1000);
        const bufferTime = 10 * 60;
        const deadline = currentEpochTime + bufferTime;

        const amountInWei = new BigNumber(amountIn)
          .times(new BigNumber(10).pow(18))
          .toString();
        console.log("Amount In", amountInWei);

        const amountOutMin = await contract.methods
          .calcAmountOutFromEth(tokenAddress, amountInWei.toString())
          .call();

        const response = await swapEthForTokens(
          tokenAddress,
          amountInWei.toString(),
          amountOutMin,
          walletAddress,
          deadline
        );

        console.log("Swap successful:", response);
        setResult("Swap successful!");
        console.log(deadline, "This is deadline");
      } catch (error) {
        console.error("Error swapping tokens:", error);
        setResult("Error swapping tokens");
      }
    } else {
      alert("Please connect the wallet and ensure the contract is loaded.");
      await connectWallet();
      alert("Wallet connected");
    }
  };

  const handleSwapTokensForEth = async (e) => {
    e.preventDefault();
    if (contract) {
      try {
        const currentEpochTime = Math.floor(Date.now() / 1000);
        const bufferTime = 10 * 60;
        const deadline = currentEpochTime + bufferTime;
        
        const T2EamountOutMin = await contract.methods
          .calcAmountOutFromToken(tokenAddress, T2EamountIn)
          .call();
        console.log("T2E Amount out", T2EamountOutMin);


        const response= await swapTokensForEth(
          tokenAddress,
          T2EamountIn.toString(),
          T2EamountOutMin,
          walletAddress,
          deadline
        );
        alert("Swap successful!");
      } catch (error) {
        console.error("Error swapping tokens for ETH:", error);
        alert(
          "Failed to swap tokens for ETH. Please check the console for details."
        );
      }
    } else {
      alert("Please connect the wallet and ensure the contract is loaded.");
      await connectWallet();
      alert("wallet connected");
    }
  };
  const handleGetPool = async () => {
    try {
      const pool = await getPool(tokenAddress);
      setPoolInfo(pool);
    } catch (error) {
      console.error("Error fetching pool information:", error);
      alert(
        "Failed to fetch pool information. Please check the console for details."
      );
    }
  };

  return (
    <div className="app-container">
      <h2>Memecoin</h2>
      <button className="connect-button" onClick={connectWallet}>
        Connect Wallet
      </button>
      <p className="wallet-info">Wallet Address: {walletAddress}</p>

      <h1>Create a New Token</h1>
      <form onSubmit={handleCreateToken}>
        <input
          type="text"
          value={tokenName}
          onChange={(e) => setTokenName(e.target.value)}
          placeholder="Token Name"
          required
        />
        <input
          type="text"
          value={tokenSymbol}
          onChange={(e) => setTokenSymbol(e.target.value)}
          placeholder="Token Symbol"
          required
        />
        <input
          type="number"
          value={initAmountIn}
          onChange={(e) => setInitAmountIn(Number(e.target.value))}
          placeholder="Initial Amount In (ETH)"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="text"
          value={extended}
          onChange={(e) => setExtended(e.target.value)}
          placeholder="Extended Info"
        />
        <button type="submit">Create Token</button>
      </form>
      <h2>To Call Get Methods</h2>
      <div className="form-group">
        <label>
          Method Name:
          <input
            type="text"
            className="input-field"
            value={getMethodName}
            onChange={(e) => setGetMethodName(e.target.value)}
          />
        </label>
        <br />
        <button className="action-button" onClick={handleGetContractCalls}>
          Contract Get Calls
        </button>
      </div>
      <h3>Result:</h3>
      <p className="result-text">{result}</p>

      <h2>Swap ETH for Tokens</h2>
      <form onSubmit={handleSwapEthForToken}>
        <input
          type="number"
          step="any"
          value={amountIn}
          onChange={(e) => setAmountIn(Number(e.target.value))}
          placeholder="Amount In (ETH)"
          required
        />
        <button type="submit">Swap Tokens</button>
      </form>

      <h2>Swap Tokens for ETH</h2>
      <form onSubmit={handleSwapTokensForEth}>
        <input
          type="number"
           step="any"
          value={T2EamountIn}
          onChange={(e) => setT2EAmountIn(e.target.value)}
          placeholder="Amount In (Tokens)"
          required
        />
        <button type="submit">Swap for ETH</button>
      </form>

      <h2>Get Pool Information</h2>
      <div className="form-group">
        <input
          type="text"
          value={tokenAddress}
          onChange={(e) => setTokenAddress(e.target.value)}
          placeholder="Token Address"
          required
        />
        <button onClick={handleGetPool}>Get Pool Info</button>
      </div>

      {poolInfo && (
        <div className="pool-info">
          <h3>Pool Information:</h3>
          <pre>{JSON.stringify(poolInfo, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
