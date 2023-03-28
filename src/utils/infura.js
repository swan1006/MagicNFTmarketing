import { SupportedChainId } from "../constants/chains";

const INFURA_KEY = "8af4f9aa936e427f85063ea3a4adaa35";
if (typeof INFURA_KEY === "undefined") {
  throw new Error(
    `REACT_APP_INFURA_KEY must be a defined environment variable`
  );
}

/**
 * These are the network URLs used by the interface when there is not another available source of chain data
 */
export const INFURA_NETWORK_URLS = {
  [SupportedChainId.POLYGON]: `https://rpc.ankr.com/polygon`,
  [SupportedChainId.POLYGON_MUMBAI]: `https://polygon-mumbai.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.BSC]: `https://rpc.ankr.com/bsc`,
  [SupportedChainId.BSC_TESTNET]: `https://data-seed-prebsc-1-s1.binance.org:8545`,
};
