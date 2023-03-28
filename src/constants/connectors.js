import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { ALL_SUPPORTED_CHAIN_IDS } from "./chains";
import { INFURA_NETWORK_URLS } from "../utils/infura";

export const injected = new InjectedConnector({
    supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
});

export const walletconnect = new WalletConnectConnector({
    supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
    rpc: INFURA_NETWORK_URLS,
    qrcode: true,
});

const connectors = {
    injected,
    walletconnect
  };
  
  export default connectors;
