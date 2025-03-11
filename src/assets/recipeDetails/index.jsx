import { useParams } from "react-router";
import './styles.css'
import { useEffect, useState } from "react";

function RecipeDetails({ myRecipes }) {
    let { id } = useParams();
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        let detailsRecipe = myRecipes.find((recipe) => recipe.id === Number(id));

        if (!detailsRecipe) {
            const savedDetails = JSON.parse(sessionStorage.getItem('jsonRecipes')) || [];
            detailsRecipe = savedDetails.find((recipe) => recipe.id === Number(id));
        } else {
            setRecipe(detailsRecipe);
        }

    }, [id, myRecipes]);


    return (
        <main>
            <section className="header">
                <div className="title">
                    <h1>{recipe.title}</h1>
                    <div className="details">
                        <div className="author hide">
                            <img src="Imagenes/start/fotoJohnSmith.png" alt="" />
                            <div className="authorName">
                                <p className="name">John Smith</p>
                                <p className="date">15 March 2022</p>
                            </div>
                        </div>
                        <div className="detailsRight">
                            <span className="dividers hide"></span>
                            <div className="detail">
                                <img src="/timer.svg" alt="" className="icons" />
                                <div className="detailContext">
                                    <p className="timeType">PREP TIME</p>
                                    <p className="time">{recipe.preparationMinutes}</p>
                                </div>
                            </div>
                            <span className="dividers"></span>
                            <div className="detail">
                                <img src="/timer.svg" alt="" className="icons" />
                                <div className="detailContext">
                                    <p className="timeType">COCK TIME</p>
                                    <p className="time">{recipe.cookingMinutes}</p>
                                </div>
                            </div>
                            <span className="dividers"></span>
                            <div className="detail">
                                <img src="/forknife.svg" alt="" className="icons" />
                                <p className="foodType">{recipe.dishTypes[0]}</p>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="options">
                    <div className="author hidden">
                        <img src="Imagenes/start/fotoJohnSmith.png" alt="" />
                        <div className="authorName">
                            <p className="name">John Smith</p>
                            <p className="date">15 March 2022</p>
                        </div>
                    </div>
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

            {/*  <section className="recipePincipal">
                <div className="principalHeader">
                    <div className="recipeVid">
                        <img src="{recipe.image ? recipe.image : noPhoto}" alt="" className="recipeVidImg" />
                        <img src="Imagenes/recipeDetailsPage/Group 884.png" alt="" className="recipeVidIcon" />
                    </div>
                    <div className="nutrition">
                        <div className="nutritionBox">
                            <h2>Nutrition Information</h2>
                            <span className="nutData">
                                <p className="nutDataType">Calories</p>
                                <p className="nutDataValue">{recipe.nutrition.nutrients.filter((value, index, array) => {
                                    return value.name == 'Calories'
                                })[0].amount} kcal </p>
                            </span>
                            <hr />
                            <span className="nutData">
                                <p className="nutDataType">Total Fat</p>
                                <p className="nutDataValue">{recipe.nutrition.nutrients.filter((value, index, array) => {
                                    return value.name == 'Fat'
                                })[0].amount} g </p>
                            </span>
                            <hr />
                            <span className="nutData">
                                <p className="nutDataType">Proteins</p>
                                <p className="nutDataValue">{recipe.nutrition.nutrients.filter((value, index, array) => {
                                    return value.name == 'Protein'
                                })[0].amount} g </p>
                            </span>
                            <hr />
                            <span className="nutData">
                                <p className="nutDataType">Carbohydrates</p>
                                <p className="nutDataValue">{recipe.nutrition.nutrients.filter((value, index, array) => {
                                    return value.name == 'Carbohydrates'
                                })[0].amount} g</p>
                            </span>
                            <hr />
                            <span className="nutData">
                                <p className="nutDataType">Cholesterol</p>
                                <p className="nutDataValue">{recipe.nutrition.nutrients.filter((value, index, array) => {
                                    return value.name == 'Cholesterol'
                                })[0].amount} mg</p>
                            </span>
                            <hr />
                        </div>
                    </div>
                </div>
                <p className="principalDescription">{recipe.summary}</p>
            </section>


            <section className="ingredients">
                <div className="list">
                    <h3>Ingredients</h3>
                    <div className="ing">
                        <p>For main dish</p>
                        <ul className="ingridientsList">
                            {recipe.extendedIngredients.map(ingredient => {
                                return (
                                    <li>
                                        <span>
                                            <input type="checkbox" name="" id="check" className="check" />
                                            <label for="check">{ingredient.original}</label>
                                        </span>
                                        <hr />
                                    </li>)
                            })}

                        </ul>
                    </div>
                </div>
                <div className="otherRecipesInDetails">
                    <div className="otherRecipesInSection">

                    </div>
                    <img src="Imagenes/recipies/Ads.png" alt="" className="ads" />
                </div>
            </section> */}
        </main>
    )
}

export default RecipeDetails