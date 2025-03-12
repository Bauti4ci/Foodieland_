import Author from '../author';
import "./styles.css"
import { Link, useNavigate } from 'react-router-dom'


function HotRecipes({ recipe, url }) {

    let navigate = useNavigate();



    return (
        <>
            <article className='start' id={recipe.id} style={{
                backgroundImage: `url(${recipe.image ? recipe.image : noPhoto})`
            }}>
                <div class="leftstart">
                    <span class="firstbtn">
                        <img src="/pergamino.png" alt="" />
                        <p>Hot Recipes</p>
                    </span>
                    <h1>{recipe.title}</h1>
                    <p class="subH">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    <div class="labels">
                        <span class="secondbtn">
                            <img src="/timer.svg" alt="" />
                            <p>{recipe.readyInMinutes}Minutes</p>
                        </span>
                        <span class="secondbtn">
                            <img src="/forknife.svg" alt="" />
                            <p>{recipe.dishTypes[0]}</p>
                        </span>
                    </div>
                    <div class="startFooter">
                        <Author
                            classType={`author flex`}
                        />
                        <button className="btn" onClick={() => navigate(url)}>
                            <p>View Recipe</p>
                            <img src="/playIcon.svg" alt="" />
                        </button>
                    </div>
                    <img src="/Badge.png" alt="" class="badge" />
                </div>
            </article>
        </>
    )
}

export default HotRecipes