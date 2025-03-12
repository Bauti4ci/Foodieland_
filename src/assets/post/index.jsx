import "./styles.css"

function Post({ post }) {
    return (
        <article className="postBox">
            <div className="postHeader">
                <div className="postHeaderLeft">
                    <img src="/foodiePFP.png" alt="" className="postFoodie" />
                    <span>
                        <p className="postAuthor">Foodieland. <img src="/verifed.svg" alt="" className="verifed" /></p>
                        <p className="postLocation">Tokio, Japan</p>
                    </span>
                </div>
                <img src="/moreicon.svg" alt="" className="moreIcon" />
            </div>


            <img src={post.image} alt="" className="postImg" />
            <img src="/photonum.svg" alt="" className="photoNum" />


            <div className="postFoot">
                <div className="postInteraction">
                    <div className="lsc">
                        <img src="/like.svg" alt="" />
                        <img src="/comment.svg" alt="" />
                        <img src="/share.svg" alt="" />
                    </div>
                    <img src="/pagination.svg" alt="" className="pagination" />
                    <img src="/save.svg" alt="" />
                </div>
                <div className="likes">
                    <img src="/likePFP.png" alt="" />
                    <p>Liked by <b>craig_love</b> and <b>44,686 others</b></p>
                </div>
                <p className="caption"><b>Foodieland.</b> {post.caption}</p>
                <p className="postDate">September 19</p>
            </div>
        </article>
    )
}
export default Post