import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const Posts = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_expand=user')
      .then(res => res.json())
      .then(data => setPosts(data))
  })


  return (
    <>
      <h1>Posts</h1>
      <div>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id}>
              <h3>
                Post author: <Link to={`/users/${post.user.userId}`}>{post.user.name} ({post.user.username})</Link>
              </h3>
              <Link to={`/Posts/${post.id}`}>{post.title}</Link>
            </div>
          ))
          ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </>
  )
}

export default Posts