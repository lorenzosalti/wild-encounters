import { useContext, useEffect } from "react";
import Player from "./Player";
import PlayerPositionContext from "../contexts/PlayerPositionContext";

function MapGrid({ map }) {

  const { playerPos, setPlayerPos } = useContext(PlayerPositionContext);

  useEffect(() => {

    const handleKeyDown = (event) => {
      setPlayerPos((prev => {
        switch (event.key) {
          case "ArrowUp":
            return { x: prev.x, y: prev.y - 1 }
          case "ArrowDown":
            return { x: prev.x, y: prev.y + 1 }
          case "ArrowLeft":
            return { x: prev.x - 1, y: prev.y }
          case "ArrowRight":
            return { x: prev.x + 1, y: prev.y }
        }
      }))
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

  }, [setPlayerPos])




  return (
    <div className="map-grid">

      {map.map((row, y) => {

        return (
          <div className="map-row" key={`${y}`}>

            {row.map((tile, x) => {

              const isPlayerHere = playerPos.x === x && playerPos.y === y

              return (
                <div className={`map-tile tile-${tile}`} key={`${x}-${y}`}>

                  {isPlayerHere && <Player />}

                </div>
              )

            })}

          </div>)

      })}

    </div>

  )

}

export default MapGrid