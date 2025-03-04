import { useState, useEffect } from "react"
import HotRecipes from "../hotRecipes"
import Categorie from '../categorie'
import RecipeBox from '../recipeBox'
import Post from '../post'
import Inbox from '../inbox'

function Home() {
    const [myRecipe, setMyRecipe] = useState([])

    useEffect(() => {
        fetch('https://api.spoonacular.com/recipes/random?number=2&apiKey=3050a0340db147f8aa71da16e4c24be9')
            .then(response => response.json())
            .then(recipes => setMyRecipe(recipes.recipes));
    });

    return (
        <>
            <HotRecipes />
            <section>
                <div>
                    <h2>Categories</h2>
                    <button>
                        <p>View All Categories</p>
                    </button>
                </div>
                <div>
                    <Categorie />
                </div>
            </section>
            <section>
                <div>
                    <h3>Simple and tasty recipes</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
                <div>
                    {myRecipe.map(recipe => {
                        return (<RecipeBox
                            key={recipe.id}
                            recipe={recipe} />)
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
                    <Post />
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
                {myRecipe.map(recipe => {
                    return (<RecipeBox
                        key={recipe.id}
                        recipe={recipe} />)
                })}

            </section>
            <Inbox />
        </>
    )
}

export default Home