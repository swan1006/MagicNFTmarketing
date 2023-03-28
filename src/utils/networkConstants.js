import config from "./config";
import {
  bscNodes,
  bscNodesTestnet,
  polygonNodes,
  polygonNodesTestnet,
} from "./rpcUrl";

export const bscNetworkDetail = {
  mainnet: {
    chainId: `0x${config.bscChain.toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "BNB",
      symbol: "bnb",
      decimals: 18,
    },
    rpcUrls: bscNodes,
    blockExplorerUrls: [`https://bscscan.com/`],
  },
  testnet: {
    chainId: `0x${config.bscChainTestent.toString(16)}`,
    chainName: "Binance Smart Chain Testnet",
    nativeCurrency: {
      name: "BNB",
      symbol: "bnb",
      decimals: 18,
    },
    rpcUrls: bscNodesTestnet,
    blockExplorerUrls: [`https://testnet.bscscan.com`],
  },
};

export const polygonNetworkDetail = {
  mainnet: {
    chainId: `0x${config.polygon_chain_mainnet.toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "matic",
      decimals: 18,
    },
    rpcUrls: polygonNodes,
    blockExplorerUrls: [`https://polygonscan.com/`],
  },
  testnet: {
    chainId: `0x${config.polygon_chain_testnet.toString(16)}`,
    chainName: "Polygon Testnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "matic",
      decimals: 18,
    },
    rpcUrls: polygonNodesTestnet,
    blockExplorerUrls: [`https://mumbai.polygonscan.com/`],
  },
};
