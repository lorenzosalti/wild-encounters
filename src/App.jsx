import Header from "./components/Header"
import MapGrid from "./components/MapGrid"
import GlobalContext from "./contexts/GlobalContext.js"
import { useState, useEffect } from "react"

import mapOne from "./maps/maps.js"


function App() {

  const [playerPos, setPlayerPos] = useState({ x: 3, y: 4 });

  const [isEncounter, setIsEncounter] = useState(false);

  useEffect(() => {

    const { x, y } = playerPos;
    if (mapOne[y][x] === "E" && Math.random() < 0.1) {
      setIsEncounter(true)
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [playerPos])

  function handleKeyDown(event) {
    setPlayerPos((prev => {
      switch (event.key) {
        case "ArrowUp":
          if (mapOne[prev.y - 1][prev.x] === "T") return prev;
          else return { x: prev.x, y: prev.y - 1 };

        case "ArrowDown":
          if (mapOne[prev.y + 1][prev.x] === "T") return prev;
          else return { x: prev.x, y: prev.y + 1 };

        case "ArrowLeft":
          if (mapOne[prev.y][prev.x - 1] === "T") return prev;
          else return { x: prev.x - 1, y: prev.y };

        case "ArrowRight":
          if (mapOne[prev.y][prev.x + 1] === "T") return prev;
          else return { x: prev.x + 1, y: prev.y };
      }
    }))
  }

  return (
    <>
      <GlobalContext.Provider value={{ playerPos, setPlayerPos, isEncounter, setIsEncounter, handleKeyDown }}>
        <Header />
        <MapGrid map={mapOne} />
      </GlobalContext.Provider>
    </>
  )
}

export default App
