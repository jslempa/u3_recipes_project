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

  return recipe ? (
    <div className="detail">
      <h1>{recipe.strMeal}</h1>
      <h5>{recipe.strInstructions}</h5>
    </div>
    // <div className="detail">
    //   <div className="detail-header">
    //     <img src={boat.img} alt={boat.name} />
    //     <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    //       <h1>{boat.name}</h1>
    //     </div> 
    //   </div>
    //   <div className="info-wrapper">
    //     <div style={{display: 'flex', justifyContent: 'space-between'}}>
    //       <h3>Price: ${boat.price}</h3>
    //       <h3>Boat ID: {boat.id}</h3>
    //     </div>
    //     <p>{boat.description}</p>
    //   </div>
    // </div>
  ) : <h2>Something is not working</h2>
}

export default RecipeDetails