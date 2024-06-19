import { useNavigate } from 'react-router-dom'

const MainIngredientsList = (props) => {

  console.log(props.recipes)

  let navigate = useNavigate()

  const showRecipe = (recipe) => {   
    navigate(`${recipe.idMeal}`)
  }

  return props.recipes ? (
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
  ) : <h2>No recipes found</h2>
}

export default MainIngredientsList
