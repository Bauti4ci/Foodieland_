import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'
import Page from './assets/page';
import Home from './assets/home'
import RecipeDetails from './assets/recipeDetails'


function App() {
  const [myFavorites, setMyFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) || []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(myFavorites));
  }, [myFavorites])

  return (
    <>
      <Routes>
        <Route path='/' element={<Page />}>
          <Route index element={<Home setMyFavorites={setMyFavorites} myFavorites={myFavorites} />}
          />
          <Route
            path='/recipe/:id'
            element={<RecipeDetails setMyFavorites={setMyFavorites} myFavorites={myFavorites} />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
