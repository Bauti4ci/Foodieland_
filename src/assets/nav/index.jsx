import { Link } from "react-router-dom"
import "./styles.css"
import { useState } from "react"

function Nav() {
    const [menuImg, setMenuImg] = useState("/menu.svg")
    const [navClass, setNavClass] = useState(`extended dynamic`)

    const openMenu = () => {
        if (menuImg === "/menu.svg") {
            setMenuImg("/closingX.svg")
            setNavClass(`extended dynamic view`)
        } else {
            setMenuImg("/menu.svg")
            setNavClass(`extended dynamic hideNav`)
        }

    }

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
                <img src={menuImg} alt="" className="minimized" onClick={openMenu} />
            </nav>

            <hr className="navHr" />

            <div className={navClass}>
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
