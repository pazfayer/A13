import React from 'react'
import { CiHome,CiUser,CiSearch,CiShoppingCart    } from "react-icons/ci";
import logo from "/logo.png"

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl xl:px-28 px-4">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3 ">
        {/* Home, account and shopping cart */}
        <div className="text-lg text-white sm:flex items-center gap-4 hidden">
          {/* logo */}
          <a href="/"><img src={logo} alt=""/></a>
          {/* items*/}
          <a href="/" className="flex items-center gap-2"><CiHome/>Home</a>
          <a href="/" className="flex items-center gap-2"><CiUser/>Account</a>
          <a href="/" className="flex items-center gap-2"><CiShoppingCart/>Cart</a>
        </div>
        <div className="text-lg text-white sm:flex items-center gap-4 hidden">
        <a href="/" className='flex items-center gap2'><CiSearch/></a>
        </div>

      </nav>
    </header>
  )
}

export default Navbar
