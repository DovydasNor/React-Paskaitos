import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Post = () => {
    const { postId } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({})

    const { title, comments, body, user, userId } = data

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_embed=comments&_expand=user`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
    }, [postId])

    return (
        <div>

            {isLoading ? (
               <p>Loading...</p>
            ) : (
                <main>
                    <div className='post-wrapper'>

                        <h1>{title}</h1>
                        <span>Written by: <Link to={`/users/${userId}`}>{user.name}</Link></span>
                        <p>{body}</p>
                    </div>

                    {comments.length > 0 && (
                        <div className='comments-wrapper'>
                            <h2>Comments:</h2>

                            {comments.map(comment => {
                                const { email, body, name, id } = comment

                                return (
                                    <div key={id} className='comment-item'>
                                        <h3 className='comment-name'>{name}</h3>
                                        <span>Author email: {email}</span>
                                        <p>{body}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </main>
            )}

        </div>
    )
}

export default Post