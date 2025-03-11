import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'
import Page from './assets/page';
import Home from './assets/home'
import RecipeDetails from './assets/recipeDetails'


function App() {
  const [myRecipes, setMyRecipe] = useState([])

  useEffect(() => {

    const savedRecipes = JSON.parse(sessionStorage.getItem('jsonRecipes')) || [];

    if (savedRecipes.length === 0) {
      fetch('https://api.spoonacular.com/recipes/random?number=17&apiKey=3050a0340db147f8aa71da16e4c24be9')
        .then(response => response.json())
        .then(recipes => {
          sessionStorage.setItem('jsonRecipes', JSON.stringify(recipes.recipes))
          setMyRecipe(recipes.recipes)
        });
    } else {
      setMyRecipe(savedRecipes)
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Page />}>
          <Route index element={<Home myRecipes={myRecipes} />}
          />
          <Route
            path='/recipe/:id'
            element={<RecipeDetails myRecipes={myRecipes} />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
