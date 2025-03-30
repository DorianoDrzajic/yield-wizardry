
import { ProtocolData } from "@/components/ProtocolCard";

export const protocols: ProtocolData[] = [
  {
    id: "aave-eth",
    name: "Aave ETH Supply",
    apy: 3.84,
    tvl: 789500000,
    risk: 3,
    impermanentLoss: 0,
    protocol: "aave",
    tokens: ["ETH"],
    description: "Earn yield by supplying ETH to the Aave lending protocol. Low risk with variable APY based on market demand."
  },
  {
    id: "aave-usdc",
    name: "Aave USDC Supply",
    apy: 4.12,
    tvl: 1245000000,
    risk: 2,
    impermanentLoss: 0,
    protocol: "aave",
    tokens: ["USDC"],
    description: "Earn yield by supplying USDC to the Aave lending protocol. Very low risk with stable returns."
  },
  {
    id: "curve-3pool",
    name: "Curve 3pool",
    apy: 5.67,
    tvl: 543000000,
    risk: 4,
    impermanentLoss: 0.5,
    protocol: "curve",
    tokens: ["DAI", "USDC", "USDT"],
    description: "Provide liquidity to Curve Finance's 3pool, a stablecoin pool with minimal impermanent loss risk."
  },
  {
    id: "curve-tricrypto",
    name: "Curve TriCrypto",
    apy: 14.32,
    tvl: 192000000,
    risk: 7,
    impermanentLoss: 8.5,
    protocol: "curve",
    tokens: ["USDT", "WBTC", "ETH"],
    description: "High-yield, higher risk liquidity pool on Curve Finance for USDT, WBTC, and ETH with automated rebalancing."
  },
  {
    id: "convex-3pool",
    name: "Convex 3pool",
    apy: 8.93,
    tvl: 478000000,
    risk: 5,
    impermanentLoss: 0.5,
    protocol: "convex",
    tokens: ["DAI", "USDC", "USDT"],
    description: "Stake Curve 3pool LP tokens on Convex to earn boosted CRV rewards plus CVX tokens."
  },
  {
    id: "uniswap-eth-usdc",
    name: "Uniswap v3 ETH/USDC",
    apy: 16.78,
    tvl: 267000000,
    risk: 8,
    impermanentLoss: 12.3,
    protocol: "uniswap",
    tokens: ["ETH", "USDC"],
    description: "Concentrated liquidity position on Uniswap v3 for ETH/USDC pair. Higher APY with increased impermanent loss risk."
  },
  {
    id: "compound-eth",
    name: "Compound ETH Supply",
    apy: 3.42,
    tvl: 421000000,
    risk: 3,
    impermanentLoss: 0,
    protocol: "compound",
    tokens: ["ETH"],
    description: "Supply ETH to the Compound protocol to earn interest plus COMP governance tokens."
  },
  {
    id: "yearn-usdc",
    name: "Yearn USDC Vault",
    apy: 7.85,
    tvl: 345000000,
    risk: 4,
    impermanentLoss: 0,
    protocol: "yearn",
    tokens: ["USDC"],
    description: "Automated yield farming strategy for USDC, managed by Yearn Finance to optimize returns across DeFi."
  },
];

export const optimalAllocations = {
  "aave-eth": 15,
  "aave-usdc": 20,
  "curve-3pool": 15,
  "curve-tricrypto": 10,
  "convex-3pool": 15,
  "uniswap-eth-usdc": 5,
  "compound-eth": 10,
  "yearn-usdc": 10,
};

export const riskProfiles = {
  conservative: {
    "aave-eth": 25,
    "aave-usdc": 35,
    "curve-3pool": 20,
    "compound-eth": 15,
    "yearn-usdc": 5,
    "curve-tricrypto": 0,
    "convex-3pool": 0,
    "uniswap-eth-usdc": 0,
  },
  balanced: optimalAllocations,
  aggressive: {
    "aave-eth": 5,
    "aave-usdc": 5,
    "curve-3pool": 10,
    "curve-tricrypto": 20,
    "convex-3pool": 20,
    "uniswap-eth-usdc": 25,
    "compound-eth": 5,
    "yearn-usdc": 10,
  }
};
