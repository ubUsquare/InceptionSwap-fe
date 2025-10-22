import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { 
  bsc,              // BSC (56)
  bscTestnet,       // BNB Smart Chain Testnet (97)
  mainnet,          // Ethereum (1)
  sepolia,          // Sepolia (11155111)
  polygon,          // Polygon (137)
  polygonMumbai,    // Polygon Mumbai (80001)
  arbitrum,         // Arbitrum (42161)
  optimism,         // Optimism (10)
  avalanche,        // Avalanche (43114)
  base,             // Base (8453)
  baseSepolia       // Base Sepolia (84532)
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'InceptionSwap',
  projectId: 'ef3accf18d13507721b380faa33820df',
  chains: [
    // Mainnets
    bsc,              // BSC (56)
    mainnet,          // Ethereum (1)
    polygon,          // Polygon (137)
    arbitrum,         // Arbitrum (42161)
    optimism,         // Optimism (10)
    avalanche,        // Avalanche (43114)
    base,             // Base (8453)
    // Testnets
    bscTestnet,       // BNB Smart Chain Testnet (97)
    sepolia,          // Sepolia (11155111)
    polygonMumbai,    // Polygon Mumbai (80001)
    baseSepolia,      // Base Sepolia (84532)
  ],
  ssr: true, // Enable Server-Side Rendering for Next.js
});
