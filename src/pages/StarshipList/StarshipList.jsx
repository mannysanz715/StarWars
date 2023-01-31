import { useEffect, useState } from "react"
import { getAllStarships } from "../../services/sw-apis"
import Ship from "../../components/Ship/Ship"
import { Link } from "react-router-dom"






const StarshipList = (props) => {
  const [spaceShips, setSpaceShips] = useState({})
  useEffect(()=>{
    const fetchStarships = async () =>{
      const spaceShipsList = await  getAllStarships()
      setSpaceShips(spaceShipsList)
    }
    fetchStarships()
  }, [])
  console.log(spaceShips)
  return (
    <>
      <h1>Starships</h1>
      {spaceShips.results?.map((ship, index) =>
        <div key={index}>
          <Link to={`/ship/${index}`} >
            <Ship ship={ship}/>
          </Link>
        </div>
        )}
    </>
)
}

export default StarshipList