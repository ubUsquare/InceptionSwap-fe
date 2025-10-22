"use client";

import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '@/config/wagmi';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const queryClient = new QueryClient();

export function WalletProviders({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={mounted && resolvedTheme === 'dark' ? darkTheme({
            accentColor: '#9396ED',
            accentColorForeground: 'white',
            borderRadius: 'large',
            fontStack: 'system',
          }) : lightTheme({
            accentColor: '#9396ED',
            accentColorForeground: 'white',
            borderRadius: 'large',
            fontStack: 'system',
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
