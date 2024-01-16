import React from 'react'
import {FaChevronRight} from 'react-icons/fa'
import {GoHome} from 'react-icons/go'

export const Home = () => {
  return (
    <div className='flex items-center gap-1 mt-[107px] ml-[102px]'>
       <div> <GoHome size={22} color='grey'/></div>
       <div><FaChevronRight size={15} color="#06286E"/></div>
       <p className='text-gray-400 font-bold'>Flashcard</p>
       <div><FaChevronRight size={15} color="#06286E"/></div>
       <p className='text-gray-400 font-bold'>Mathematics</p>
       <div><FaChevronRight size={15} color="#06286E"/></div>
       <p className='text-[#06286E] font-bold'>Relation and Function</p>


    </div>
  )
}
