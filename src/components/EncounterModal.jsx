import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"


function EncounterModal() {

  const { setIsEncounter, monster } = useContext(GlobalContext);

  function handleClose() {
    setIsEncounter(false);
  }


  return (
    <>
      <div className="modal" id="encounterModal">

        <h1>A wild {monster.name} appeared!</h1>

        <button type="button" onClick={handleClose}>Close</button>

      </div>
    </>
  )
}

export default EncounterModal