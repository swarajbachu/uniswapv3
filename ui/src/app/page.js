import MetaMask from "./components/metaMask"
import SwapForm from "./components/swapForm"
import EventsFeed from "./components/EventsFeed"
import config from "@/contexts/config"

export default function Home() {
  return (
    <div className="App flex flex-col justify-between items-center w-full h-full">
    <MetaMask />
    <SwapForm config={config} />
    <footer>
      <EventsFeed config={config} />
    </footer>
  </div>
  )
}
