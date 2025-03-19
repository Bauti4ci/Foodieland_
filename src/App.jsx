import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'
import Page from './assets/page';
import Home from './assets/home'
import RecipeDetails from './assets/recipeDetails'
import Contact from './assets/contactPage';
import BlogList from './assets/blogList';


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
          <Route path='/contact' element={<Contact setMyFavorites={setMyFavorites} myFavorites={myFavorites} />}
          />
          <Route path='/blog' element={<BlogList />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
