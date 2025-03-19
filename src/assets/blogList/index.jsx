import BlogRecipe from "../blogRecipes";
import Inbox from "../inbox";
import "./styles.css"
import { useState, useEffect } from "react";
import axios from "axios";
import MiniRecipes from "../miniRecipes";

function BlogList() {
    const [bListRecipes, setBListRecipes] = useState([]);
    const [bListMiniRecipes, setBListMiniRecipes] = useState([]);

    const getBListRecipes = async () => {
        const savedBListRecipes = JSON.parse(sessionStorage.getItem('jsonBlogListRecipes')) || [];

        if (savedBListRecipes.length === 0) {
            const response = await axios.get('https://api.spoonacular.com/recipes/random?number=6&apiKey=3050a0340db147f8aa71da16e4c24be9')
            sessionStorage.setItem('jsonBlogListRecipes', JSON.stringify(response.data.recipes))
            setBListRecipes(response.data.recipes)
        } else {
            setBListRecipes(savedBListRecipes)
        }
    }
    const getBListMiniRecipes = async () => {
        const savedBListMiniRecipes = JSON.parse(sessionStorage.getItem('jsonBlogListMiniRecipes')) || [];

        if (savedBListMiniRecipes.length === 0) {
            const response = await axios.get('https://api.spoonacular.com/recipes/random?number=3&apiKey=3050a0340db147f8aa71da16e4c24be9')
            sessionStorage.setItem('jsonBlogListMiniRecipes', JSON.stringify(response.data.recipes))
            setBListMiniRecipes(response.data.recipes)
        } else {
            setBListMiniRecipes(savedBListMiniRecipes)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)

        getBListRecipes()

    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)

        getBListMiniRecipes()

    }, []);
    return (
        <main>
            <section className="blogListSection">
                <h1>Blog & Article</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                <form action="" className="blogSearch">
                    <input type="text" placeholder="Search article, news or recipe..." />
                    <button className="btn">Search</button>
                </form>

            </section>

            <section className="blogList">
                <div className="recipeBlogList">
                    {bListRecipes.map(recipe => {
                        return (<BlogRecipe
                            key={recipe.id}
                            recipe={recipe}
                            url={`/recipe/${recipe.id}`}
                        />)
                    })}
                </div>

                <div className="otherRecipesInDetails">
                    <div className="otherRecipesInSection">
                        {bListMiniRecipes.map(recipe => {
                            return (<MiniRecipes
                                key={recipe.id}
                                recipe={recipe}
                                url={`/recipe/${recipe.id}`}
                            />)
                        })}
                    </div>
                    <img src="/ad.png" alt="" className="ads" />
                </div>
            </section>

            <Inbox />


        </main>
    )
}

export default BlogList