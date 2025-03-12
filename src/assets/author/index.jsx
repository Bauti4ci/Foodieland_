import './styles.css'

function Author({ classType }) {
    return (
        <div className={classType}>
            <img src="/johnSmithPhoto.png" alt="" />
            <div className="authorName">
                <p className="name">John Smith</p>
                <p className="date">15 March 2022</p>
            </div>
        </div>
    )
}

export default Author