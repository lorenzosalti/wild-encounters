import Header from "./components/Header"
import MapGrid from "./components/MapGrid"
import PlayerPositionContext from "./contexts/PlayerPositionContext.js"
import { useState } from "react"

import mapOne from "./maps/maps.js"


function App() {

  const [playerPos, setPlayerPos] = useState({ x: 3, y: 4 })

  return (
    <>
      <PlayerPositionContext.Provider value={{ playerPos, setPlayerPos }}>
        <Header />
        <MapGrid map={mapOne} />
      </PlayerPositionContext.Provider>
    </>
  )
}

export default App
