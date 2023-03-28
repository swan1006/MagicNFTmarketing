const testing = false;
export const currentConnection = testing ? "testnet" : "mainnet";

export const MARKEING_ADDRESS = {
  137: "0x6335aF028e77B574423733443678aD4cb9e15B3D",
  80001: "0x5bf58D9a9Af78A660301BC49924C65b8b08ad0a6",
  56: "0x064dE1e65df3F40Afd7fb9E8A1Af61bD4545f4a1", // bsc mainnet
  97: "0xF5863254E6FA59aa1ef4a7D6DFB590acAdB9D337", // bsc testnet
};
export const NFT_ADDRESS = {
  137: "0x6335aF028e77B574423733443678aD4cb9e15B3D",
  80001: "0x4c001634ddee5F7d2dc21637e21CFf85a1E0b8D3",
  56: "0x064dE1e65df3F40Afd7fb9E8A1Af61bD4545f4a1", // bsc mainnet
  97: "0x82434642Ccd4cf00F170d96C7336E0896B12E6aa", // bsc testnet
};

export const TOKEN_ADDRESS = {
  AYRA: {
    56: "0xE976E9Cc54817074922Eb5426F2Be74cd2883f17",
    97: "0x8971Dcddc71ce323C337D623fc4390654a5Cc444",
  },
  ITHD: {
    56: "0x88366934F5aF1D5ce2592cb549d346F320dc13b3",
    97: "0x2F6099c7dCE3a4F34ec04003D71DF9fef2e8c917",
  },
};

export const AYRA = "AYRA";
export const ITHD = "ITHD";

export const tokenLogo = {
  AYRA: "img/aog.png",
  ITHD: "img/labs.png",
};

export const tokenName = {
  AYRA: "AYRAname",
  ITHD: "ITHDname",
};

export const bscNetwork = "bsc";
export const maticNetwork = "matic";

export const supportedChainIds = [
  56,
  97,
  137,
  80001,
];

export const bscConfig = {
  network_id: {
    mainnet: "56",
    testnet: "97",
  },
  network_rpc_mainnet: "https://bsc-dataseed.binance.org/",
  network_rpc_testnet: "https://data-seed-prebsc-1-s1.binance.org:8545/",
};

export const maticConfig = {
  network_id: {
    mainnet: "137",
    testnet: "80001",
  },
  network_rpc_mainnet: "https://polygon-rpc.com",
  network_rpc_testnet: "https://mumbai-explorer.matic.today",
};

export const coingeckoTokenId = {
  AYRA: "polkabridge",
  ITHD: "dragonbite",
};


export const supportedNetworks = ["56", "137", "97", "80001"];

export const ankrRpc = {
  137: "https://rpc.ankr.com/polygon",
  56: "https://rpc.ankr.com/bsc",
};

export const NetworkContextName = "NETWORK";
