"use client"
import React, { useState }  from 'react'
import '../styles/navbar.css'
import Image from 'next/image'


function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }


  return (
    <div className='flex flex-row justify-between items-center sticky h-16 top-0 px-40 md:px-20 xs:px-10' id='navbar'>
      <div className='flex flex-row'>
        <nav className=' text-xl font-bold text-white xs:text-base'>VERLITH</nav>
      </div>

      <div className='flex flex-row items-center h-8 gap-8 xs:gap-2'>

        <div className='relative'>

          <button 
            onClick={toggleDropdown}
            className='text-base text-gray-300 flex flex-row gap-2 items-center xs:text-xs'>Explore
              <Image src='/icons/arrow-down.svg' alt='arrow' width={12} height={12} priority />
          </button>

          {isOpen && (
          <div className="absolute left-0 z-10 w-40 py-2 " id='dropdownMenu'>
          
        <ul className='bg-black border border-gray-800 rounded-lg'>

          <li className=' px-1 py-1 '>

              <button className='flex flex-row px-4 py-2 w-full hover:bg-gray-700 rounded-sm'>
                <Image src='/icons/users.svg' alt='arrow' width={16} height={16} priority />
                <nav className="text-sm text-gray-300 hover:text-white pl-4 xs:text-xs">About</nav>
              </button>

          </li>

          <li className=' px-1 py-1 '>
            
              <button className='flex flex-row px-4 py-2 w-full hover:bg-gray-700 rounded-sm'>
                <Image src='/icons/suitcase.svg' alt='arrow' width={16} height={16} priority />
                <nav className="text-sm text-gray-300 hover:text-white pl-4 xs:text-xs">Careers</nav>
              </button>

          </li>

        </ul>
        </div>
      )}
        </div>

        <nav className=' text-base text-gray-300 xs:text-xs'>NFT</nav>

        <nav className=' text-base text-gray-300 xs:text-xs'>Enterprise</nav>

        <button>
          <nav className=' text-base text-white xs:text-xs' id='connectButton'>Connect</nav>
        </button>   

      </div>

    </div>
  )
}

export default Navbar