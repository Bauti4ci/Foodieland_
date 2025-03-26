import RecipeBox from "../recipeBox";
import Inbox from "../inbox";
import "./styles.css"
import { useState, useEffect } from "react";
import axios from "axios";

function BlogPost() {
    const [bPostRecipes, setBPostRecipes] = useState([]);

    const getBPostRecipes = async () => {
        const savedBPostRecipes = JSON.parse(sessionStorage.getItem('jsonBlogPostRecipes')) || [];

        if (savedBPostRecipes.length === 0) {
            const response = await axios.get('https://api.spoonacular.com/recipes/random?number=4&apiKey=3050a0340db147f8aa71da16e4c24be9')
            sessionStorage.setItem('jsonBlogPostRecipes', JSON.stringify(response.data.recipes))
            setBPostRecipes(response.data.recipes)
        } else {
            setBPostRecipes(savedBPostRecipes)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)

        getBPostRecipes()

    }, []);
    return (
        <main>
            <section className="blogPostTop">
                <h1>Full Guide to Becoming a Professional Chef</h1>
                <div className="blogAuthor">
                    <span>
                        <img src="/johnSmithPhoto.png" alt="" />
                        <p className="name">John Smith</p>
                    </span>
                    <hr />
                    <p className="date">15 march 2022</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.</p>
            </section>

            <section className="blogPostExplanation">
                <img src="/vodkaChef.png" alt="" className="blogPostImg" />
                <div className="contentWrap">
                    <div className="content">
                        <article>
                            <h3>How did you start out in the food industry?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                        </article>
                        <article>
                            <h3>What do you like most about your job?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                        </article>
                        <article>
                            <h3>Do you cook at home on your days off?</h3>
                            <img src="/woman.png" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                        </article>
                        <article>
                            <h3>What would your advice be to young people looking to get their foot in the door?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                        </article>
                        <article className="phrase">
                            <h2>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”</h2>
                        </article>
                        <article>
                            <h3>What is the biggest misconception that people have about being a professional chef?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                        </article>
                    </div>
                    <div className="shareContent">
                        <p>SHARE THIS ON:</p>
                        <div className="social">
                            <img src="/facebook.svg" alt="Facebook" className="socialimg" />
                            <img src="/twitter.svg" alt="Twitter" className="socialimg" />
                            <img src="/instagramBlack.svg" alt="Instagram" className="socialimg" />
                        </div>
                    </div>
                </div>

            </section>

            <Inbox />
            <section className="blogPostRecipes">
                <h6 className="detailsH6">Check out the delicious recipe</h6>
                <div className="otherRecipesGrid">
                    {bPostRecipes.map(recipe => {
                        return (<RecipeBox
                            key={recipe.id}
                            recipe={recipe}
                            url={`/recipe/${recipe.id}`}
                        />)
                    })}
                </div>
            </section>

        </main>
    )
}

export default BlogPost