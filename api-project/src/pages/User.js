import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const User = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({})

    const { name, username, phone, email, posts, albums } = data

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}?_embed=posts&_embed=albums`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
    }, [id])

    return (
        <div>

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <main>
                    <h1>{name} ({username})</h1>
                    <ul>
                        <li>Phone: <a href={`tel:${phone}`}>{phone}</a></li>
                        <li>Email: <a href={`mailto:${email}`}>{email}</a></li>
                    </ul>
                </main>
            )}

            {posts && (
                <div className='user-posts-wrapper'>
                    <h2>{name} posts:</h2>

                    <ul>
                        {posts.map(post => {
                            const { id, title } = post
                            
                            return (
                                <li key={id}>
                                    <Link to={`/posts/${id}`}>{title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}

            {albums && (
                <div className='user-albums-wrapper'>
                    <h2>{name} albums:</h2>

                    <ul>
                        {albums.map(album => {
                            const { id, title } = album
                            
                            return (
                                <li key={id}>
                                    <Link to={`/albums/${id}`}>{title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default User