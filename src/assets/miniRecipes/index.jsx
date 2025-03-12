import { Link, useNavigate } from 'react-router-dom'
import './styles.css'

function MiniRecipes({ recipe, url }) {

    let navigate = useNavigate();

    const noPhoto = '/noPhoto.jpg'

    return (
        <div className="miniRecipes" onClick={() => navigate(url)}>
            <img src={recipe.image ? recipe.image : noPhoto} alt="" />
            <span>
                <p className="miniRecipesName">{recipe.title}</p>
                <p className="miniRecipesAuthor">By Andreas Paula</p>
            </span>
        </div>
    )
}

export default MiniRecipes