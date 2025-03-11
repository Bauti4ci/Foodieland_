import { Link, useNavigate } from 'react-router-dom'
import './styles.css'


function RecipeBox({ recipe, setMyFavorites, url }) {

    let navigate = useNavigate();

    const favorites = () => {
        setMyFavorites(prevFavorites => {
            if (prevFavorites.includes(recipe.id)) {
                return prevFavorites.filter(id => id !== recipe.id)
            } else {
                return [...prevFavorites, recipe.id]
            }
        })
    }

    const noPhoto = '/noPhoto.jpg'

    return (
        <div className="recipesBox" id={recipe.id} onClick={() => navigate(url)}>
            <div>
                <img src={recipe.image ? recipe.image : noPhoto} alt="" className="gridPhoto" />
                <img src="/notFavorite.svg" alt="" className="saves heart" onClick={favorites} />
            </div>
            <p className="recipeName">{recipe.title}</p>
            <div className="recipesDetails">
                <span className='detail'>
                    <img src="/timer.svg" alt="" className="recipesIcons" />
                    <p>{recipe.readyInMinutes}Minutes</p>
                </span>
                <span className='detail'>
                    <img src="/forknife.svg" alt="" className="recipesIcons" />
                    <p>{recipe.dishTypes[0]}</p>
                </span>
            </div>
        </div>
    )
}

export default RecipeBox