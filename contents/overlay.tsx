
import type { PlasmoContentScript } from "plasmo"
import RainbowKit from "../components/RainbowKit"
import OverlayComponent from "../components/Overlay"

export const config: PlasmoContentScript = {
  matches: ["<all_urls>"]
}

const Overlay = () => {
  return (
    <RainbowKit>
      <OverlayComponent/>
    </RainbowKit>
  )
}

export default Overlay