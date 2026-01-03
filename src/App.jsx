import Header from "./components/Header"
import MapGrid from "./components/MapGrid"
import GlobalContext from "./contexts/GlobalContext.js"
import { useState } from "react"

import mapOne from "./maps/maps.js"


function App() {

  const [playerPos, setPlayerPos] = useState({ x: 3, y: 4 });

  const [isEncounter, setIsEncounter] = useState(false);

  return (
    <>
      <GlobalContext.Provider value={{ playerPos, setPlayerPos, isEncounter, setIsEncounter }}>
        <Header />
        <MapGrid map={mapOne} />
      </GlobalContext.Provider>
    </>
  )
}

export default App
