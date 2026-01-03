import { useContext, useEffect } from "react";
import Player from "./Player";
import GlobalContext from "../contexts/GlobalContext";
import EncounterModal from "./EncounterModal"

function MapGrid({ map }) {

  const { playerPos, setPlayerPos, isEncounter, handleKeyDown } = useContext(GlobalContext);


  useEffect(() => {

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

  }, [setPlayerPos])


  return (
    <>
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

      {isEncounter && <EncounterModal />}
    </>

  )

}

export default MapGrid