import Web3 from "web3";
import AYRAabi from "../abi/AYRAtoken.json";
import ITHDabi from "../abi/ITHDtoken.json";
import MarketingAbi from "../abi/NFTMarketPlace.json";
import NFTAbi from "../abi/NFT.json";
import { ankrRpc, MARKEING_ADDRESS, NFT_ADDRESS, TOKEN_ADDRESS} from "../../constants";
import { isMetaMaskInstalled } from "../../utils/helper";

export const AYRATokenContract = (chainId) => {
  const address = TOKEN_ADDRESS?.AYRA[chainId];
  const abi = AYRAabi;
  const connection = getCurrentConnection(chainId, abi, address);
  return connection;
};
export const ITHDTokenContract = (chainId) => {
  const address = TOKEN_ADDRESS?.ITHD[chainId];
  const abi = ITHDabi;
  const connection = getCurrentConnection(chainId, abi, address);
  return connection;
};

export const marketplaceContract = (chainId) => {
    const address = MARKEING_ADDRESS?.[chainId];
    const abi = MarketingAbi;
    const connection = getCurrentConnection(chainId, abi, address);
    return connection;
};
export const nftContract = (chainId) => {
    const address = NFT_ADDRESS?.[chainId];
    const abi = NFTAbi;
    const connection = getCurrentConnection(chainId, abi, address);
    return connection;
};

// export const nftContract = (chainId, nftAddress) => {
//   const abi = NFTAbi;
//   const connection = getCurrentConnection(chainId, abi, nftAddress);
//   return connection;
// };

const getCurrentConnection = (chainId, abi, contractAddress) => {
  const _ankrRpc = ankrRpc?.[chainId];

  const web3 = isMetaMaskInstalled()
    ? new Web3(window.ethereum)
    : new Web3(
        new Web3.providers.HttpProvider(_ankrRpc ? _ankrRpc : ankrRpc[1])
      );
  return new web3.eth.Contract(abi, contractAddress);
};
