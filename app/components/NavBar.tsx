import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-green-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Social App</h1>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Profile</a></li>
          <li><a href="#" className="hover:underline">Login</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar