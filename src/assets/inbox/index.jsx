import "./styles.css"

function Inbox() {
    return (
        <>
            <section className="inbox" id="inbox">
                <p className="h7">Deliciousness to your inbox</p>
                <p className="inboxText">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor<br />
                    incididunt ut labore et dolore magna aliqut enim ad minim </p>

                <form action="" className="inboxForm">
                    <input type="email" className="inboxInput" placeholder="Your email address..." />
                    <button className="btn">
                        <p>Subscribe</p>
                    </button>
                </form>
                <img src="/inboxLeft.png" alt="" className={`hiddenMobile inboxImgLeft`} />
                <img src="/inboxRight.png" alt="" className={`hiddenMobile inboxImgRight`} />
            </section>
        </>
    )
}

export default Inbox