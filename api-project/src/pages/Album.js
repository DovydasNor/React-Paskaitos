import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Album = () => {
    const { albumId } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({ title: '', photos: [] })

    const { title, photos, userId, user} = data

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}?_embed=photos&_expand=user`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
    }, [albumId])

    return (
        <div>

            {isLoading ? (
               <p>Loading...</p>
            ) : (
                <main>
                    <h1>Album - {title}</h1>

                    <h2>
                        Author: <Link to={`/users/${userId}`}>{user.name} ({user.username})</Link>
                    </h2>
                    
                    {Array.isArray(photos) && photos.length > 0 && (
                        <div className='photos-wrapper'>
                            <h2>Photos:</h2>
                            
                            {photos.map((photo) => {
                            const { url, id, title } = photo

                            return (
                                <div key={id} className='photo-item'>
                                    <h3>{title}</h3>
                                    <img src={url} alt={title} />
                                </div>
                            );
                            })}
                        </div>
                    )}
                </main>
            )}

        </div>
    )
}

export default Album