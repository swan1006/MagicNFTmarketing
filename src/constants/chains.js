export const SupportedChainId  = {
  BSC : 56,
  BSC_TESTNET : 97,
  POLYGON : 137,
  POLYGON_MUMBAI : 80001,
}

export const CHAIN_IDS_TO_NAMES = {
  [SupportedChainId.BSC]: "binance",
  [SupportedChainId.BSC_TESTNET]: "binance_testnet",
  [SupportedChainId.POLYGON]: "polygon",
  [SupportedChainId.POLYGON_MUMBAI]: "polygon_mumbai",
};

export const ALL_SUPPORTED_CHAIN_IDS = Object.values(
  SupportedChainId
).filter((id) => typeof id === "number") ;

export const MULTICALL_ADDRESS = {
  97: "0x688EC8C059592104fC713E0dA9276e649302C4Ab",
  56: "0x6e568FcE995F5c7ddaFB8C0b74B3241328498F8A",
  137: "0xbfB508313126cf61CFb3BD7e570cC79C67998A53",
  80001: "0xbfB508313126cf61CFb3BD7e570cC79C67998A53",
};

export const NATIVE_TOKEN  = {
  97: "BNB",
  56: "BNB",
  137: "MATIC",
  80001: "MATIC"
};
