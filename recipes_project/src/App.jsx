import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import RecipeDetails from './components/RecipeDetails'
import MainIngredientsList from './components/MainIngredientsList'


function App() {

  const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

  const [recipes, setRecipes] = useState([])

  const [input, setInput] = ('')

  useEffect(() => {
    const getRecipes = async () => {
      const res = await axios.get(`${BASE_URL}chicken`)
      setRecipes(res.data.meals)            
    }
    getRecipes()
  }, []) 
  // if we don't have this empty array then we get an infinite loop
  // why??
  
    
  
  // const getRecipes = async () => {
  //   const res = await axios.get(`${BASE_URL}chicken`)
  //   let recipesList = res.data
  //   setRecipes(recipesList)
  // }

  // const handleChange = (event) => {
  
  //   setInput(`${event.target.value}`)
  // }

  // const handleSubmit = () => {
    //getRecipes()
    //console.log(recipes)
    
  //   setRecipes(['poop'])
  //   console.log(recipes)
    
  // }

  // useEffect(() => {
  //   console.log(recipes)
  // })

  

  return (
    <div className='App'>
        {/* <header>
          <SearchBar/>
        </header> */}
        <main>
          <MainIngredientsList recipes={recipes}/>
        </main>
    </div>
  )
}

export default App
