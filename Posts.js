const AllPosts = ({posts}) => {
    return <div>

    { posts.map( post =>{
        return <div className="postBlock" key = {post._id}>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <p>Price: {post.price}</p>
        <p>Location: {post.location}</p>
        <p>Author: {post.author.username}</p>
    </div>
    }
        
    )
        
    }
</div>
}
export default AllPosts