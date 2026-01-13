import Header from "./components/Header"
import MapGrid from "./components/MapGrid"
import GlobalContext from "./contexts/GlobalContext.js"
import { useState, useEffect } from "react"

import mapOne from "./data/maps.js"
import monstersOne from "./data/monsters.js"


function App() {

  const blockingTiles = new Set(["T", "W", "R"]);

  const [playerPos, setPlayerPos] = useState({ x: 32, y: 10 });
  const [isEncounter, setIsEncounter] = useState(false);
  const [monster, setMonster] = useState({});

  useEffect(() => {
    const { x, y } = playerPos;

    if (mapOne[y][x] === "E" && Math.random() < 0.1) {
      setMonster(getRandomMonster(monstersOne));
      setIsEncounter(true);
    }
  }, [playerPos]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setPlayerPos, isEncounter]);


  // UTILITY FUNCTIONS
  function handleKeyDown(event) {
    if (!isEncounter) {
      setPlayerPos((prev => {
        switch (event.key) {
          case "ArrowUp":
            if (blockingTiles.has(mapOne[prev.y - 1][prev.x])) return prev;
            else return { x: prev.x, y: prev.y - 1 };

          case "ArrowDown":
            if (blockingTiles.has(mapOne[prev.y + 1][prev.x])) return prev;
            else return { x: prev.x, y: prev.y + 1 };

          case "ArrowLeft":
            if (blockingTiles.has(mapOne[prev.y][prev.x - 1])) return prev;
            else return { x: prev.x - 1, y: prev.y };

          case "ArrowRight":
            if (blockingTiles.has(mapOne[prev.y][prev.x + 1])) return prev;
            else return { x: prev.x + 1, y: prev.y };
        }
      }))
    }
  }

  function getRandomMonster(monsters) {
    const total = monsters.reduce((sum, monster) => sum + monster.spawnRate, 0);

    let random = Math.random() * total;

    for (const monster of monsters) {
      if (random < monster.spawnRate) {
        console.log(monster);
        return monster;
      }
      random -= monster.spawnRate;
    };
  }




  return (
    <>
      <GlobalContext.Provider value={{ playerPos, isEncounter, setIsEncounter, monster }}>
        <Header />
        <MapGrid map={mapOne} />
      </GlobalContext.Provider>
    </>
  )
}

export default App
