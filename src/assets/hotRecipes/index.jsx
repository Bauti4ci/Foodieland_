import Author from '../author';
import "./styles.css"
import { Link, useNavigate } from 'react-router-dom'


function HotRecipes({ recipe, url }) {

    let navigate = useNavigate();

    const noPhoto = '/noPhoto.jpg'

    return (
        <>
            <article className={`start hiddenMobile`} id={recipe.id} style={{
                backgroundImage: `url(${recipe.image ? recipe.image : noPhoto})`
            }}>
                <div className="leftstart">
                    <span className="firstbtn">
                        <img src="/pergamino.png" alt="" />
                        <p>Hot Recipes</p>
                    </span>
                    <h1>{recipe.title}</h1>
                    <p className="subH">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    <div className="labels">
                        <span className="secondbtn">
                            <img src="/timer.svg" alt="" />
                            <p>{recipe.readyInMinutes} Minutes</p>
                        </span>
                        <span className="secondbtn">
                            <img src="/forknife.svg" alt="" />
                            <p>{recipe.dishTypes[0]}</p>
                        </span>
                    </div>
                    <div className="startFooter">
                        <Author
                            classType={`author flex`}
                        />
                        <button className="btn" onClick={() => navigate(url)}>
                            <p>View Recipe</p>
                            <img src="/playIcon.svg" alt="" />
                        </button>
                    </div>
                    <img src="/Badge.png" alt="" className="badge" />
                </div>
            </article>

            <div className="mobileStart" id={recipe.id}>
                <div className="startImgDiv">
                    <img src={recipe.image ? recipe.image : noPhoto} className="mobileStartImg" />
                    <img src="/Badge.png" alt="" className="mobileBadge" />
                </div>
                <h1>{recipe.title}</h1>
                <p className="startContext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos iste
                    laboriosam consequatur
                    pariatur error obcaecati placeat unde nihil facilis!</p>
                <div className="mobileDetails mobileS">
                    <span>
                        <img src="/timer.svg" alt="" className="mobileIcons" />
                        <p>{recipe.readyInMinutes} Minutes</p>
                    </span>
                    <span>
                        <img src="/forknife.svg" alt="" className="mobileIcons" />
                        <p>{recipe.dishTypes[0]}</p>
                    </span>
                </div>
                <div className="startFooter">
                    <Author
                        classType={`author flex`}
                    />
                    <button className="btn" onClick={() => navigate(url)}>
                        <p>View recipe</p> <img src="/playIcon.svg" alt="" />
                    </button>

                </div>

            </div>`
        </>
    )
}

export default HotRecipes