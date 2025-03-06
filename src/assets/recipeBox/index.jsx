import { useState } from "react"
import './styles.css'


function RecipeBox({ recipe }) {
    const [myFavorites, setMyFavorites] = useState([])

    const favorites = () => {
        setMyFavorites(JSON.parse(localStorage.getItem('favorites')))
        const position = myFavorites.indexOf(recipe.id)

        if (position >= 0) {
            myFavorites.splice(position, 1)
        } else {
            myFavorites.push(recipe.id)
        }

        localStorage.setItem('favorites', JSON.stringify(myFavorites));
    }



    const noPhoto = '/noPhoto.jpg'

    return (
        <div className="recipesBox recipes" id={recipe.id}>
            <div>
                <div>
                    <img src={recipe.image ? recipe.image : noPhoto} alt="" className="gridPhoto" />
                    <img src="/notFavorite.svg" alt="" className="saves heart" onClick={favorites} />
                </div>
                <p className="recipeName">{recipe.title}</p>
            </div>
            <div className="recipesDetails">
                <span>
                    <img src="/timer.svg" alt="" className="recipesIcons" />
                    <p>{recipe.readyInMinutes}Minutes</p>
                </span>
                <span>
                    <img src="/forknife.svg" alt="" className="recipesIcons" />
                    <p>{recipe.dishTypes[0]}</p>
                </span>
            </div>
        </div>
    )
}

export default RecipeBox