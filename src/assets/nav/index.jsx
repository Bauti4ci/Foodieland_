import "./styles.css"

function Nav() {

    return (
        <header id="header">
            <nav>
                <img src="/Foodieland.png" alt="Foodieland" className="brandlogo" />

                <div className="menu">
                    <ul>
                        <a href="#start" className="navbtn">Home</a>
                        <a href="#recipes" className="navbtn">Recipies</a>
                        <a href="#posts" className="navbtn">Blog</a>
                        <a href="#inbox" className="navbtn">Contact</a>
                        <a href="#learn" className="navbtn">About us</a>
                    </ul>
                </div>

                <div className="social">
                    <img src="/facebook.svg" alt="Facebook" className="socialimg" />
                    <img src="/twitter.svg" alt="Twitter" className="socialimg" />
                    <img src="/instagramBlack.svg" alt="Instagram" className="socialimg" />
                </div>
                <img src="Svg/nav/menu.svg" alt="" className="minimized" id="openClose" />
                {/* <button className="langToggle">
                    <img src="/toggle.svg" alt="" />
                    <p>EN</p>
                </button> */}
            </nav>

            <hr className="navHr" />

            <div className="extended" id="dynamic">
                <div className="menu">
                    <ul>
                        <a className="navbtn">Home</a>
                        <a className="navbtn">Recipies</a>
                        <a className="navbtn">Blog</a>
                        <a className="navbtn">Contact</a>
                        <a className="navbtn">About us</a>
                    </ul>
                </div>
                <div className="social">
                    <img src="/facebook.svg" alt="Facebook" className="socialimg" />
                    <img src="/twitter.svg" alt="Twitter" className="socialimg" />
                    <img src="/instagramBlack.svg" alt="Instagram" className="socialimg" />
                </div>
            </div>
        </header>
    )
}
export default Nav
