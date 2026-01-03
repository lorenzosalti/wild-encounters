import { useContext, useEffect } from "react";
import Player from "./Player";
import GlobalContext from "../contexts/GlobalContext";

function MapGrid({ map }) {

  const { playerPos, setPlayerPos } = useContext(GlobalContext);

  useEffect(() => {

    const handleKeyDown = (event) => {
      setPlayerPos((prev => {
        switch (event.key) {
          case "ArrowUp":
            if (map[prev.y - 1][prev.x] === "T") return prev;
            else return { x: prev.x, y: prev.y - 1 };

          case "ArrowDown":
            if (map[prev.y + 1][prev.x] === "T") return prev;
            else return { x: prev.x, y: prev.y + 1 };

          case "ArrowLeft":
            if (map[prev.y][prev.x - 1] === "T") return prev;
            else return { x: prev.x - 1, y: prev.y };

          case "ArrowRight":
            if (map[prev.y][prev.x + 1] === "T") return prev;
            else return { x: prev.x + 1, y: prev.y };
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