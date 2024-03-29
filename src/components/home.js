import React from 'react'
import {FaChevronRight} from 'react-icons/fa'
import {GoHome} from 'react-icons/go'

export const Home = () => {
  return (
    <div className='flex items-center gap-1 mt-[107px] ml-[102px]'>
       <div> <button><GoHome size={22} color='grey'/></button></div>
       <div><FaChevronRight size={15} color="#06286E"/></div>
       <button className='text-gray-400 font-bold'>Flashcard</button>
       <div><FaChevronRight size={15} color="#06286E"/></div>
       <button className='text-gray-400 font-bold'>Mathematics</button>
       <div><FaChevronRight size={15} color="#06286E"/></div>
       <button className='text-[#06286E] font-bold'>Relation and Function</button>


    </div>
  )
}
