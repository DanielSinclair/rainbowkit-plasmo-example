
import React from "react"
import '@rainbow-me/rainbowkit/dist/index.css'
import {
  getDefaultWallets,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit"
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ alchemyId: "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC" }),
    publicProvider()
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const RainbowKit = (props) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        {props.children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default RainbowKit