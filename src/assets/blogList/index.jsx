import BlogRecipe from "../blogRecipes";
import Inbox from "../inbox";
import "./styles.css"
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import MiniRecipes from "../miniRecipes";
import BlogPagination from "../blogPagination";

function BlogList() {
    const [bListRecipes, setBListRecipes] = useState([]);
    const [bListMiniRecipes, setBListMiniRecipes] = useState([]);
    const [pages, setPages] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true);

    const recipesNumber = 6

    const loaders = [0, 1, 2, 3, 4, 5];



    const getBListRecipes = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=${recipesNumber}&offset=${(page - 1) * recipesNumber}&query=${search}&apiKey=178a79a57ae64393823744c2e5e76fa5`)
            setBListRecipes(response.data.results)
            const pagesNumber = response.data.totalResults / recipesNumber
            const totalPages = []
            for (let i = 1; i <= pagesNumber; i++) {
                totalPages.push(i)
            }
            setPages(totalPages)
        } catch (error) {
            console.error("Error loading recipes:", error)
        } finally {
            setLoading(false)
        }

    }

    const submitSearch = (event) => {
        event.preventDefault()
        getBListRecipes()
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
        /*  window.scrollTo(0, 0) */

        getBListRecipes()

    }, [page]);

    useEffect(() => {
        window.scrollTo(0, 0)

        getBListMiniRecipes()

    }, []);
    return (
        <main>
            <section className="blogListSection">
                <h1>Blog & Article</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                <form onSubmit={submitSearch} className="blogSearch">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search article, news or recipe..."
                    />
                    <button className="btn" type="submit">Search</button>
                </form>

            </section>

            <section className="blogList">
                <div className="recipeBlogList">
                    {loading
                        ? loaders.map((index) => (
                            <div key={index} className="blogRecipeLoader">
                            </div>
                        ))
                        : bListRecipes.map((recipe) => (
                            <BlogRecipe
                                key={recipe.id}
                                recipe={recipe}
                                url={`/recipe/${recipe.id}`}
                            />
                        ))}
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

            <BlogPagination
                pages={pages}
                page={page}
                setPage={setPage}
            />

            <Inbox />


        </main>
    )
}

export default BlogList