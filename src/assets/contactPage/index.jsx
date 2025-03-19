import RecipeBox from "../recipeBox";
import Inbox from "../inbox";
import "./styles.css"
import { useState, useEffect } from "react";
import axios from "axios";

function Contact() {
    const [conRecipes, setConRecipes] = useState([]);

    const getconRecipes = async () => {
        const savedContactRecipes = JSON.parse(sessionStorage.getItem('jsonContactRecipes')) || [];

        if (savedContactRecipes.length === 0) {
            const response = await axios.get('https://api.spoonacular.com/recipes/random?number=4&apiKey=3050a0340db147f8aa71da16e4c24be9')
            sessionStorage.setItem('jsonContactRecipes', JSON.stringify(response.data.recipes))
            setConRecipes(response.data.recipes)
        } else {
            setConRecipes(savedContactRecipes)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)

        getconRecipes()

    }, []);

    return (
        <main>
            <h1 className="contactH1">Contact Us</h1>
            <section className="contact">
                <img src="/contactPhoto.png" alt="" className="contactPhoto" />
                <form action="" className="contactForm">
                    <div>
                        <label htmlFor="name">NAME</label>
                        <input type="text" placeholder="Enter your name..." id="name" className="contactInput" />
                    </div>
                    <div>
                        <label htmlFor="email">EMAIL ADDRESS</label>
                        <input type="email" placeholder="Your email adress..." id="email" className="contactInput" />
                    </div>
                    <div>
                        <label htmlFor="subject">SUBJECT</label>
                        <input type="text" placeholder="Enter subject..." id="subject" className="contactInput" />
                    </div>
                    <div>
                        <label htmlFor="enquiry">ENQUIRY TYPE</label>
                        <select name="" id="enquiry" className="contactInput">
                            <option value="">advertising</option>
                        </select>
                    </div>
                    <article className="messageDiv">
                        <label htmlFor="messages" >MESSAGES</label>
                        <input type="text" placeholder="Enter your messages" id="messages" className="messageInput" />
                    </article>
                    <button className="btn">Submit</button>
                </form>
            </section>

            <section className="inboxContainer">
                <Inbox />
            </section>

            <h6 className="detailsH6">Check out the delicious recipe</h6>
            <div className="otherRecipesGrid">
                {conRecipes.map(recipe => {
                    return (<RecipeBox
                        key={recipe.id}
                        recipe={recipe}
                        url={`/recipe/${recipe.id}`}
                    />)
                })}
            </div>
        </main>
    )
}

export default Contact