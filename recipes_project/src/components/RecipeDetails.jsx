import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetails = (props) => {

  //console.log(props)

  const [recipe, setRecipe] = useState([])

  // this pulls the id from our url and allows us to find an object with it
  let id = useParams()

  //console.log(useParams())

  useEffect(() => {

    let selectedRecipe = props.recipes.find((recipe) => recipe.idMeal === id.idMeal)
      
      //console.log(id.idMeal)
      //parseInt(recipe.idMeal) === parseInt({id})

      setRecipe(selectedRecipe)
    
  }, [props.recipes, id])

  console.log(recipe)

  const recipeToArray = (recipe) => {

    let recipeArray = Object.entries(recipe)
    console.log(recipeArray)

    let ingredientsArray = recipeArray.filter((item) => item[0].includes('strIngredient') && item[1] !== '')
    console.log(ingredientsArray)

    let amountsArray = recipeArray.filter((item) => item[0].includes('strMeasure') && item[1] !== '')
    console.log(amountsArray)
  }
  

  // const makeIngredientArray = (array) => {
  //   return 
  // }

  recipeToArray(recipe)

  return recipe ? (
    <div className="detail">
      <h1>{recipe.strMeal}</h1>
      <h5>{recipe.strInstructions}</h5>
    </div>
 
  ) : <h2>Recipe not found</h2>
}

export default RecipeDetails