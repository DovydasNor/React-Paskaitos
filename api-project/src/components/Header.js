import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/Posts'>Posts</Link></li>
            <li><Link to='/Users'>Users</Link></li>
            <li><Link to='/Albums'>Albums</Link></li>
            <li><Link to='/Search'>Search</Link></li>
        </ul>
    </div>
  )
}

export default Header