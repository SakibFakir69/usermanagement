


import React from 'react'
import { NavLink } from 'react-router-dom'

function NewUser() {
  return (
    <div>

        <div>
            <NavLink className='border border-black' to={`/adduser`}>New User</NavLink>
        </div>



    </div>
  )
}

export default NewUser