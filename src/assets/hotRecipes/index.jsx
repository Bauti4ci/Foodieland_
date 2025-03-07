import Author from '../author';

function HotRecipes({ recipe }) {




    return (
        <>
            <section>
                <div>
                    <div>
                        <span>
                            <img src="/pergamino.png" alt="" />
                            <p>Hot Recipes</p>
                        </span>
                        <h1>{recipe.title}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                        <div>
                            <span>
                                <img src="/timer.svg" alt="" />
                                <p>{recipe.readyInMinutes}Minutes</p>
                            </span>
                            <span>
                                <img src="/forknife.svg" alt="" />
                                <p>{recipe.dishTypes[0]}</p>
                            </span>
                        </div>
                        <div>
                            <Author />
                            <button>
                                <p>View Recipe</p>
                                <img src="/playIcon.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HotRecipes