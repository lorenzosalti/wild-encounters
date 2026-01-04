import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"


function EncounterModal() {

  const { setIsEncounter } = useContext(GlobalContext);

  function handleClose() {
    setIsEncounter(false);
  }


  return (
    <>
      <div className="modal" id="encounterModal">

        <h1>ENCOUNTER</h1>

        <button type="button" onClick={handleClose}>Close</button>

      </div>
    </>
  )
}

export default EncounterModal