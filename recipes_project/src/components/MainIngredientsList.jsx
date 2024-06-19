import { useNavigate } from 'react-router-dom'

const MainIngredientsList = (props) => {

  console.log(props.recipes)

  let navigate = useNavigate()

  // Navigate and Link are very similar in that they bring us to another part of our SPA (single page application)

  // Link is an object -> it makes anything a Link, to Link

  // Navigate (useNavigate) is a Method, that runs in an onClick function

  // we can do any JS logic/functionality BEFORE we link there
  
// this just turns every Boat item into a Link basically
// but if we wanted, we could add a lot more power to it
  const showRecipe = (recipe) => {
   
    navigate(`${recipe.idMeal}`)

  }

  return (
    <div className="recipe-grid">
      <h1>Recipes</h1>
      {
      props.recipes.map((recipe) => (
        <div className="recipe-card" onClick={() => showRecipe(recipe)} key={recipe.idMeal}>
          <h3>{recipe.strMeal}</h3>
          <img style={{ display: 'block' }} src={recipe.strMealThumb} alt={recipe.strMeal}/>          
        </div>
      ))}
    </div>
    
  )
}

export default MainIngredientsList
