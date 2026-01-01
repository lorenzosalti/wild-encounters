import { useContext } from "react";
import Player from "./Player";
import PlayerPositionContext from "../contexts/PlayerPositionContext";

function MapGrid({ map }) {

  const { playerPos } = useContext(PlayerPositionContext);

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