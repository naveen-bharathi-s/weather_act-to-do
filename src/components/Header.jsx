import React from 'react'

const Header = ({user}) => {
  return (
    <div>
        <h1 className='text-3xl font-medium text-purple-600'>Hello {user? user.toUpperCase(): "Guest"}!</h1>
    </div>
  )
}

export default Header