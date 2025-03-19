import { useState, useEffect } from "react"
import axios from "axios"
import HotRecipes from "../hotRecipes"
import Categorie from '../categorie'
import RecipeBox from '../recipeBox'
import Post from '../post'
import Inbox from '../inbox'
import posts from '../post/posts.json'
import categories from '../categorie/categories.json'
import "./styles.css"


function Home() {
    const [myRecipes, setMyRecipes] = useState([])

    const hotRecipes = myRecipes.slice(0, 1)
    const mainRecipes = myRecipes.slice(1, 9)
    const otherRecipes = myRecipes.slice(9)

    /*  useEffect(() => {
 
         const savedRecipes = JSON.parse(sessionStorage.getItem('jsonRecipes')) || [];
 
         if (savedRecipes.length === 0) {
             fetch('https://api.spoonacular.com/recipes/random?number=17&apiKey=178a79a57ae64393823744c2e5e76fa5')
                 .then(response => response.json())
                 .then(recipes => {
                     sessionStorage.setItem('jsonRecipes', JSON.stringify(recipes.recipes))
                     setMyRecipes(recipes.recipes)
                 });
         } else {
             setMyRecipes(savedRecipes)
         }
     }, []); */

    const getRecipes = async () => {
        const savedRecipes = JSON.parse(sessionStorage.getItem("jsonRecipes")) || [];


        /*implementar try catch*/
        if (savedRecipes.length === 0) {
            const response = await axios.get("https://api.spoonacular.com/recipes/random?number=17&apiKey=178a79a57ae64393823744c2e5e76fa5");
            sessionStorage.setItem("jsonRecipes", JSON.stringify(response.data.recipes));
            setMyRecipes(response.data.recipes);
        } else {
            setMyRecipes(savedRecipes);
        }
    };

    useEffect(() => {
        getRecipes()
    }, []);


    return (
        <main>
            <section className="startSection">
                {hotRecipes.map(recipe => {
                    return (<HotRecipes
                        key={recipe.id}
                        recipe={recipe}
                        url={`/recipe/${recipe.id}`} />)
                })}
            </section>

            <section className="categories">
                <div className="topCateg">
                    <h2>Categories</h2>
                    <button>
                        <p>View All Categories</p>
                    </button>
                </div>
                <div className="footerCateg">
                    {categories.map(cate => {
                        return (<Categorie
                            key={cate.id}
                            cate={cate} />)
                    })}
                </div>
            </section>
            <section className="recipesSec">
                <div className="recipesTop">
                    <h3 className="recipesH3">Simple and tasty recipes</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
                <div className="recipesGrid">
                    {mainRecipes.map((recipe) => {
                        return (<RecipeBox
                            key={recipe.id}
                            recipe={recipe}
                            url={`/recipe/${recipe.id}`}
                        />)
                    })}
                    <img src="/ad.png" className="ad" />
                </div>
            </section>
            <section className="learnMore" id="learn">
                <div className="learnMoreLeft">
                    <h4>Everyone can be a<br /> chef in their own kitchen</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do<br />eiusmod tempor incididunt ut
                        labore et dolore magna aliqut enim <br /> ad minim </p>
                    <button className="btn">
                        <p>Learn More</p>
                    </button>
                </div>
                <img src="/ChefOne.png" alt="" className="learnMoreRight" />
                <button className={`hidden btn`}>
                    <p>Learn More</p>
                </button>
            </section>
            <div className="postSection">
                <section className="posts">
                    <div className="topPosts">
                        <h5>Check out @foodieland on Instagram</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    </div>
                    <div className="postFlex">
                        {posts.map(post => {
                            return (<Post
                                key={post.id}
                                post={post} />

                            )
                        })}

                    </div>
                    <button className="btn">
                        <p>Visit Our Instagram</p>
                        <img src="/instagramWhite.svg" alt="" />
                    </button>
                </section>
            </div>
            <section className="otherRecipes">
                <div className="otherRecipesTop">
                    <h6 className="homeH6">Try this delicious recipe to make our day</h6>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
                <div className="otherRecipesGrid">
                    {otherRecipes.map(recipe => {
                        return (<RecipeBox
                            key={recipe.id}
                            recipe={recipe}
                            url={`/recipe/${recipe.id}`}
                        />)
                    })}
                </div>


            </section>
            <Inbox />
        </main>
    )
}

export default Home