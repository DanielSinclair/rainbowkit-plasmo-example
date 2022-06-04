
import { useState } from 'react'
import { ConnectButton } from "@rainbow-me/rainbowkit"

const MyApp = () => {
  const [opened, setOpened] = useState(true)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        minWidth: opened ? 600 : 150,
        minHeight: opened ? 450 : 200
      }}>
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
      <ConnectButton/>
    </div>
  )
}

export default MyApp
