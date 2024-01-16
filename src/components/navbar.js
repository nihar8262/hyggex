import React from 'react'
import image from "../assets/Component 40.png"

export const Navbar = () => {
  return (
    <div className='flex items-center'>
        {/* logo */}
        <div className=' mt-8 px-[104px]'>
            <img src={image} style={{width:"234px"}}/>
        </div>

        {/* nav items */}
        <div className='flex items-center w-[526px] gap-[40px] mt-[27px] ml-[612px] mr-20'>
            <button>Home</button>
            <button>Flashcard</button>
            <button>Contact</button>
            <button>FAQ</button>
            <div className='bg-gradient-to-b from-[#06286E] to-[#164EC0] text-center text-white text-lg rounded-3xl w-32 h-12 p-3 '>
            Login
            </div>
        </div>
    </div>
  )
}
