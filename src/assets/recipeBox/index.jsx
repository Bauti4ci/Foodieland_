function RecipeBox({ recipe }) {
    console.log(recipe);

    return (
        <div>
            <div>
                <div>
                    <img src={recipe.image} alt="" />
                    <img src="/notFavorite.svg" alt="" />
                </div>
                <p>{recipe.title}</p>
            </div>
            <div>
                <span>
                    <img src="/timer.svg" alt="" />
                    <p>{recipe.readyInMinutes}Minutes</p>
                </span>
                <span>
                    <img src="/forknife.svg" alt="" />
                    {/* <p>{recipe.dishType[0]}</p> */}
                </span>
            </div>
        </div>
    )
}

export default RecipeBox