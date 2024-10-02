import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Albums = () => {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos')
          .then(res => res.json())
          .then(data => setAlbums(data))
    },[])

  return (
    <>
        <h1>Albums</h1>
        <div>
            {albums.length > 0 ? (
            albums.map((albums) => (
                <div key={albums.id}>
                    <h3>
                        Album author: {albums.user.name}
                    </h3>
                    <div>
                        <img src={albums.photos[0].thumbnailUrl} alt={albums.photos[0].title}/>
                    </div>
                    <Link to={`/Albums/${albums.id}`}>{albums.title} </Link>
                </div>
            ))
            ) : (
            <p>Loading posts...</p>
            )}
      </div>
    </>
  )
}

export default Albums