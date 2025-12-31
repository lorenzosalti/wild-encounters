import Header from "./components/Header"
import MapGrid from "./components/MapGrid"

import mapOne from "./maps/maps.js"


function App() {

  return (
    <>
      <Header />
      <MapGrid map={mapOne} />
    </>
  )
}

export default App
