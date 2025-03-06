import "./styles.css"

function Categorie({ cate }) {
    return (
        <span className={cate.class}>
            <img src={cate.image} alt="" className="categoriesPhoto" />
            <img src={cate.image} alt="" className="shadow" />
            <p>{cate.name}</p>
        </span >
    )
}

export default Categorie