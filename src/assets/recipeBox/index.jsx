import { Link, useNavigate } from 'react-router-dom'
import './styles.css'
import { useContext, useEffect, useState } from 'react';
import { FavoritesContext } from '../favoriteContext';


function RecipeBox({ recipe, url, }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const { myFavorites, setMyFavorites } = useContext(FavoritesContext)

    let navigate = useNavigate();

    useEffect(() => {
        setIsFavorite(myFavorites.includes(recipe.id));
    }, [myFavorites, recipe.id]);

    const favorites = (e) => {
        e.stopPropagation();

        if (isFavorite) {
            setMyFavorites(myFavorites.filter(id => id !== recipe.id));
        } else {
            setMyFavorites([...myFavorites, recipe.id]);
        }
    };

    const noPhoto = '/noPhoto.jpg'

    return (
        <div className="recipesBox" id={recipe.id} onClick={() => navigate(url)}>

            <img src={recipe.image ? recipe.image : noPhoto} alt="" className="gridPhoto" />
            <img src={isFavorite ? "/favorite.svg" : "/notFavorite.svg"} alt="" className={`saves heart`} onClick={favorites} />

            <p className="recipeName">{recipe.title}</p>
            <div className="recipesDetails">
                <span className='detail'>
                    <img src="/timer.svg" alt="" className="recipesIcons" />
                    <p>{recipe.readyInMinutes} Minutes</p>
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