import "./styles.css"

function Footer() {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="topFooter">
                        <div className="footerLeft">
                            <img src="/Foodieland.png" alt="Foodieland" className="brandlogo" />
                            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
                        </div>
                        <div className="menu footerMenu">
                            <ul>
                                <a className="navbtn">Recipies</a>
                                <a className="navbtn">Blog</a>
                                <a className="navbtn">Contact</a>
                                <a className="navbtn">About us</a>
                            </ul>
                        </div>
                    </div>
                    <hr className="footerHr" />
                    <div className="bottomFooter">
                        <span></span>
                        <p>© 2020 Flowbase. Powered by <a href="">BautiFlow</a></p>
                        <div className="social">
                            <img src="/facebook.svg" alt="Facebook" className="socialimg" />
                            <img src="/twitter.svg" alt="Twitter" className="socialimg" />
                            <img src="/instagramBlack.svg" alt="Instagram" className="socialimg" />
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer