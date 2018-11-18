import React from 'react'
import {NavLink} from 'react-router-dom'
const SignOutLinks = () => {
  return (
    <div>
     <ul className="right">
       <li>
         <NavLink to ='/signup'>Signup</NavLink>
       </li>
       <li>
         <NavLink to ='/login'>Login</NavLink>
       </li>
     </ul>
    </div>
  )
}

export default SignOutLinks
