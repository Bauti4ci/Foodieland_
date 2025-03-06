function Post({ post }) {
    return (
        <article>
            <div>
                <div>
                    <img src="/foodiePFP.png" alt="" />
                    <span>
                        <p>Foodieland. <img src="/verifed.svg" alt="" /></p>
                        <p>Tokio, Japan</p>
                    </span>
                </div>
                <img src="/moreicon.svg" alt="" />
            </div>

            <div>
                <img src={post.image} alt="" />
                <img src="Svg/post/photonum.svg" alt="" />
            </div>

            <div>
                <div>
                    <div>
                        <img src="/like.svg" alt="" />
                        <img src="/comment.svg" alt="" />
                        <img src="/share.svg" alt="" />
                    </div>
                    <img src="/pagination.svg" alt="" />
                    <img src="/save.svg" alt="" />
                </div>
                <div>
                    <img src="/likePFP.png" alt="" />
                    <p>Liked by <b>craig_love</b> and <b>44,686 others</b></p>
                </div>
                <p><b>Foodieland.</b> {post.caption}</p>
                <p>September 19</p>
            </div>
        </article>
    )
}
export default Post