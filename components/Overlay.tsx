
import '@rainbow-me/rainbowkit/dist/index.css'
import { ConnectButton } from "@rainbow-me/rainbowkit"

const Overlay = () => {
  return (
    <div style={{ backgroundColor: "#36454F", width: "100vw", padding:0 }}>
      <header>
        <p>Hello, World!</p>
        <p>I'm a Content Script in a Chrome Extension!</p>
        <ConnectButton/>
      </header>
    </div>
  )
}

export default Overlay