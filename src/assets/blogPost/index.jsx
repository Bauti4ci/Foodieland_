import RecipeBox from "../recipeBox";
import Inbox from "../inbox";
import "./styles.css"
import { useState, useEffect } from "react";
import axios from "axios";

function blogPost() {
    const [bPostRecipes, setBPostRecipes] = useState([]);

    const getBPostRecipes = async () => {
        const savedBPostRecipes = JSON.parse(sessionStorage.getItem('jsonBlogPostRecipes')) || [];

        if (savedBPostRecipes.length === 0) {
            const response = await axios.get('https://api.spoonacular.com/recipes/random?number=4&apiKey=3050a0340db147f8aa71da16e4c24be9')
            sessionStorage.setItem('jsonBlogPostRecipes', JSON.stringify(response.data.recipes))
            setBPostRecipes(response.data.recipes)
        } else {
            setBPostRecipes(savedBPostRecipes)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)

        getBPostRecipes()

    }, []);
    return (
        <>
            <Inbox />

            <h6 className="detailsH6">Check out the delicious recipe</h6>
            <div className="otherRecipesGrid">
                {bPostRecipes.map(recipe => {
                    return (<RecipeBox
                        key={recipe.id}
                        recipe={recipe}
                        url={`/recipe/${recipe.id}`}
                    />)
                })}
            </div>

        </>
    )
}

export default blogPost