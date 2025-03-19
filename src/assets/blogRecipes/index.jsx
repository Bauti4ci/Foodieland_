import "./styles.css"
import { useNavigate } from "react-router-dom";

function BlogRecipe({ recipe, url }) {

    let navigate = useNavigate();

    return (
        <article className="blogRecipe" id={recipe.id} onClick={() => navigate(url)}>
            <img src={recipe.image} alt="" className="blogRecipeImg" />
            <div className="leftBlogRecipe">
                <div className="blogInfo">
                    <p className="blogRecipeTittle">{recipe.title}</p>
                    <p className="blogRecipeContext">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
                </div>
                <div className="blogAuthor">
                    <span>
                        <img src="/johnSmithPhoto.png" alt="" />
                        <p className="name">John Smith</p>
                    </span>
                    <hr />
                    <p className="date">12 November 2021</p>
                </div>
            </div>
        </article>
    )
}

export default BlogRecipe