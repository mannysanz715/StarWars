import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAllStarships } from "../../services/sw-apis"
const StarshipDetails = () => {
  const {id} = useParams() 

  const [spaceShips, setSpaceShips] = useState({})
  useEffect(()=>{
    const fetchStarships = async () =>{
      const spaceShipsList = await  getAllStarships()
      setSpaceShips(spaceShipsList)
    }
    fetchStarships()
  }, [])
  console.log(spaceShips.results[id])

  return (
    <>
      <h1>Details</h1>
    </>
)
}
<>
  <h1>Details</h1>
</>
export default StarshipDetails