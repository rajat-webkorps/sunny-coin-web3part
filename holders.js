import Web3, { providers } from 'web3';
import BigNumber from 'bignumber.js';

const web3 = new Web3(new Web3.providers.HttpProvider('https://sepolia.infura.io/v3/a2b575c237ab40768d9a581d02c224c1'));

const contractAddress = '0x62787c34BfAC7793eB70f46E1aa04b719b969241';
const transferEventSignature = web3.utils.sha3('Transfer(address,address,uint256)');

const getTokenHoldersWithBalances = async () => {
    const logs = await web3.eth.getPastLogs({
        fromBlock: '0x0',
        toBlock: 'latest',
        address: contractAddress,
        topics: [transferEventSignature],
    });

    const balances = {};

    logs.forEach(log => {
        const from = `0x${log.topics[1].slice(26)}`;
        const to = `0x${log.topics[2].slice(26)}`;
        const value = new BigNumber(log.data);


        if (from !== '0x0000000000000000000000000000000000000000') {
            if (!balances[from]) balances[from] = new BigNumber(0);
            balances[from] = balances[from].minus(value);
        }

        if (!balances[to]) balances[to] = new BigNumber(0);
        balances[to] = balances[to].plus(value);
    });

    const totalSupply = Object.values(balances).reduce((acc, balance) => acc.plus(balance), new BigNumber(0));

    const holdersWithBalances = Object.entries(balances).map(([holder, balance]) => {
        return {
            holder,
            balance: balance.toString(),
            percentage: balance.dividedBy(totalSupply).multipliedBy(100).toFixed(2),
        };
    });

    return holdersWithBalances;
};

getTokenHoldersWithBalances()
    .then(holders => {
        console.log(holders);
    })
    .catch(error => {
        console.error(error);
    });