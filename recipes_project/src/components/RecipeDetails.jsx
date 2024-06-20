import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetails = (props) => {

  //console.log(props)

  const [recipe, setRecipe] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [amounts, setAmounts] = useState([])

  const recipeToArray = (recipe) => {

    let recipeArray = Object.entries(recipe)
    console.log(recipeArray)

    let ingredientsArray = recipeArray.filter((item) => item[0].includes('strIngredient') && item[1] !== '')
    
    if (ingredientsArray) {
      setIngredients(ingredientsArray)
      console.log(ingredientsArray)  
    } else {
      console.log('Ingredients not set')
    }  

    let amountsArray = recipeArray.filter((item) => item[0].includes('strMeasure') && item[1] !== '')
    
    if(amountsArray) {
      setAmounts(amountsArray)
      console.log(amountsArray)
    } else {
      console.log('Amounts not set')
    }
  }

  // this pulls the id from our url and allows us to find an object with it
  let id = useParams()

  //console.log(useParams())

  useEffect(() => {

    let selectedRecipe = props.recipes.find((recipe) => recipe.idMeal === id.idMeal)
      
      //console.log(id.idMeal)
      //parseInt(recipe.idMeal) === parseInt({id})

    if (selectedRecipe) {
      setRecipe(selectedRecipe)
      //console.log(selectedRecipe)
      recipeToArray(selectedRecipe)
      // console.log(ingredients) 
      // console.log(amounts)   
    } else {
      console.log('Recipe not set')
    }
    
  }, [props.recipes, id])

  //console.log(recipe)   

  

  

  // recipeToArray(recipe) infinite loop here
  

  return recipe ? (
    <div className="detail">
      <h1>{recipe.strMeal}</h1>
      <h5>{recipe.strInstructions}</h5>
    </div>
 
  ) : <h2>Recipe not found</h2>
}

export default RecipeDetails