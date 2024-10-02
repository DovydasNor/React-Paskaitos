import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_embed=posts')
      .then(res => res.json())
      .then(data => setUsers(data))
  })
  return (
    <div>
      <h1>Users List:</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/Users/${user.id}`}>{user.name} ({user.posts.length})</Link>
          </li>
        ))}
      </ul>
    </div>
    )

}

export default Users