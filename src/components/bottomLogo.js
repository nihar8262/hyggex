import React from 'react'
import image from '../assets/hyggex2.png'
import {FaPlus} from "react-icons/fa"

export const BottomLogo = () => {
  return (
    <div className='flex items-center justify-between mt-16'>
        <div className='ml-[136px]'>
            <img src={image} style={{width:"190px"}}/>
        </div>

        <div className='flex items-center gap-4 mr-52'>
            <div className='p-2 rounded-full bg-gradient-to-b from-[#06286E] to-[#164EC0]'><FaPlus color='white' size={35}/></div>
            <p className='font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0]'>Create Flashcard</p>
        </div>
    </div>
  )
}
