import HotRecipes from "../hotRecipes"

function Home() {
    return (
        <>
            <HotRecipes />
            <section>
                <div>
                    <h2>Categories</h2>
                    <button>
                        <p>View All Categories</p>
                    </button>
                </div>
                <div>
                    <Categorie />
                </div>
            </section>
            <section>
                <div>
                    <h3>Simple and tasty recipes</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
                <div>
                    <Recipe />
                </div>
            </section>
            <section>
                <div>
                    <h4>Everyone can be a chef in their own kitchen</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    <button><p>Learn More</p></button>
                </div>
                {/*<img src="" alt="" />*/}
            </section>
            <section>
                <div>
                    <h5>Check out @foodieland on Instagram</h5>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
                <div>
                    <Post />
                </div>
                <button>
                    <p>Visit Our Instagram</p>
                    {/* <img src="" alt="" /> */}
                </button>
            </section>
            <section>
                <div>
                    <h6>Try this delicious recipe to make our day</h6>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
                <Recipe />
            </section>
            <Inbox />
        </>
    )
}

export default Home