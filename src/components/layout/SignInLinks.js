import React from 'react'
import {NavLink} from 'react-router-dom'
const SignInLinks = () => {
  return (
    <div>
     <ul className="right">
       <li>
         <NavLink to ='/create'>New Project</NavLink>
       </li>
       <li>
         <NavLink to ='/'>Logout</NavLink>
       </li>
       <li>
         <NavLink to ='/' className="btn btn-floating red darken-3">MP</NavLink>
       </li>
     </ul>
    </div>
  )
}

export default SignInLinks
