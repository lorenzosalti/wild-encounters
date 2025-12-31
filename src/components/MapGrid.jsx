

function MapGrid({ map }) {

  return (
    <div className="map-grid">

      {map.map((row, y) => {

        return (
          <div className="map-row" key={`${y}`}>

            {row.map((tile, x) => {

              return <div className={`map-tile tile-${tile}`} key={`${x}-${y}`}></div>;

            })}

          </div>)

      })}

    </div>

  )

}

export default MapGrid