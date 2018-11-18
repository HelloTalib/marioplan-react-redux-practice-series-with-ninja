import React from 'react'
import {Link} from 'react-router-dom'
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper indigo lighten-1">
        <div className="container">
          <Link to = '/' className="brand-logo red-text text-darken-3"
        ><span>M</span>ario<span>P</span>lan</Link>
        <SignInLinks/>
        <SignOutLinks/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
