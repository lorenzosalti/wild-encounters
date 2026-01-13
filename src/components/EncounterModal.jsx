import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"


function EncounterModal() {

  const { setIsEncounter, monster } = useContext(GlobalContext);

  function handleClose() {
    setIsEncounter(false);
  }

  function handleCatch(monster) {
    if (Math.random() < monster.catchRate) {
      console.log(`Yes! ${monster.name} was caugth!`);
      setIsEncounter(false);
    } else {
      console.log(`Oh no! ${monster.name} got out! Unlucky`);
    };
  }


  return (
    <>
      <div className="modal" id="encounterModal">

        <h1>A wild {monster.name} appeared!</h1>

        <button type="button" onClick={() => handleCatch(monster)}>Throw Ball</button>
        <button type="button" onClick={handleClose}>Run!</button>

      </div>
    </>
  )
}

export default EncounterModal