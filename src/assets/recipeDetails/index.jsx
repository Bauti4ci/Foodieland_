import { useParams } from "react-router";
import axios from "axios"
import './styles.css'
import { useEffect, useState } from "react";
import RecipeBox from '../recipeBox'
import Inbox from '../inbox'
import Author from '../author';
import MiniRecipes from "../miniRecipes";

function RecipeDetails() {
    let { id } = useParams();
    const [myRecipe, setMyRecipe] = useState({});
    const [secRecipes, setSecRecipes] = useState([]);

    const miniSideRecipes = secRecipes.slice(0, 3)
    const otherRecipes = secRecipes.slice(3)

    const noPhoto = '/noPhoto.jpg'

    const getRecipeInfo = async () => {

        /*implementar try catch*/
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=178a79a57ae64393823744c2e5e76fa5`)
        setMyRecipe(response.data)
    }

    useEffect(() => {
        window.scrollTo(0, 0);

        getRecipeInfo()

        /* fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=178a79a57ae64393823744c2e5e76fa5`)
            .then(response => response.json())
            .then(recipe => {
                setMyRecipe(recipe)
            }); */

    }, [id]);

    const getSecRecipes = async () => {
        const savedSecRecipes = JSON.parse(sessionStorage.getItem('jsonSecRecipes')) || [];

        /*implementar try catch */
        if (savedSecRecipes.length === 0) {
            const response = await axios.get('https://api.spoonacular.com/recipes/random?number=7&apiKey=3050a0340db147f8aa71da16e4c24be9')
            sessionStorage.setItem('jsonSecRecipes', JSON.stringify(response.data.recipes))
            setSecRecipes(response.data.recipes)
        } else {
            setSecRecipes(savedSecRecipes)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)

        getSecRecipes()

        /* const savedSecRecipes = JSON.parse(sessionStorage.getItem('jsonSecRecipes')) || [];

        if (savedSecRecipes.length === 0) {
            fetch('https://api.spoonacular.com/recipes/random?number=7&apiKey=3050a0340db147f8aa71da16e4c24be9')
                .then(response => response.json())
                .then(recipes => {
                    sessionStorage.setItem('jsonSecRecipes', JSON.stringify(recipes.recipes))
                    setSecRecipes(recipes.recipes)
                });
        } else {
            setSecRecipes(savedSecRecipes)
        } */
    }, []);

    return (
        <main className="detailsMain">
            <section className="header">
                <div className="title">
                    <h1>{myRecipe.title}</h1>
                    <div className="details">
                        <Author
                            classType={`author hide`}
                        />
                        <div className="detailsRight">
                            <span className="dividers hide"></span>
                            <div className="detail">
                                <img src="/timer.svg" alt="" className="icons" />
                                <div className="detailContext">
                                    <p className="timeType">PREP TIME</p>
                                    <p className="time">{myRecipe.preparationMinutes} Minutes</p>
                                </div>
                            </div>
                            <span className="dividers"></span>
                            <div className="detail">
                                <img src="/timer.svg" alt="" className="icons" />
                                <div className="detailContext">
                                    <p className="timeType">COCK TIME</p>
                                    <p className="time">{myRecipe.cookingMinutes} Minutes</p>
                                </div>
                            </div>
                            <span className="dividers"></span>
                            <div className="detail">
                                <img src="/forknife.svg" alt="" className="icons" />
                                <p className="foodType">{myRecipe?.dishTypes?.[0]}</p>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="options">
                    <Author
                        classType={`hidden author`}
                    />
                    <div className="buttons">
                        <span className="interaction">
                            <button className="optionsBtn">
                                <img src="/print.png" alt="" />
                            </button>
                            <p>PRINT</p>
                        </span>
                        <span className="interaction">
                            <button className="optionsBtn">
                                <img src="/share.png" alt="" />
                            </button>
                            <p>SHARE</p>
                        </span>
                    </div>
                </div>
            </section>

            <section className="recipePincipal">
                <div className="principalHeader">
                    <div className="recipeVid">
                        <img src={myRecipe.image ? myRecipe.image : noPhoto} alt="" className="recipeVidImg" />
                        <img src="/videoPlayIcon.png" alt="" className="recipeVidIcon" />
                    </div>
                    <div className="nutrition">
                        <div className="nutritionBox">
                            <h2>Nutrition Information</h2>
                            <span className="nutData">
                                <p className="nutDataType">Calories</p>
                                <p className="nutDataValue">{myRecipe?.nutrition?.nutrients?.filter((value, index, array) => {
                                    return value.name == 'Calories'
                                })[0].amount} kcal </p>
                            </span>
                            <hr />
                            <span className="nutData">
                                <p className="nutDataType">Total Fat</p>
                                <p className="nutDataValue">{myRecipe?.nutrition?.nutrients?.filter((value, index, array) => {
                                    return value.name == 'Fat'
                                })[0].amount} g </p>
                            </span>
                            <hr />
                            <span className="nutData">
                                <p className="nutDataType">Proteins</p>
                                <p className="nutDataValue">{myRecipe?.nutrition?.nutrients?.filter((value, index, array) => {
                                    return value.name == 'Protein'
                                })[0].amount} g </p>
                            </span>
                            <hr />
                            <span className="nutData">
                                <p className="nutDataType">Carbohydrates</p>
                                <p className="nutDataValue">{myRecipe?.nutrition?.nutrients?.filter((value, index, array) => {
                                    return value.name == 'Carbohydrates'
                                })[0].amount} g</p>
                            </span>
                            <hr />
                            <span className="nutData">
                                <p className="nutDataType">Cholesterol</p>
                                <p className="nutDataValue">{myRecipe?.nutrition?.nutrients?.filter((value, index, array) => {
                                    return value.name == 'Cholesterol'
                                })[0].amount} mg</p>
                            </span>
                            <hr />
                        </div>
                    </div>
                </div>
                <p className="principalDescription">{myRecipe.summary}</p>
            </section>


            <section className="ingredients">
                <div className="list">
                    <h3 className="detailsH3">Ingredients</h3>
                    <div className="ing">
                        <p>For main dish</p>
                        <ul className="ingridientsList">
                            {myRecipe?.extendedIngredients?.map((ingredient, index) => {
                                return (
                                    <li key={index}>
                                        <span>
                                            <input type="checkbox" name="" id={index} className="check" />
                                            <label htmlFor={index}>{ingredient.original}</label>
                                        </span>
                                        <hr />
                                    </li>)
                            })}

                        </ul>
                    </div>
                </div>
                <div className="otherRecipesInDetails">
                    <div className="otherRecipesInSection">
                        {miniSideRecipes.map(recipe => {
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
            <section className="otherRecipes">
                <h6 className="detailsH6">You may also like this recipes</h6>
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
        </main>
    )
}

export default RecipeDetails