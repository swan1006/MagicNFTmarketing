/* eslint-disable radix */
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import connectors from "contracts/connections/connectors";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useCallback } from "react";
import {
  bscNetwork,
  maticNetwork,
} from "../constants/index";
import config from "./config";
import { isMetaMaskInstalled } from "./helper";



export const setupNetwork = async (networkObject) => {
  const provider = window.ethereum;
  if (provider) {
    try {
      if (
        networkObject.chainId === `0x${config.bscChain.toString(16)}` ||
        networkObject.chainId === `0x${config.bscChainTestent.toString(16)}`||
        networkObject.chainId === `0x${config.polygon_chain_mainnet.toString(16)}`||
        networkObject.chainId === `0x${config.polygon_chain_testnet.toString(16)}`
      ) {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: networkObject.chainId }],
        });
      }
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [networkObject],
      });
      return true;
    } catch (error) {
      console.error("Failed to setup the network in Metamask:", error);
      return false;
    }
  } else {
    console.error(
      "Can't setup the BSC network on metamask because window.ethereum is undefined"
    );
    return false;
  }
};

export const getCurrentNetwork = (networkId) => {
  // return ethereum network by default
  if (!networkId) {
    return null;
  }

  if (
    parseInt(networkId) === config.bscChain ||
    parseInt(networkId) === config.bscChainTestent
  ) {
    return bscNetwork;
  } else if (
    parseInt(networkId) === config.polygon_chain_mainnet ||
    parseInt(networkId) === config.polygon_chain_testnet
  ) {
    return maticNetwork;
  } 
};

export function useWalletConnectCallback() {
  const { activate } = useActiveWeb3React();

  const createConnectHandler = useCallback(
    async (connector) => {
      try {
        // const connector = connectors.injected;
        // if the connector is walletconnect and the user has already tried to connect, manually reset the connector

        if (connector instanceof WalletConnectConnector) {
          connector.walletConnectProvider = undefined;
        }

        await activate(connector);
        localStorage.connected = "yes";
      } catch (error) {
        console.error("createConnectHandler", error);
      }
    },
    [activate]
  );

  const connectWallet = useCallback(() => {
    if (isMetaMaskInstalled()) {
      createConnectHandler(connectors.injected);
    } else {
      createConnectHandler(connectors.walletconnect);
    }
  }, [createConnectHandler]);

  return [connectWallet];
}
