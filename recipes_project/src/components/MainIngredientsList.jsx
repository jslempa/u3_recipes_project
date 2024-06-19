import { useNavigate } from 'react-router-dom'

const MainIngredientsList = (props) => {

  let navigate = useNavigate()

  // Navigate and Link are very similar in that they bring us to another part of our SPA (single page application)

  // Link is an object -> it makes anything a Link, to Link

  // Navigate (useNavigate) is a Method, that runs in an onClick function

  // we can do any JS logic/functionality BEFORE we link there
  
// this just turns every Boat item into a Link basically
// but if we wanted, we could add a lot more power to it
  const showBoat = (boat) => {
   
    navigate(`${boat.id}`)

  }

  return (
    <div className="boat-grid">
      {
      props.boats.map((boat) => (
        <div className="boat-card" onClick={() => showBoat(boat)} key={boat.id}>
          <img style={{ display: 'block' }} src={boat.img} alt={boat.name} />
          <h3>{boat.name}</h3>
        </div>
      ))}
    </div>
    
  )
}

export default MainIngredientsList
