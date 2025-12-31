import { useState } from "react"


function Player() {

  const [playerPos, setPlayerPos] = useState({ x: 3, y: 0 })

  return (
    <div className="player"></div>
  )
}

export default Player