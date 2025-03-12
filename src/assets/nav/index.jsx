import { Link } from "react-router-dom"
import "./styles.css"

function Nav() {

    return (
        <header id="header">
            <nav>
                <img src="/Foodieland.png" alt="Foodieland" className="brandlogo" />

                <div className="menu">
                    <ul>
                        <Link to="/" className="navbtn">Home</Link>
                        <Link to="/" className="navbtn">Recipies</Link>
                        <Link to="/" className="navbtn">Blog</Link>
                        <Link to="/" className="navbtn">Contact</Link>
                        <Link to="/" className="navbtn">About us</Link>
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
                        <Link to="/" className="navbtn">Home</Link>
                        <Link to="/" className="navbtn">Recipies</Link>
                        <Link to="/" className="navbtn">Blog</Link>
                        <Link to="/" className="navbtn">Contact</Link>
                        <Link to="/" className="navbtn">About us</Link>
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
