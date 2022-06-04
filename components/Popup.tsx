
import { ConnectButton } from "@rainbow-me/rainbowkit"

const MyApp = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        minWidth: 600,
        minHeight: 450
      }}>
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
      <ConnectButton/>
    </div>
  )
}

export default MyApp
