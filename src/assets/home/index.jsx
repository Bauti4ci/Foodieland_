import { useState, useEffect } from "react"
import HotRecipes from "../hotRecipes"
import Categorie from '../categorie'
import RecipeBox from '../recipeBox'
import Post from '../post'
import Inbox from '../inbox'
import posts from '../post/posts.json'
import categories from '../categorie/categories.json'

function Home() {
    const [myRecipes, setMyRecipe] = useState([])
    const [myFavorites, setMyFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem('favorites')) || []
    })
    const hotRecipes = myRecipes.slice(0, 1)
    const mainRecipes = myRecipes.slice(1, 9)
    const otherRecipes = myRecipes.slice(9)

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

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(myFavorites));
    }, [myFavorites])


    return (
        <>
            {hotRecipes.map(recipe => {
                return (<HotRecipes
                    key={recipe.id}
                    recipe={recipe} />)
            })}

            <section>
                <div>
                    <h2>Categories</h2>
                    <button>
                        <p>View All Categories</p>
                    </button>
                </div>
                <div>
                    {categories.map(cate => {
                        return (<Categorie
                            key={cate.id}
                            cate={cate} />)
                    })}
                </div>
            </section>
            <section>
                <div>
                    <h3>Simple and tasty recipes</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
                <div>
                    {mainRecipes.map(recipe => {
                        return (<RecipeBox
                            key={recipe.id}
                            recipe={recipe}
                            myFavorites={myFavorites}
                            setMyFavorites={setMyFavorites} />)
                    })}

                </div>
            </section>
            <section>
                <div>
                    <h4>Everyone can be a chef in their own kitchen</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    <button><p>Learn More</p></button>
                </div>
                <img src='/ChefOne.png' alt="" />
            </section>
            <section>
                <div>
                    <h5>Check out @foodieland on Instagram</h5>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
                <div>
                    {posts.map(post => {
                        return (<Post
                            key={post.id}
                            post={post} />

                        )
                    })}

                </div>
                <button>
                    <p>Visit Our Instagram</p>
                    <img src="/instagramWhite.svg" alt="" />
                </button>
            </section>
            <section>
                <div>
                    <h6>Try this delicious recipe to make our day</h6>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
                {otherRecipes.map(recipe => {
                    return (<RecipeBox
                        key={recipe.id}
                        recipe={recipe}
                        myFavorites={myFavorites}
                        setMyFavorites={setMyFavorites} />)
                })}

            </section>
            <Inbox />
        </>
    )
}

export default Home