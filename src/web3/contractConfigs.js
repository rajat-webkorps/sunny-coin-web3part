export const contractAddress = '0xD8152192FEDb47Fec4A19982f8E4Fb5C49efA42D';

export const contractABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "initVirtualEthReserve",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "AlreadyGraduated",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "DeadlineExceeded",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "FeeTooHigh",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "Forbidden",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InsufficientOutput",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidAmountIn",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotEmToken",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "Paused",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TooMuchMcap",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract EmToken",
                "name": "token",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "Buy",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract EmToken",
                "name": "token",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "mcapInEth",
                "type": "uint256"
            }
        ],
        "name": "PriceUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract EmToken",
                "name": "token",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "Sell",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract EmToken",
                "name": "token",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "creator",
                "type": "address"
            }
        ],
        "name": "TokenCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract EmToken",
                "name": "token",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "contract EmHeadmaster",
                "name": "headmaster",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountToken",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountETH",
                "type": "uint256"
            }
        ],
        "name": "TokenGraduated",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DECIMALS",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "FEE_DENOMINATOR",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "INIT_REAL_TOKEN_RESERVE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "INIT_VIRTUAL_TOKEN_RESERVE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "K_",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MAX_FEE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "TOTAL_SUPPLY",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract EmToken",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            }
        ],
        "name": "calcAmountOutFromEth",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract EmToken",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            }
        ],
        "name": "calcAmountOutFromToken",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "symbol",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "initAmountIn",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "extended",
                "type": "string"
            }
        ],
        "name": "createToken",
        "outputs": [
            {
                "internalType": "contract EmToken",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "creationFee_",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "emLedger_",
        "outputs": [
            {
                "internalType": "contract EmLedger",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "externalEntities_",
        "outputs": [
            {
                "internalType": "contract ExternalEntities",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "feeRate_",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "feeTo_",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract EmToken",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "getPool",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "contract EmToken",
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenReserve",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "virtualTokenReserve",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "ethReserve",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "virtualEthReserve",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastPrice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastMcapInEth",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastTimestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastBlock",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "headmaster",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "poolId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "K",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct EmCore.Pool",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "offset",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "limit",
                "type": "uint256"
            }
        ],
        "name": "getPoolsAll",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "contract EmToken",
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenReserve",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "virtualTokenReserve",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "ethReserve",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "virtualEthReserve",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastPrice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastMcapInEth",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastTimestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastBlock",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "headmaster",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "poolId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "K",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct EmCore.Pool[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "graduationFeeRate_",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "graduationThreshold_",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "headmaster_",
        "outputs": [
            {
                "internalType": "contract EmHeadmaster",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "initVirtualEthReserve_",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner_",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paused_",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract EmToken",
                "name": "",
                "type": "address"
            }
        ],
        "name": "pools_",
        "outputs": [
            {
                "internalType": "contract EmToken",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenReserve",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "virtualTokenReserve",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "ethReserve",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "virtualEthReserve",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lastPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lastMcapInEth",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lastTimestamp",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lastBlock",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "headmaster",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "poolId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "K",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
            }
        ],
        "name": "setCreationFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract ExternalEntities",
                "name": "externalEntities",
                "type": "address"
            }
        ],
        "name": "setExternalEntities",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "feeRate",
                "type": "uint256"
            }
        ],
        "name": "setFeeRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "feeTo",
                "type": "address"
            }
        ],
        "name": "setFeeTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "feeRate",
                "type": "uint256"
            }
        ],
        "name": "setGraduationFeeRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract EmHeadmaster",
                "name": "headmaster",
                "type": "address"
            }
        ],
        "name": "setHeadmaster",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "initVirtualEthReserve",
                "type": "uint256"
            }
        ],
        "name": "setInitVirtualEthReserve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "setOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "paused",
                "type": "bool"
            }
        ],
        "name": "setPaused",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract EmToken",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountOutMin",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "swapEthForTokens",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract EmToken",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountOutMin",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "swapTokensForEth",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]